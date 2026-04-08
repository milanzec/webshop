import { Component,OnInit} from  '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../../core/services/product';
import { Product } from '../../../core/models/product';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-product-details',
  imports: [CommonModule,JsonPipe,ButtonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {

    product?: Product;



constructor(    private route: ActivatedRoute,
    private productService: ProductService){}

ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('id');

  if (!idParam) {
    return;
  }

  const id = Number(idParam);

  this.productService.getOneById(id).subscribe({
    next: (product) => {
      this.product = { ...product };
      console.log('product loaded:', this.product);
    },
    error: (err) => {
      console.error(err);
    }
  });
}
}
