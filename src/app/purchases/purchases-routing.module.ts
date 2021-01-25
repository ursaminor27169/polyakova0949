import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { PurchaseTableComponent } from './purchase-table/purchase-table.component';
import { PurchasesComponent } from './purchases.component';

const routes: Routes = [
  {
    path: '',
    component: PurchasesComponent,
    children: [
      {
        path: '',
        component: PurchaseTableComponent,
      },
      {
        path: 'edit',
        component: PurchaseEditComponent,
      },
      {
        path: 'edit/:id',
        component: PurchaseEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
