import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PreAuthRoutingModule
  ]
})
export class PreAuthModule { }
