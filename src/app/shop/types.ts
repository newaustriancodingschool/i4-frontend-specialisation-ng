export interface Purchases {
  [branch: string]: BranchDict;
}

export interface BranchDict {
  [basketName: string]: BasketDict;
}

export interface BasketDict {
  [basketItemName: string]: BasketItem;
}

export interface BasketItem {
  product: string;
  amount: number;
  price: number;
  code: number;
}

export interface Branch {
  name: string;
  baskets: Basket[];
}

export interface Basket {
  name: string;
  basketItems: BasketItem[];
}

export interface Product {
  name: string;
  branches: BranchInProduct[];
}

export interface BranchInProduct {
  name: string;
  basketItems: BasketItemInProduct[];
}

export interface BasketItemInProduct extends BasketItem {
  basketName: string;
}

export interface FullBasketItem extends BasketItem {
  basketName: string;
  branchName: string;
}
