import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { LoadingService } from 'src/app/utils/loading/loading.service';
import { LoginInfo } from './signin.model';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  templateUrl: 'signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {
  loading: boolean = false;
  loginResult: boolean = false;
  showPassword = false;
  password = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public httpClient: HttpClient,
    private loadingService: LoadingService,
    private notification: NotifierService,
    private userService: UserService
  ) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['teste@gmail.com', [Validators.required]],
      password: ['Teste123*', [Validators.required]],
    });
  }

  async login() {
    this.loading = true;
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    var loginInfo: LoginInfo = {
      userName: userName,
      password: password,
    };
    this.loadingService.show('Carregando');
    try {
      await firstValueFrom(this.authService.authenticate(loginInfo)).then(
        (result) => {
          this.userService.setToken(result);
          this.notification.Success('Login efetuado com sucesso', 'Sucesso');
          this.router.navigate(['home/user']);
        }
      );
    } catch (err) {
      this.notification.Error(err, 'Erro');
    } finally {
      this.loadingService.hide();
    }
  }
}
