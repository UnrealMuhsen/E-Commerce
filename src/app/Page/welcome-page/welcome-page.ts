import { Component } from '@angular/core';
import { WelcomeCard } from "../../Child Components/welcome-card/welcome-card";

@Component({
  selector: 'app-welcome-page',
  imports: [WelcomeCard],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage {

}
