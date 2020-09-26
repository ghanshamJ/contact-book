import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/database";
@Injectable({
  providedIn: "root"
})
export class BackendApiService {
  private basePath = "/contacts";
  constructor(private db: AngularFireDatabase) {}
  public addContact(uid, data) {
    const obj = this.db.database.ref(this.basePath + "/" + uid);
    const s = obj.push(data);
    console.log("Success");
  }
  public getContact(uid): Observable<any[]> {
    return this.db.list(this.basePath + "/" + uid).valueChanges();
  }
}
