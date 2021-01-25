import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { PurchaseTableComponent } from './purchase-table/purchase-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyfilterPipe } from '../shared/pipes/myfilter.pipe';


@NgModule({
  declarations: [PurchaseEditComponent, PurchaseTableComponent, MyfilterPipe],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PurchasesModule { }
