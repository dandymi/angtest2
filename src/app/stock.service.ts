import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }

  getStocks(): string[] {
    return ['AAPL', 'IBM', 'GOOG', 'UBER', 'ABC'];
  }
}
