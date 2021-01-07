import { makeAutoObservable } from 'mobx';

export interface IProduct {
  id: number;
  img: string;
  t: string;
  tt: string;
  price: number;
  count: number;
}

class Cart {
  products: Array<IProduct> = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(product: IProduct) {
    const candidate = this.getCandidate(product.id);

    candidate ? ++candidate.count : this.products.push(product);
  }

  delete(id: number) {
    const candidate = this.getCandidate(id);

    if (candidate.count > 1) {
      --candidate.count;
    } else {
      this.products = this.products.filter(pr => pr.id !== id);
    }
  }

  reset() {
    this.products = [];
  }

  private getCandidate(id: number) {
    return this.products.find(pr => pr.id === id);
  }
}

export const cartStore = new Cart();
