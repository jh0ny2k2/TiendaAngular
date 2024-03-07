import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@shared/models/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe, RouterLink],
  template: `
    <div class="min-h-96 h-96">
      <div class="card mb-4 product-wap rounded-0">
        <div class="card rounded-0">
          <img
            class="card-img rounded-3 img-fluid max-w-22 max-h-72"
            src="{{ product().image }}"
          />
          <div
            class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
          >
            <ul class="list-unstyled">
              <li>
                <a
                  class="btn btn-success text-white mt-2"
                  [routerLink]="['/products', product().id]"
                  ><i class="far fa-eye"></i
                ></a>
              </li>
              <li>
                <a
                  (click)="onAddToCart()"
                  class="btn btn-success text-white mt-2"
                  ><i class="fas fa-cart-plus"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <a
            [routerLink]="['/products', product().id]"
            class="h3 text-decoration-none"
            >{{ product().title | slice : 0 : 30 }}</a
          >
          <p class="text-2xl font-bold text-green-500">
            {{ product().price | currency }}
          </p>
        </div>
      </div>
    </div>
  `,
})
export class CardComponent {
  product = input.required<Product>();
  @Output() addToCartEvent = new EventEmitter<Product>();

  onAddToCart(): void {
    this.addToCartEvent.emit(this.product());
  }
}
