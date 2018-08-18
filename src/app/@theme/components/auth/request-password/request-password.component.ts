/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS } from '@nebular/auth';
import { getDeepFromObject } from '@nebular/auth/helpers';

import { NbAuthService } from '@nebular/auth';
import { NbAuthResult } from '@nebular/auth';

@Component({
  selector: 'nb-request-password-page',
  styleUrls: ['./request-password.component.scss'],
  template: `
    <nb-auth-block>
      <h2 class="title">忘記密碼</h2>
      <small class="form-text sub-title">請輸入你的登記電郵，重設連結將會發送到你的郵箱</small>
      <form (ngSubmit)="requestPass()" #requestPassForm="ngForm">

        <div *ngIf="showMessages.error && errors && errors.length > 0 && !submitted"
             class="alert alert-danger" role="alert">
          <div><strong>糟糕!</strong></div>
          <div *ngFor="let error of errors">{{ error }}</div>
        </div>
        <div *ngIf="showMessages.success && messages && messages.length > 0 && !submitted"
             class="alert alert-success" role="alert">
          <div><strong>好!</strong></div>
          <div *ngFor="let message of messages">{{ message }}</div>
        </div>

        <div class="form-group">
          <label for="input-email" class="sr-only">Enter your email address</label>
          <input name="email" [(ngModel)]="user.email" id="input-email" #email="ngModel"
                 class="form-control" placeholder="Email address" pattern=".+@.+\..+"
                 [class.form-control-danger]="email.invalid && email.touched"
                 [required]="getConfigValue('forms.validation.email.required')"
                 autofocus>
          <small class="form-text error" *ngIf="email.invalid && email.touched && email.errors?.required">
            輸入電郵！
          </small>
          <small class="form-text error"
                 *ngIf="email.invalid && email.touched && email.errors?.pattern">
            請輸入正確電郵！
          </small>
        </div>

        <button [disabled]="submitted || !requestPassForm.form.valid" class="btn btn-hero-success btn-block"
                [class.btn-pulse]="submitted">
          重設密碼
        </button>
      </form>

      <div class="links col-sm-12">
        <small class="form-text">
          己有帳號? <a routerLink="../login"><strong>登入</strong></a>
        </small>
        <small class="form-text">
          <a routerLink="../register"><strong>大學生註冊</strong></a>
        </small>
      </div>
    </nb-auth-block>
  `,
})
export class NgxRequestPasswordComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  hfh: any;

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
    this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
    this.strategy = this.getConfigValue('forms.requestPassword.strategy');
  }

  requestPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.user["requestType"] = "PASSWORD_RESET";
    this.service.requestPassword(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
