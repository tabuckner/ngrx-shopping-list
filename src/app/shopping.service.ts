import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
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
      delay(500)
    );
  }

  addShoppingItem(nextShoppingItem: ShoppingItem) {
    return this.http.post<ShoppingItem>(this.SHOPPING_URL, { ...nextShoppingItem }).pipe(
      delay(500)
    );
  }

  deleteShoppingItem(id: string) {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`).pipe(
      delay(500)
    );
  }
}
