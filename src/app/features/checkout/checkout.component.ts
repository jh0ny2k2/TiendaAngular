import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CartStore } from '@shared/store/shopping-cart.store';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './checkout.component.html',
})
export default class CheckoutComponent {
  cartStore = inject(CartStore);

  removeItem(id: number): void {
    this.cartStore.removeFromCart(id);
  }

  clearAll(): void {
    this.cartStore.clearCart();
  }
}
