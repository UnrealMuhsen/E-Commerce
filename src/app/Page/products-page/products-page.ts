import { Component } from '@angular/core';
import { Slider } from "../../Child Components/slider/slider";
import { Item } from "../../Child Components/item/item";

@Component({
  selector: 'app-products-page',
  imports: [Slider, Item],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
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
