import { Injectable } from '@angular/core';

export interface Product {
  title: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private storageKey = 'products';

  private defaultProducts: Product[] = [
    { title: "Mensxxx Shirt", price: 49.99, image: "/Shirt.png" },
    { title: "Blue Jeans", price: 59.99, image: "/Shirt.png" },
    { title: "Green Hoodie", price: 39.99, image: "/Shirt.png" },
    { title: "Black Jacket", price: 89.99, image: "/Shirt.png" },
    { title: "x Shirt", price: 49.99, image: "/Shirt.png" },
    { title: "y Jeans", price: 59.99, image: "/Shirt.png" },
    { title: "z Hoodie", price: 39.99, image: "/Shirt.png" },
    { title: "yy Jacket", price: 89.99, image: "/Shirt.png" }
  ];

  constructor() {
    this.initProducts();
  }

  private initProducts() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(this.defaultProducts)
      );
    }
  }

  getProducts(): Product[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  deleteProduct(index: number) {
    const products = this.getProducts();
    products.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  updateProduct(index: number, updatedProduct: Product) {
    const products = this.getProducts();
    products[index] = updatedProduct;
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }
addProduct(product: Product) {
  const products = this.getProducts();
  products.push(product);
  localStorage.setItem(this.storageKey, JSON.stringify(products));
}
}
