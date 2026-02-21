import { ProductService,Product } from './../../../Service/product.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-item-dashcard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-dashcard.html',
  styleUrl: './item-dashcard.css'
})
export class ItemDashcard implements OnInit {
  products: Product[] = [];

  currentProduct: Product = {
    title: '',
    price: 0,
    image: '/Shirt.png'
  };

  isEditing: boolean = false;
  editIndex: number = -1;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getProducts();
  }

  saveProduct() {
    if (this.currentProduct.title && this.currentProduct.price > 0) {
      if (this.isEditing) {
        this.productService.updateProduct(this.editIndex, { ...this.currentProduct });
      } else {
        this.productService.addProduct({ ...this.currentProduct });
      }
      this.loadProducts();
      this.resetForm();
    }
  }

  editProduct(index: number) {
    this.currentProduct = { ...this.products[index] };
    this.isEditing = true;
    this.editIndex = index;
  }

  deleteProduct(index: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(index);
      this.loadProducts();
      if (this.editIndex === index) {
        this.resetForm();
      }
    }
  }

  resetForm() {
    this.currentProduct = {
      title: '',
      price: 0,
      image: '/Shirt.png'
    };
    this.isEditing = false;
    this.editIndex = -1;
  }
}