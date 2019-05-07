import { Component, OnInit } from "@angular/core";
import {
  Platform,
  Navbar,
  NavController,
  NavParams,
  IonicPage
} from "ionic-angular";
import { RegisterComponent } from "../register/register.component";
import { TabsComponent } from "../tabs/tabs.component";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Account } from "../../models/account/account.model";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  account = {} as Account;
  constructor(
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {}

  ngOnInit() {}

  async login() {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(
        this.account.email,
        this.account.password
      );
      console.log(result);
    } catch (e) {
      console.log(e.message);
    }
  }

  navigateToPage(page: string) {
    console.log(page);
    if (page === RegisterComponent.name) {
      this.navCtrl.push(RegisterComponent);
    } else if (page === TabsComponent.name) {
      this.navCtrl.setRoot(TabsComponent);
    }
  }
}
