import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
  import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";

 
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ListUserComponent } from "src/app/pages/list-user/list-user.component";
import { NgxPaginationModule } from "ngx-pagination";
 
@NgModule({
  imports: [
    CommonModule,//utilisé dans les modules enfants-exporte les directives ngIf, et ngFor
    RouterModule.forChild(AdminLayoutRoutes),//appel de toutes les routes declarèes
    FormsModule,//pour utiliser les modules angular
    HttpClientModule,//lsn
    NgbModule,//bootstrap 
    NgxPaginationModule//pagination bbt
    
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
      ListUserComponent
    
    
  ]
})
export class AdminLayoutModule {}
