import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { PurchasesComponent } from './purchases/purchases.component';

const routes: Routes = [
  {
    path: '',
    component: InformationComponent
  },
  {
    path: 'purchases',
    loadChildren: () =>
      import('./purchases/purchases.module').then((m) => m.PurchasesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
