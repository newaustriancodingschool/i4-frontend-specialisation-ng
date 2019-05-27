import { Injectable } from '@angular/core';
import { Purchases, Branch, Basket, Product, FullBasketItem } from './types';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MapperService {
  constructor() {}

  mapToBranches(purchases: Purchases): Branch[] {
    const branchNames = Object.keys(purchases);
    return branchNames.map(branchName => {
      const branch: Branch = { name: branchName, baskets: [] };
      const basketNames = Object.keys(purchases[branchName]);
      const baskets: Basket[] = basketNames.map(basketName => {
        return { name: basketName, basketItems: Object.values(purchases[branchName][basketName]) };
      });
      branch.baskets = baskets;
      return branch;
    });
  }

  mapToProducts(purchases: Purchases): Product[] {
    const fullProducts = this.getFullBasketItems(this.mapToBranches(purchases));

    const productNames = _.uniq(fullProducts.map(fp => fp.product));
    return productNames.map(productName => {
      const fbisForProduct = fullProducts.filter(fullProduct => fullProduct.product === productName);
      const branchNames = _.uniq(fbisForProduct.map(fbi => fbi.branchName));
      const branches = branchNames.map(branchName => {
        const basketItems = fbisForProduct.filter(fbi => fbi.branchName === branchName);
        return { name: branchName, basketItems };
      });

      return { name: productName, branches };
    });
  }

  private getFullBasketItems(branches: Branch[]): FullBasketItem[] {
    return _.flattenDeep(
      branches.map(branch => {
        return branch.baskets.map(basket => {
          return basket.basketItems.map(basketItem => ({
            ...basketItem,
            branchName: branch.name,
            basketName: basket.name
          }));
        });
      })
    );
  }
}
