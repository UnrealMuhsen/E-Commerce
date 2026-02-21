import { ProductService, Product } from './../../../Service/product.service';
import { Component, OnInit } from '@angular/core';
import { Slider } from "../../Child Components/slider/slider";
import { Item } from "../../Child Components/item/item";
import { Slider2 } from "../../Child Components/slider 2/slider2";

@Component({
  selector: 'app-products-page',
  imports: [Slider, Item, Slider2],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  handleAddToCart(product: any) {
    console.log('Added to cart:', product);
  }
}