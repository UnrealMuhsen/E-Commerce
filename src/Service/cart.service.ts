import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartKey = 'cart';

  constructor() {
    this.initializeCart();
  }

  
  private initializeCart() {
    if (!localStorage.getItem(this.cartKey)) {
      localStorage.setItem(this.cartKey, JSON.stringify([]));
    }
  }

  
  getCart(): any[] {
    return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  }

 
  addToCart(title: string, price: number) {
    const cart = this.getCart();

    
    const existingItem = cart.find((item: any) => item.title === title);

    if (existingItem) {
      existingItem.amount += 1;
    } else {
      cart.push({ title, price, amount: 1 });
    }

    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  
  removeFromCart(title: string) {
    let cart = this.getCart();

    
    cart = cart.filter((item: any) => item.title !== title);

    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  
  clearCart() {
    localStorage.removeItem(this.cartKey);
  }
 
}