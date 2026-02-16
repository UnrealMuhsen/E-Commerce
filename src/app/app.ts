import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomePage } from "./Page/welcome-page/welcome-page";
import { Header } from "./Child Components/header/header";
import { Footer } from "./Child Components/footer/footer";
import { Item } from "./Child Components/item/item";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Item],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('E-Commerce');
}
