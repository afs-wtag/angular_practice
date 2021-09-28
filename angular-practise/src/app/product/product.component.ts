import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
//import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct?: Product;
  //faPlus = faPlus;
  //faEdit = faEdit;
  //faTrash = faTrash;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.onGet();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onDelete(id: Number){
    this.productService.onDelete(id);
  }
}
