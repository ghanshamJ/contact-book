import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "./auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private auth: AuthServiceService, private router: Router) {
    if (this.auth.isLoggedIn) {
      //this.router.navigate(["dashboard"]);
    } else {
      //this.router.navigate(["sign-in"]);
    }
  }
  OnInit() {}
  title = "Contact-Book";
}
