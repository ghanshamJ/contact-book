import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-sign-in",
  templateUrl: "./user-sign-in.component.html",
  styleUrls: ["./user-sign-in.component.css"]
})
export class UserSignInComponent implements OnInit {
  constructor(public authService: AuthServiceService) {}
  ngOnInit() {}
}
