import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddContactComponent } from "./add-contact/add-contact.component";
import { SearchContactComponent } from "./search-contact/search-contact.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserSignInComponent } from "./user-sign-in/user-sign-in.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthServiceService } from "./auth-service.service";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard.ts.guard";
const routes: Routes = [
  {
    path: "add_contacts",
    component: AddContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "search_contacts",
    component: SearchContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "create-account",
    component: UserFormComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  {
    path: "sign-in",
    component: UserSignInComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private auth: AuthServiceService) {}
}
