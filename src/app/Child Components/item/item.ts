import { Component,Input,EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input() title: string = 'Mens Shirt';
  @Input() price: number = 49.99;
  @Input() image: string = '/Shirt.png';

  @Output() add = new EventEmitter<void>();

  addToCart() {
    this.add.emit();
  }
}
