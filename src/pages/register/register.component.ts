import { Component, OnInit } from "@angular/core";
import {
  Platform,
  Navbar,
  NavController,
  NavParams,
  IonicPage,
  ToastController
} from "ionic-angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Account } from "../../models/account/account.model";
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: "app-register",
  templateUrl: "register.component.html"
})
export class RegisterComponent implements OnInit {
  account = {} as Account;
  constructor(
    private navCtrl: NavController,
    private navParam: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController
  ) {}

  ngOnInit() {}

  async register() {
    try {
      //const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
      this.toast
        .create({
          message: "User is successfully registered",
          duration: 3000
        })
        .present();
      this.navCtrl.push(ProfileComponent, {
        result: {
          user: {
            apiKey: "AIzaSyDhDMsfBQh9uJI3YY1mFMKKyqhq_1TOgic",
            appName: "[DEFAULT]",
            authDomain: "connect-io-6edb3.firebaseapp.com",
            createdAt: "1557239548058",
            displayName: null,
            email: "a@gmail.com",
            emailVerified: false,
            isAnonymous: false,
            lastLoginAt: "1557239548058",
            phoneNumber: null,
            photoURL: null,
            providerData: null,
            redirectEventId: null,
            uid: "u4QGdZTX4Cb6VJRiGZn0I14ULW43"
          }
        }
      });
    } catch (e) {
      console.log(e);
      this.toast
        .create({
          message: e.message,
          duration: 3000
        })
        .present();
    }
  }
}
