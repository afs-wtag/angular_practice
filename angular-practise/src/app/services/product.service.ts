import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: "Cooker",
      price: 678,
      quantity: 56
    },
    {
      id: 2,
      name: "Box",
      price: 671,
      quantity: 54
    },
  ];

  constructor() { }

  onGet(){
    return this.products;
  }

  onAdd(product: Product){
    this.products.push(product);
  }

  onDelete(id: Number){
    let product = this.products.find(x=>x, id==id);
    let index = this.products.indexOf(product,0);
    this.products.splice(index,1);
  }
}
