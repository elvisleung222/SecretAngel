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

  loading = true;

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
    this.http.get('https://firestore.googleapis.com/v1beta1/projects/secretangel-dev/databases/(default)/documents/users/'+localStorage.getItem('id')).subscribe(
      (data) => {
        this.major = data['fields']['major']['stringValue'];
        this.college = data['fields']['college']['stringValue'];
        this.dob = data['fields']['dob']['stringValue'];
        this.status_current = data['fields']['status_current']['stringValue'];
        this.status_times = data['fields']['status_times']['stringValue'];
        this.height = data['fields']['height']['stringValue'];
        this.weight = data['fields']['weight']['stringValue'];
        this.smoke = data['fields']['smoke']['stringValue'];
        this.description = data['fields']['description']['stringValue'];
        this.loading = false
      }
    )
  }

  submit(){
    this.loading = true;
    this.http.patch('https://firestore.googleapis.com/v1beta1/projects/secretangel-dev/databases/(default)/documents/users/'+localStorage.getItem('id'), {
      "fields": {
        "major": {
         "stringValue": String(this.major)
        },
        "college": {
         "stringValue": String(this.college)
        },
        "dob": {
         "stringValue": String(this.dob)
        },
        "status_current": {
         "stringValue": String(this.status_current)
        },
        "status_times": {
         "stringValue": String(this.status_times)
        },
        "height": {
         "stringValue": String(this.height)
        },
        "weight": {
         "stringValue": String(this.weight)
        },
        "smoke": {
         "stringValue": String(this.smoke)
        },
        "description": {
         "stringValue": String(this.description)
        },
       }
    },httpOptions).subscribe(
      (data) => {
        console.log(data)
        this.loading = false;
      }
    )
  }
  ngOnDestroy() {
  }
}
