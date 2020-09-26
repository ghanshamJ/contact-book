import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  constructor(public authService: AuthServiceService) {}
  ngOnInit(): void {}
}
