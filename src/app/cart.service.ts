import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  // Define an items property to store the array of the product in cart
  items = [];

  // Add a product to cart
  addToCart(product) {
    this.items.push(product);
  }

  // List each product with the quantity
  getItems() {
    return this.items;
  }

  // Clear cart and return an empty cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
