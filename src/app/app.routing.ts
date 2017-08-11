import { StocksComponent } from './stocks.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [{
  path: 'stocks',
  component: StocksComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
