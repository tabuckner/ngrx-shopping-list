import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ShoppingActions from './store/actions/shopping.actions';
import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';
import { ShoppingState } from './store/reducers/shopping-reducer.reducer';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<ShoppingState>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.shoppingItems$ = this.store.select(store => store.shopping);
  }

  addItem() {
    this.newShoppingItem.id = uuid();

    this.store.dispatch(ShoppingActions.addShoppingItem({ payload: this.newShoppingItem }));

    this.newShoppingItem = { id: '', name: '' };
  }

  onDelete(id: string) {
    this.store.dispatch(ShoppingActions.removeShoppingItem({ id }));
  }
}
