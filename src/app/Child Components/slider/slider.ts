import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Item } from "../item/item";

@Component({
  selector: 'app-slider',
  imports: [Item],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Slider {
  products = [
    { title: "Mens Shirt", price: 49.99, image: "/Shirt.png" },
    { title: "Blue Jeans", price: 59.99, image: "/Shirt.png" },
    { title: "Green Hoodie", price: 39.99, image: "/Shirt.png" },
    { title: "Black Jacket", price: 89.99, image: "/Shirt.png" }
  ];

  handleAddToCart(product: any) {
    console.log('Added to cart:', product);
  }

}
