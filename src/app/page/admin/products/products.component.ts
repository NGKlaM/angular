import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ProductAdmin } from '../../../types/Products';
import { ProductService } from '../../../services/product.service'; // import services
import { DescriptionPipe } from '../../../pipes/description.pipe';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, DescriptionPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productService = inject(ProductService); // inject vao bien

  productList: ProductAdmin[] = [];

  ngOnInit(): void {
    this.productService
      .getProductListAdmin()
      .subscribe((products) => (this.productList = products)); // callApi.then(cb fuc)
  }
  handleDeleteProduct(id: string) {
    if (window.confirm('Do you really remove product?')) {
      this.productService
        .deleteProductById(id)
        .subscribe(
          () =>
            (this.productList = this.productList.filter(
              (product) => product._id !== id
            ))
        );
    }
  }
}
