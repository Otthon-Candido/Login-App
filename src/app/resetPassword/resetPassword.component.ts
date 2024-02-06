import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ResetPasswordInfos } from './resetPassword.model';
import { firstValueFrom } from 'rxjs';
import { LoadingService } from 'src/app/utils/loading/loading.service';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  templateUrl: './ResetPassword.component.html',
  styleUrls: ['./ResetPassword.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private notification: NotifierService,
  ) {}

  userId!: string;
  token!: string;
  passwordResult: boolean = true;
  errResetPassword: boolean = false;
  passwordRegexResult: boolean = true;
  SuccessReset: boolean = false;
  showPassword = false;
  password = ''
  showRePassword = false;
  rePassword = ''

  ResetPassWordForm: FormGroup = this.formBuilder.group({
    password: ['', [Validators.required]],
    rePassword: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.ResetPassWordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['userId'];
      this.token = decodeURIComponent(params['resetToken']);
    });
  }

  async resetPassword() {
    this.SuccessReset = false;
    this.errResetPassword = false;
    this.passwordRegexResult = true;
    const password = this.ResetPassWordForm.get('password')?.value;
    const rePassword = this.ResetPassWordForm.get('rePassword')?.value;
  
    if(password != rePassword)
    {
        this.notification.Warning("As senhas não se conferem", "Aviso")
        return;
    }

    let allowedRegex: any = new RegExp(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$&*~]).{8,}$`);
    // Verifica se a tecla pressionada corresponde à expressão regular de senha.
    if (!allowedRegex.test(password)) {
        this.notification.Warning("Senha deve conter no mínimo 8 caracteres, letra maiúscula, numeros e caracteres especiais", "Aviso")
        return;
    
    }

    let resetPasswordInfos: ResetPasswordInfos = {
      password: password,
      token: this.token,
      idUser: this.userId
    };
    this.loadingService.show('Carregando');
    try {
      await firstValueFrom(
        this.authService.resetPassword(
          resetPasswordInfos
        )
      ).then((result) => {
        this.SuccessReset = true;
        this.notification.Success("Senha alterada com sucesso", 'Sucesso');
      });
    } catch (err) {
      this.notification.Error(err, 'Erro');
    } finally {
      this.loadingService.hide();
    }
  }
}
