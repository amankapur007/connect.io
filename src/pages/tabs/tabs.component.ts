import { Component, OnInit } from "@angular/core";

import { InboxComponent } from "../inbox/inbox.component";
import { ChannelComponent } from "../channel/channel.component";
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.component.html"
})
export class TabsComponent implements OnInit {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;

  constructor() {
    this.tab1Root = InboxComponent;
    this.tab2Root = ChannelComponent;
    this.tab3Root = ProfileComponent;
  }

  ngOnInit() {
    console.log("tabs");
  }
}
