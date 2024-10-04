import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  user:any=[]
  constructor() {}

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }
}
