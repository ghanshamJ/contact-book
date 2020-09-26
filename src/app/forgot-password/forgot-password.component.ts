import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"]
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private authService: AuthServiceService) {}

  ngOnInit() {}
}
