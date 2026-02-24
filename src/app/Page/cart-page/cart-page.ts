import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../Service/cart.service';

interface CartItem {
  title: string;
  price: number;
  amount: number;
}
@Component({
  selector: 'app-cart-page',
  imports: [],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage implements OnInit {
  constructor(private cartService: CartService) {}

cartItems: CartItem[] = [];

  ngOnInit(): void {
    this.loadCart();
  }

  
  loadCart() {
    const data = localStorage.getItem('cart');
    this.cartItems = data ? JSON.parse(data) : [];
  }

  
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(this.cartItems)); 
  }
  checkout() {
  const total = this.cartItems.reduce((sum, item) => sum + item.price * item.amount, 0);
  
  const itemsList = this.cartItems
    .map(item => `• ${item.title} x${item.amount} = $${(item.price * item.amount).toFixed(2)}`)
    .join('\n');

  alert(`🛒 Order Summary:\n\n${itemsList}\n\n─────────────────\nTotal: $${total.toFixed(2)}`);
}
removeAll() {
  this.cartItems = [];
  this.cartService.clearCart();
}
}