import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
  import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
 
import { ListUserComponent } from './../../pages/list-user/list-user.component';
import { HistoriqueComponent } from "src/app/pages/historique/historique.component";
 import { PickListComponent } from './../../pages/pick-list/pick-list.component';
import { EtatStockComponent } from "src/app/pages/etat-stock/etat-stock.component";
import { LesLogComponent } from "src/app/pages/les-log/les-log.component";
import { AdminGuard } from './../../service/admin.guard';
import { EtatConsomationComponent } from './../../pages/etat-consomation/etat-consomation.component';
import { ProfileComponent } from "src/app/pages/profile/profile.component";
import { AccueilComponent } from './../../pages/accueil/accueil.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent,canActivate: [AdminGuard] },
    { path: "user", component: ListUserComponent,canActivate: [AdminGuard] },
  { path: "tables", component: TablesComponent,canActivate: [AdminGuard] },
   { path: "historique", component: HistoriqueComponent ,canActivate: [AdminGuard]},
  { path: "etat-consomation-us", component: EtatConsomationComponent,canActivate: [AdminGuard] },
  { path: "details-pick-list", component: PickListComponent,canActivate: [AdminGuard] },
  { path: "etat-stock-dynamique", component: EtatStockComponent,canActivate: [AdminGuard] },
  { path: "les-logs", component: LesLogComponent,canActivate: [AdminGuard] },
  { path: "profile", component: UserComponent,canActivate: [AdminGuard] },
  
  { path: "accueil", component: AccueilComponent,canActivate: [AdminGuard] },




];
