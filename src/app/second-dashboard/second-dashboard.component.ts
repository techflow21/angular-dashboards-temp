import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second-dashboard',
  templateUrl: './second-dashboard.component.html',
  styleUrls: ['./second-dashboard.component.css'],
})

export class SecondDashboardComponent {
  title = 'angular16';
  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }
  
  data: any;
  constructor(private http: HttpClient) {
    //get request from web api
    this.http.get('https://therichpost.com/testjsonapi/users/').subscribe(
      (data) => {
        this.data = data;
      },
      (error) => console.error(error)
    );
  }
}
