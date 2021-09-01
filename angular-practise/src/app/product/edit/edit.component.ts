import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: number;
  header: string;
  product: Product = {
    id:0,
    name: "",
    price: 0,
    quantity: 0
  };
 
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private productService: ProductService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add product' : 'Edit Product';

    if(this.id != 0){
      this.product = this.productService.onGetProduct(this.id);
      this.productForm.setValue({
        id: this.product.id, 
        name: this.product.name,
        price: this.product.price,
        quantity: this.product.quantity
      });
    }
    this.productForm.valueChanges.subscribe(console.log)
  }

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
  });

  onSubmit(){

    let product: Product = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      quantity: this.productForm.value.quantity,
    }

    if(this.id == 0){
      this.productService.onAdd(product);
    }
    else{
      this.productService.onUpdate(product);
    }
    this.router.navigateByUrl('/product');
  }
}
