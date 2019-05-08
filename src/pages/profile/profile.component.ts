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
import { AngularFireDatabase } from "@angular/fire/database";
import { Camera, CameraOptions } from "@ionic-native/camera";
import firebase from "firebase";
import { User } from "../../models/user/user.model";
import data from "../../json/countrycode";

@Component({
  selector: "app-profile",
  templateUrl: "profile.component.html"
})
export class ProfileComponent implements OnInit {
  avatarUrl: string;
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
    private toast: ToastController,
    private camera: Camera,
    private db: AngularFireDatabase
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
    this.user.country = this.country.name;
    this.user.phoneNumberCode = this.country.dial_code;
    this.sendOtpCheck = false;
  }

  verify(user) {
    console.log(this.user);
    this.upload(this.user);
  }

  upload(user: User) {
    let storageRef = firebase.storage().ref();
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${this.user.uid}.jpg`);

    var uploadTask = imageRef.putString(
      user.avatar,
      firebase.storage.StringFormat.DATA_URL
    );

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        this.saveToDb();
      }
    );
  }

  saveToDb() {
    this.db
      .list(`users/${this.user.uid}`)
      .push(this.user)
      .then(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
  getPicture(sourceType) {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType
    };

    this.camera.getPicture(cameraOptions).then(
      avatarUrl => {
        this.avatarUrl = "data:image/jpeg;base64," + avatarUrl;
        this.user.avatar = this.avatarUrl;
      },
      err => {
        console.log(err);
      }
    );
  }
}
