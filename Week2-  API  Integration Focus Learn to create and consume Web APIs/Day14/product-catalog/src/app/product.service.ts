import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Product } from './models/product.model';  
import { Observable } from 'rxjs';  

@Injectable({  
  providedIn: 'root'  
})  
export class ProductService {  

  private apiUrl = '/api/Products'; // change to your API url  

  constructor(private http: HttpClient) { }  

  getProducts(): Observable<Product[]> {  
    return this.http.get<Product[]>(this.apiUrl);  
  }  

  getProduct(id: number): Observable<Product> {  
    return this.http.get<Product>(`${this.apiUrl}/${id}`);  
  }  

  createProduct(product: Product): Observable<Product> {  

    alert("In create product");
    alert("pid"+product.id);
    alert("pname"+product.name);
    return this.http.post<Product>(this.apiUrl, product);  
  }  

  updateProduct(id: number, product: Product): Observable<void> {  
    return this.http.put<void>(`${this.apiUrl}/${id}`, product);  
  }  

  deleteProduct(id: number): Observable<void> {  
    return this.http.delete<void>(`${this.apiUrl}/${id}`);  
  }  
}  