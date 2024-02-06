import { Component, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ConfirmSignUpInfos } from './confirm-sign-up.model';
import { LoadingService } from '../utils/loading/loading.service';
import { NotifierService } from '../services/notifier.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-sign-up',
  templateUrl: './confirm-sign-up.component.html',
  styleUrls: ['./confirm-sign-up.component.scss'],
})
export class ConfirmSignUpComponent {
  @ViewChild('content') private templateModal!: TemplateRef<any>;
  @ViewChild('contentError') private contentError!: TemplateRef<any>;
  userId: string = '';
  activateCode: string = '';
  messageErro: any = '';
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private notification: NotifierService,
    private ngbModal: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.userId = params['userId'];
      this.activateCode = decodeURIComponent(params['activateCode']);
    });
    this.activateUser();
  }

  async activateUser() {
    var confirmSignUpInfos: ConfirmSignUpInfos = {
      UserId: this.userId,
      ActivateCode: this.activateCode,
    };
    try {
      await firstValueFrom(
        this.authService.confirmSignUp(confirmSignUpInfos)
      ).then(() => {
        this.notification.Success(`Usuário ativado`, 'Sucesso');
        var modalRef = this.ngbModal.open(this.templateModal, {
          ariaLabelledBy: 'modal-basic-title',
        });
        modalRef.result.then(
          () => {
            this.router.navigate(['/login']);
          },
          () => {
            this.router.navigate(['/login']);
          }
        );
      });
    } catch (err) {
      this.messageErro = err
      this.notification.Error(err, 'Erro');
      var modalRef = this.ngbModal.open(this.contentError, {
        ariaLabelledBy: 'modal-basic-title',
      });
      modalRef.result.then(
        () => {
          this.router.navigate(['/login']);
        },
        () => {
          this.router.navigate(['/login']);
        }
      );
    } finally {
      this.loadingService.hide();
    }
  }
}
