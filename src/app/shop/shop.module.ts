import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerBasketComponent } from './per-basket/per-basket.component';
import { PerProductComponent } from './per-product/per-product.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PerBasketComponent, PerProductComponent, ShopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShopComponent,
        children: [
          {
            path: 'per-basket',
            component: PerBasketComponent
          }
        ]
      }
    ])
  ]
})
export class ShopModule {}
