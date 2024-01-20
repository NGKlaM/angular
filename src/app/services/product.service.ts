// import { Injectable, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Product } from '../types/Product';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   // call api
//   apiUrl = 'https://fakestoreapi.com/products';
//   http = inject(HttpClient );
//   constructor() {}

//   getProductList(): Observable<Product[]>{
//     return this.http.get<Product[]>(this.apiUrl);
//   }
// }
import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, ProductAdmin, ProductAdd } from '../types/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // call api
  apiUrl = 'https://fakestoreapi.com/products';
  apiAdminUrl = 'https://hoadv-nodejs.vercel.app/api/products'; // khai bao apiUrl

  http = inject(HttpClient); // inject bien http
  constructor() {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); //axios.get(apiUrl)
  }

  getProductListAdmin(): Observable<ProductAdmin[]> {
    return this.http.get<ProductAdmin[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }

  deleteProductById(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }

  createProduct(product: ProductAdd) {
    return this.http.post<Product>(this.apiAdminUrl, product);
  }
  getDetailProductById(id: string) {
    return this.http.get<ProductAdmin>(`${this.apiAdminUrl}/${id}`);
  }

  updateProductById(product: ProductAdd, id: string) {
    return this.http.put<Product>(`${this.apiAdminUrl}/${id}`, product);
  }
}
