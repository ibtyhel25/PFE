import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: string = "red";

  constructor() {}
  changeSidebarColor(color){
    console.log("side bare"+color);
    
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
        console.log(mainPanel);
        
    }
  }
  changeDashboardColor(color){
    
 
 
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
 
  }
  ngOnInit() {
    this.sidebarColor='bareblue'
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

 
 
        sidebar.setAttribute('data',"green");
        mainPanel.setAttribute('data',"green");
 


    var body = document.getElementsByTagName('body')[0];
  
        body.classList.add("white-content");
 
 
}
}
