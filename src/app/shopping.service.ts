import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, switchMap } from 'rxjs/operators';
import { ShoppingItem } from './store/models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private SHOPPING_URL = 'http://localhost:3000/shopping'

  constructor(
    private http: HttpClient
  ) { }

  getShoppingItems() {
    return this.http.get<Array<ShoppingItem>>(this.SHOPPING_URL).pipe(
      delay(200)
    );
  }

  addShoppingItem(nextShoppingItem: ShoppingItem) {
    return this.http.post<Array<ShoppingItem>>(this.SHOPPING_URL, { ...nextShoppingItem }).pipe(
      switchMap(() => this.getShoppingItems()),
      delay(200)
    );
  }

  deleteShoppingItem(id: string) {
    return this.http.delete<Array<ShoppingItem>>(`${this.SHOPPING_URL}/${id}`).pipe(
      switchMap(() => this.getShoppingItems()),
      delay(200)
    );
  }
}
