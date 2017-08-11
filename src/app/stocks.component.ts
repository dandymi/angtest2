import { StockService } from './stock.service';
import { Component } from '@angular/core';

@Component({
  selector: `stocks`,
  template: `<h2>Stocks</h2>
    {{title}}

    <ul>
      <li *ngFor="let stock of stocks">
        {{stock}}
      </li>
    </ul>
    `
})

export class StocksComponent {
  title = 'List of Stocks: ';
  stocks = ['Apple', 'IBM', 'Google'];

  constructor(stockService: StockService) {
    this.stocks = stockService.getStocks();
  }
}
