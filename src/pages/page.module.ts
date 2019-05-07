import { NgModule, ErrorHandler } from "@angular/core";
import {
  IonicApp,
  IonicPageModule,
  IonicModule,
  IonicErrorHandler
} from "ionic-angular";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { InboxComponent } from "./inbox/inbox.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ChannelComponent } from "./channel/channel.component";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    InboxComponent,
    TabsComponent,
    ChannelComponent,
    ProfileComponent
  ],
  imports: [IonicPageModule.forChild(LoginComponent), IonicModule],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    InboxComponent,
    TabsComponent,
    ChannelComponent,
    ProfileComponent
  ]
})
export class PageModule {}
