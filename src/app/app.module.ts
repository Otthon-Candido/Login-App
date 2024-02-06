import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { LoadingService } from './utils/loading/loading.service';
import { ToastrModule } from 'ngx-toastr';
import { LoadingComponent } from './components/loading/loading.component';
const ngxLoading = {
  animationType: ngxLoadingAnimationTypes.threeBounce,
  backdropBackgroundColour: 'rgba(0,0,0,0.4)',
  backdropBorderRadius: '3px',
  primaryColour: '#1c1c1e',
  secondaryColour: '#35363a',
  tertiaryColour: '#4b4c4d',
};
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { SolicitResetPasswordModule } from './solicitResetPassword/solicitResetPassword.module';

@NgModule({
  declarations: [LoadingComponent, AppComponent],
  imports: [
    HomeModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 1500,
    }),
    NgxLoadingModule.forRoot(ngxLoading),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
