/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthSocialLink } from '@nebular/auth';
import { getDeepFromObject } from '@nebular/auth/helpers';

import { NbAuthService } from '@nebular/auth';
import { NbAuthResult } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  template: `
    <nb-auth-block>
      <h2 class="title">大學生註冊</h2>
      <form (ngSubmit)="register()" #form="ngForm">

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

        <!-- div class="form-group">
          <label for="input-name" class="sr-only">Full name</label>
          <input name="fullName" [(ngModel)]="user.fullName" id="input-name" #fullName="ngModel"
                 class="form-control" placeholder="Full name"
                 [class.form-control-danger]="fullName.invalid && fullName.touched"
                 [required]="getConfigValue('forms.validation.fullName.required')"
                 [minlength]="getConfigValue('forms.validation.fullName.minLength')"
                 [maxlength]="getConfigValue('forms.validation.fullName.maxLength')"
                 autofocus>
          <small class="form-text error" *ngIf="fullName.invalid && fullName.touched && fullName.errors?.required">
            Full name is required!
          </small>
          <small
            class="form-text error"
            *ngIf="fullName.invalid && fullName.touched && (fullName.errors?.minlength || fullName.errors?.maxlength)">
            Full name should contains
            from {{getConfigValue('forms.validation.fullName.minLength')}}
            to {{getConfigValue('forms.validation.fullName.maxLength')}}
            characters
          </small>
        </div -->

        <div class="form-group">
          <div class="row">
            <label for="input-email" class="sr-only">Email address</label>
            <div class="col-md-5 input-group" style="padding-right: 0px; !important">
              <input name="email_prefix" [(ngModel)]="user.email_prefix" id="input-email" #email="ngModel"
                    class="form-control" placeholder="Email prefix"
                    [class.form-control-danger]="email.invalid && email.touched"
                    [required]="getConfigValue('forms.validation.email.required')"
                    autofocus>
            </div>
            <div class="col-md-7 input-group" style="padding-left: 0px; !important">
              <div class="input-group-addon">@</div>
              <select class="form-control" name="email_suffix" 
                [(ngModel)]="user.email_suffix"
                [required]="true">
                <option value="@gmail.com">gmail.com</option>
              </select>
              
            </div>
          </div>
          <small class="form-text error" *ngIf="email.invalid && email.touched && email.errors?.required">
          請輸入電郵！
          </small>
          <small class="form-text error"
                 *ngIf="email.invalid && email.touched && email.errors?.pattern">
            Email should be the real one!
          </small>
        </div>

        <div class="form-group">
          <label for="input-password" class="sr-only">Password</label>
          <input name="password" [(ngModel)]="user.password" type="password" id="input-password"
                 class="form-control" placeholder="Password" #password="ngModel"
                 [class.form-control-danger]="password.invalid && password.touched"
                 [required]="getConfigValue('forms.validation.password.required')"
                 [minlength]="getConfigValue('forms.validation.password.minLength')"
                 [maxlength]="getConfigValue('forms.validation.password.maxLength')">
          <small class="form-text error" *ngIf="password.invalid && password.touched && password.errors?.required">
            請輸入密碼！
          </small>
          <small
            class="form-text error"
            *ngIf="password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)">
            密碼需有
             {{ getConfigValue('forms.validation.password.minLength') }}
            至 {{ getConfigValue('forms.validation.password.maxLength') }}
            字元！
          </small>
        </div>

        <div class="form-group">
          <label for="input-re-password" class="sr-only">Repeat password</label>
          <input
            name="rePass" [(ngModel)]="user.confirmPassword" type="password" id="input-re-password"
            class="form-control" placeholder="Confirm Password" #rePass="ngModel"
            [class.form-control-danger]="(rePass.invalid || password.value != rePass.value) && rePass.touched"
            [required]="getConfigValue('forms.validation.password.required')">
          <small class="form-text error"
                 *ngIf="rePass.invalid && rePass.touched && rePass.errors?.required">
            請輸入確認密碼！
          </small>
          <small
            class="form-text error"
            *ngIf="rePass.touched && password.value != rePass.value && !rePass.errors?.required">
            兩次輸入密碼不相同！
          </small>
        </div>

        <div class="form-group accept-group col-sm-12" *ngIf="getConfigValue('forms.register.terms')">
          <nb-checkbox name="terms" [(ngModel)]="user.terms" [required]="getConfigValue('forms.register.terms')">
            <a href="#" target="_blank">註冊即代表您同意遵守<strong>Secret Angel 使用協議</strong></a>
          </nb-checkbox>
        </div>

        <button [disabled]="submitted || !form.valid" class="btn btn-block btn-hero-success"
                [class.btn-pulse]="submitted">
          註冊
        </button>
      </form>

      <div class="links">

        <ng-container *ngIf="socialLinks && socialLinks.length > 0">
          <small class="form-text">Or connect with:</small>

          <div class="socials">
            <ng-container *ngFor="let socialLink of socialLinks">
              <a *ngIf="socialLink.link"
                 [routerLink]="socialLink.link"
                 [attr.target]="socialLink.target"
                 [attr.class]="socialLink.icon"
                 [class.with-icon]="socialLink.icon">{{ socialLink.title }}</a>
              <a *ngIf="socialLink.url"
                 [attr.href]="socialLink.url"
                 [attr.target]="socialLink.target"
                 [attr.class]="socialLink.icon"
                 [class.with-icon]="socialLink.icon">{{ socialLink.title }}</a>
            </ng-container>
          </div>
        </ng-container>

        <small class="form-text">
        已有帳號? <a routerLink="../login"><strong>登入</strong></a>
        </small>
      </div>
    </nb-auth-block>
  `,
})
export class NgxRegisterComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  socialLinks: NbAuthSocialLink[] = [];

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected router: Router,
              private http:HttpClient) {

    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.strategy = this.getConfigValue('forms.register.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.user.email = this.user.email_prefix + this.user.email_suffix;
    console.log(this.user);
    this.service.register(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      console.log(result)
      if (result.isSuccess()) {
        console.log('result:',result.getToken());
        this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key=AIzaSyCArKJ0r9ZgJlWk9gw9utGwWKIXTtMmd-w', {
          "requestType": "VERIFY_EMAIL",
	        "idToken": String(result.getToken())
        }).subscribe((data)=>{
          console.log(data)
          this.messages = result.getMessages();
          this.messages.push("電郵已成功發出，請到閣下郵箱激活帳號。")
        })

        // create a user record in Firestore
        this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyCArKJ0r9ZgJlWk9gw9utGwWKIXTtMmd-w', {
          "idToken": String(result.getToken())
        }).subscribe((data)=>{
          this.http.patch('https://firestore.googleapis.com/v1beta1/projects/secretangel-dev/databases/(default)/documents/users/'+String(data['users'][0]['localId']),{
          // define all fields for a user  
          "fields": {
              "email": {
                "stringValue": String(this.user.email)
              },
              "major": {
                "stringValue": ""
              },
              "college": {
              "stringValue": ""
              },
              "dob": {
              "stringValue": ""
              },
              "status_current": {
              "stringValue": ""
              },
              "status_times": {
              "stringValue": ""
              },
              "height": {
              "stringValue": ""
              },
              "weight": {
              "stringValue": ""
              },
              "smoke": {
              "stringValue": ""
              },
              "description": {
              "stringValue": ""
              },
            }
          }).subscribe(()=>{})
        })
        
      } else {
        // this.errors = result.getErrors();
        this.errors = [result.getResponse()['error']['error']['message']];
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
