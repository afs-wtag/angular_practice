import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: "Pen",
      price: 678,
      quantity: 56
    },
    {
      id: 2,
      name: "Paper",
      price: 671,
      quantity: 54
    },
    {
      id: 3,
      name: "Box",
      price: 22,
      quantity: 222
    }
  ];

  constructor() { }

  onGet(){
    return this.products;
  }

  onGetProduct(id: Number){
    return this.products.find(x=>x, id==id);
  }

  onAdd(product: Product){
    this.products.push(product);
  }

  onDelete(id: Number){
    let product = this.products.find(x=>x, id==id);
    let index = this.products.indexOf(product,0);
    this.products.splice(index,1);
  }
  
  onUpdate(product: Product){
    let oldproduct = this.products.find(x=>x.id == product.id);
    oldproduct.name = product.name;
    oldproduct.price = product.price;
    oldproduct.quantity = product.quantity;
  }
}
