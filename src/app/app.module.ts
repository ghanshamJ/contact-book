import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BackendApiService } from "./services/backend-api.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { AddContactComponent } from "./add-contact/add-contact.component";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { SearchContactComponent } from "./search-contact/search-contact.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { AuthServiceService } from "./auth-service.service";
import { UserSignInComponent } from "./user-sign-in/user-sign-in.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    SearchContactComponent,
    UserFormComponent,
    UserSignInComponent,
    DashboardComponent,
    UserProfileComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthServiceService,
    BackendApiService,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
