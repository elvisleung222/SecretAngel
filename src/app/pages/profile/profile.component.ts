import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnDestroy {

  major: string;
  college: string;
  dob: string;
  status_current: string;
  status_times: string;
  height: string;
  weight: string;
  smoke: string;
  description: string;

  constructor() {
  }

  submit(){
    console.log(this.major);
    console.log(this.college);
    console.log(this.dob);
    console.log(this.status_current);
    console.log(this.status_times);
    console.log(this.height);
    console.log(this.weight);
    console.log(this.smoke);
    console.log(this.description);
  }
  ngOnDestroy() {
  }
}
