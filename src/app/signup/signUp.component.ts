import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SignUpInfos } from './signUp.model';
import { LoadingService } from 'src/app/utils/loading/loading.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { firstValueFrom } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teste',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss'],
})
export class SignUpComponent implements OnInit {
  showPassword = false;
  password = ''
  showRePassword = false;
  rePassword = ''
  passwordResult: boolean = true;
  passwordRegexResult: boolean = true;
  SuccessSignUp: boolean = false;
  @ViewChild('content') private templateModal!: TemplateRef<any>;

  signUpForm: FormGroup = this.formBuilder.group({
    userName: [''],
    email: [''],
    password: [''],
    rePassword: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loadingService: LoadingService,
    private notification: NotifierService,
    private ngbModal: NgbModal
  ) {}
  closeResult = '';
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userName: [
        '',
        [Validators.required],
        // this.UserNotTakenValidatorService.checkUserNameTaken()
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]],
    });
  }

  async register() {
    const userName = this.signUpForm.get('userName')?.value;
    const password = this.signUpForm.get('password')?.value;
    const email = this.signUpForm.get('email')?.value;
    const rePassword = this.signUpForm.get('rePassword')?.value;

    if (password != rePassword) {
      this.notification.Warning('As senhas não se conferem', 'Aviso');
      return;
    }

    let allowedRegex: any = new RegExp(
      `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$&*~]).{8,}$`
    );
    // Verifica se a tecla pressionada corresponde à expressão regular de senha.
    if (!allowedRegex.test(password)) {
      this.notification.Warning(
        'Senha deve conter no mínimo 8 caracteres, letra maiúscula, numeros e caracteres especiais',
        'Aviso'
      );
      return;
    }

    let signUpInfos: SignUpInfos = {
      nickName: userName,
      email: email,
      password: password,
      rePassword: rePassword,
    };

    this.loadingService.show('Carregando');
    try {
      await firstValueFrom(this.authService.register(signUpInfos)).then(() => {
        this.SuccessSignUp = true;
        this.notification.Success('Usuário cadastrado', 'Sucesso');
        this.ngbModal.open(this.templateModal, {
          ariaLabelledBy: 'modal-basic-title',
        });
      });
    } catch (err) {
      this.notification.Error(err, 'Erro');
    } finally {
      this.loadingService.hide();
    }
  }
}
