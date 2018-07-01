import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProddetailsComponent } from './proddetails/proddetails.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { UserregisterComponent } from './userregister/userregister.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProddetailsComponent,
    AdminregisterComponent,
    UserregisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: [
        { name: "login", url: "/", component: LoginComponent },
        { name: "logins", url: "/login", component: LoginComponent },
        { name: "dashboard", url: "/dashboard", component: DashboardComponent },
        { name: "uregister", url: "/uregister", component: UserregisterComponent },
        { name: "aregister", url: "/aregister", component: AdminregisterComponent },
        { name: "proddetails", url: "/proddetails", component: ProddetailsComponent }
      ]
    })
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
