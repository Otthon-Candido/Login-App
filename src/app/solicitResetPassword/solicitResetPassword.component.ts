import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SolicitResetPasswordInfos } from './solicitResetPassword.model';
import { firstValueFrom } from 'rxjs';
import { LoadingService } from 'src/app/utils/loading/loading.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './solicitResetPassword.component.html',
  styleUrls: ['./solicitResetPassword.component.scss'],
})
export class SolicitResetPasswordComponent implements OnInit {
  @ViewChild('content') private templateModal!: TemplateRef<any>;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public httpClient: HttpClient,
    private loadingService: LoadingService,
    private notification: NotifierService,
    private ngbModal: NgbModal
  ) {}

  successSolicitReset!: boolean;
  errorSolicitReset!: boolean;
  loading!: boolean;

  solicitResetPassWordForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.solicitResetPassWordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async solicitResetPassword() {
    this.loading = true;
    this.successSolicitReset = false;
    this.errorSolicitReset = false;
    const email = this.solicitResetPassWordForm.get('email')?.value;

    var solicitResetPasswordInfos: SolicitResetPasswordInfos = {
      email: email,
    };
    this.loadingService.show('Carregando');
    try {
      await firstValueFrom(
        this.authService.resetSolicit(solicitResetPasswordInfos)
      ).then(() => {
        this.notification.Success(
          `E-mail para resetar senha enviado para ${email}`,
          'Sucesso'
        );
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
