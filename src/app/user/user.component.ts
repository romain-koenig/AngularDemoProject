import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  username = "John DOE";
  buttonResetUsernameDisabled = false;

  // Check on each keystroke is username is empty or not so we can disable the button
  onUpdateUsername(event: Event) {
    if (this.username != "") {
      this.buttonResetUsernameDisabled = false;
    }
    else {
      this.buttonResetUsernameDisabled = true;
    }
  }

  onResetUser() {
    this.username = "";
    this.buttonResetUsernameDisabled = true;
  }

  ngOnInit() {
  }

}
