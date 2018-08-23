import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NbAuthService,NbAuthJWTToken } from '@nebular/auth'

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
  email: any = '';
  isLogin: boolean = false;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private authService: NbAuthService) {

                this.email = localStorage.getItem('email')
                // this.authService.getToken()
                // .subscribe((data) => {
                //   console.log(data.getValue());
                // });

                this.authService.isAuthenticated()
                .subscribe((data) => {
                  this.isLogin = data;
                });
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  logout() {
    this.isLogin = false;
    localStorage.clear();
    this.authService.logout('email').subscribe((data) => {
      console.log(data.getMessages());
    });
  }
}
