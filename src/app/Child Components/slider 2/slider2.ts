import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from "../item/item";

@Component({
  selector: 'app-slider2',
  standalone: true,
  imports: [Item, CommonModule],
  templateUrl: './slider2.html',
  styleUrl: './slider2.css'
})
export class Slider2 implements OnInit {
  @Input() items: { title: string; price: number; image: string }[] = [];
  
  chunkedItems: any[][] = [];
  itemsPerSlide = 5;

  ngOnInit() {
    this.updateItemsPerSlide();
    this.chunkItems();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsPerSlide();
    this.chunkItems();
  }

  updateItemsPerSlide() {
    const width = window.innerWidth;
    
    if (width < 576) {
      this.itemsPerSlide = 1;
    } else if (width < 768) {
      this.itemsPerSlide = 2;
    } else if (width < 992) {
      this.itemsPerSlide = 3;
    } else if (width < 1510) {
      this.itemsPerSlide = 4;
    } else {
      this.itemsPerSlide = 5;
    }
  }

  chunkItems() {
    this.chunkedItems = [];
    
    for (let i = 0; i < this.items.length; i += this.itemsPerSlide) {
      this.chunkedItems.push(this.items.slice(i, i + this.itemsPerSlide));
    }
  }
}