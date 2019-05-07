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
import { User } from "../../models/user/user.model";
import data from "../../json/countrycode";

@Component({
  selector: "app-profile",
  templateUrl: "profile.component.html"
})
export class ProfileComponent implements OnInit {
  sendOtpCheck: boolean = true;
  avatar =
    "https://i.pinimg.com/originals/d4/42/73/d44273f7bb30d26e9e88c765665cee84.jpg";
  user = {} as User;
  countries = data.data;
  country = this.countries[0];

  constructor(
    private navCtrl: NavController,
    private navParam: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController
  ) {}
  ngOnInit() {}

  ionViewDidLoad() {
    const result = this.navParam.get("result");
    this.populateDetails(result);
  }

  populateDetails(result) {
    if (result) {
      this.user.email = result.user.email;
      this.user.uid = result.user.uid;
      this.user.avatar = this.avatar;
    }
  }

  sendOtp(user: User) {
    user.country = this.country.name;
    user.phoneNumberCode = this.country.dial_code;
    console.log(user);
  }
}
