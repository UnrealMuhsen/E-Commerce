import { Component } from '@angular/core';
import { ItemDashcard } from "../../Child Components/item-dashcard/item-dashcard";

@Component({
  selector: 'app-dashboard-page',
  imports: [ItemDashcard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {

}
