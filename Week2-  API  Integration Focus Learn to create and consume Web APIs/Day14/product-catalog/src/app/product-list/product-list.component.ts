import { Component, OnInit } from '@angular/core';  
import { ProductService } from '../product.service';  
import { Product } from '../models/product.model';  
import { NgForm } from '@angular/forms';  

@Component({  
  selector: 'app-product-list',  
  templateUrl: './product-list.component.html',
  standalone:false  
})  
export class ProductListComponent implements OnInit {  

  products: Product[] = [];  

  constructor(private productService: ProductService) { }  

  ngOnInit() {  
    this.loadProducts();  
  }  

  loadProducts() {  
    this.productService.getProducts().subscribe(products => this.products = products);  
  }  

  addProduct(form: NgForm) {  
    if (!form.valid) return;  

    this.productService.createProduct(form.value).subscribe(() => {  
      this.loadProducts();  
      form.resetForm();  
    });  
  }  

  deleteProduct(id: number) {  
    if (confirm('Are you sure?')) {  
      this.productService.deleteProduct(id).subscribe(() => this.loadProducts());  
    }  
  }  
}  