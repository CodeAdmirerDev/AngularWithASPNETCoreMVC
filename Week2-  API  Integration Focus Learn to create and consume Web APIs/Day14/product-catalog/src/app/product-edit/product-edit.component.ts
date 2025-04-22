import { Component, OnInit } from '@angular/core';  
import { FormBuilder, Validators, FormGroup } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';  
import { ProductService } from '../product.service';  
import { Product } from '../models/product.model';  

@Component({  
  selector: 'app-product-edit',  
  templateUrl: './product-edit.component.html',
  standalone:false  
})  
export class ProductEditComponent implements OnInit {  
  

  productForm!: FormGroup;  
  isEditMode = false;  
  productId?: any;  

  constructor(  
    private fb: FormBuilder,  
    private route: ActivatedRoute,  
    private router: Router,  
    private productService: ProductService  
  ) {}  

  ngOnInit() {  

    this.productId = this.route.snapshot.paramMap.get('id')!;  
alert(this.productId);
    this.productForm = this.fb.group({  
      name: ['', Validators.required],  
      price: [0, [Validators.required, Validators.min(0)]],  
      description: ['']  
    });  

    this.route.paramMap.subscribe(params => {  
      const idParam = params.get('id');  
      if (idParam) {  
        this.isEditMode = true;  
        this.productId = +idParam;  
        this.loadProduct(this.productId);  
      }  
    });  
  }  

  loadProduct(id: number) {  
    this.productService.getProduct(id).subscribe(product => {  
      this.productForm.patchValue(product);  
    });  
  }  

  onSubmit() {  
    if (this.productForm.invalid) return;  

    const product: Product = this.productForm.value;  

    alert(this.isEditMode);
    alert("product id :"+this.productId);
    product.id= this.productId;
    if (this.isEditMode && this.productId) {  
      this.productService.updateProduct(this.productId, product).subscribe(() => {  
        this.router.navigate(['/products']);  
      });  
    } else {  
      this.productService.createProduct(product).subscribe(() => {  
        this.router.navigate(['/products']);  
      });  
    }  
  }  

  cancel() {  
    this.router.navigate(['/products']);  
  }  
}  