import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct?: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.onGet();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
