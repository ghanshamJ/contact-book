import { Component, OnInit } from "@angular/core";
import { BackendApiService } from "../services/backend-api.service";
import { AuthServiceService } from "../auth-service.service";
@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.css"],
})
export class AddContactComponent implements OnInit {
  private isAdded: boolean = false;
  constructor(
    private fire_api: BackendApiService,
    private auth: AuthServiceService
  ) {}
  ngOnInit() {}
  private validateEmail(email: string) {
    var re: RegExp = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  public addContact(nm: string, mo: string, mail: string) {
    if (nm.length < 1) {
      this.isAdded = false;
      alert("please enter valid Name");
      return false;
    }
    if (mo.length < 10) {
      this.isAdded = false;
      alert("please enter valid Mobile No");
      return false;
    }

    if (!this.validateEmail(mail)) {
      this.isAdded = false;
      alert("please enter valid Email");
      return false;
    }

    let contact = {
      name: nm,
      mobile: mo,
      email: mail,
    };

    this.fire_api.addContact(this.auth.userData.uid, contact);
    this.isAdded = true;
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("email") as HTMLInputElement).value = "";
    (document.getElementById("contact") as HTMLInputElement).value = "";
  }
}
