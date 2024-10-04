import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from "./service/login.service";
import { UserService } from "./service/user.service";
import { authInterceptorProviders } from "./service/auth.interceptor";
import { HistoriqueComponent } from './pages/historique/historique.component';
import { NgxPaginationModule } from "ngx-pagination";
import { EtatStockComponent } from './pages/etat-stock/etat-stock.component';
import { LesLogComponent } from './pages/les-log/les-log.component';
 import { PickListComponent } from './pages/pick-list/pick-list.component';
import { EtatConsomationComponent } from './pages/etat-consomation/etat-consomation.component';
import { UsService } from "./service/us.service";
import { ProfileComponent } from './pages/profile/profile.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MvttestService } from "./service/mvttest.service";
 
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent, HistoriqueComponent, EtatStockComponent, LesLogComponent, PickListComponent, EtatConsomationComponent, ProfileComponent, AccueilComponent],
  providers: [LoginService,UserService,
    MvttestService,UsService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
