import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BackendApiService } from "../services/backend-api.service";
import { AuthServiceService } from "../auth-service.service";
@Component({
  selector: "app-search-contact",
  templateUrl: "./search-contact.component.html",
  styleUrls: ["./search-contact.component.css"],
})
export class SearchContactComponent implements OnInit {
  private contacts: Observable<any[]>;
  constructor(
    private tmp: BackendApiService,
    private auth: AuthServiceService
  ) {}
  ngOnInit() {
    this.getContact();
  }
  private getContact() {
    if (this.auth.userData.uid)
      this.contacts = this.tmp.getContact(this.auth.userData.uid);
  }
  private toggleDisplay(str) {
    let val = str.toLowerCase();
    var td = document.getElementsByTagName("td");
    let words = "";
    for (let k = 0; k < td.length; k++) {
      if (td[k].innerText.toLowerCase().includes(val)) {
        td[k].innerHTML = td[k].innerText.replace(
          val,
          `<span style="color:gold">${val}</span>`
        );
      }
    }
  }
}
