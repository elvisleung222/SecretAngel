import {Component, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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


  constructor(private http:HttpClient) {
    this.http.get('https://firestore.googleapis.com/v1beta1/projects/secretangel-dev/databases/(default)/documents/user/elvis').subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

  submit(){
    this.http.patch('https://firestore.googleapis.com/v1beta1/projects/secretangel-dev/databases/(default)/documents/user/elvis', {
      "fields": {
        "major": {
         "stringValue": String(this.major)
        },
        // "college": {
        //  "stringValue": this.college
        // },
        // "dob": {
        //  "stringValue": this.dob
        // },
        // "status_current": {
        //  "stringValue": this.status_current
        // },
        // "status_times": {
        //  "stringValue": this.status_times
        // },
        // "height": {
        //  "stringValue": this.height
        // },
        // "weight": {
        //  "stringValue": this.weight
        // },
        // "smoke": {
        //  "stringValue": this.smoke
        // },
        // "description": {
        //  "stringValue": this.description
        // },
       }
    },httpOptions).subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
  ngOnDestroy() {
  }
}
