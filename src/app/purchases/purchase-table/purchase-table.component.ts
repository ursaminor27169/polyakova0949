import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyPurchase } from 'src/app/shared/modules/mypurchases.module';
import { MypurchasesService } from 'src/app/shared/services/mypurchases.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.css']
})
export class PurchaseTableComponent implements OnInit {

  constructor(private MypurchasesService: MypurchasesService, private router: Router) { }

  purchases: MyPurchase[] = [];
  status: string;
  justName: string;

  ngOnInit(): void {
    this.getData();    
  }

  getStatus(status: boolean) {
    this.status = (status) ? 'Куплено' : 'Не куплено';
    return this.status;
  }

  async getData() {
    try {
      let purchases = this.MypurchasesService.getAll();
      this.purchases = isNullOrUndefined(await purchases) ? [] : await purchases;
      console.log(this.purchases);      
    } catch (err) {
      console.error(err);
    }
  }
  
  onAddPurchase() {
    this.router.navigate([this.router.url, 'edit']);
  }

  onEditPurchase(id: number) {
    this.router.navigate([this.router.url, 'edit', id]);
  }

  async onDeletePurchase(id: number) {
    try {
      await this.MypurchasesService.deleteOneById(id);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

  async changeStatus(nowPurchase: MyPurchase) {
    nowPurchase.status = !nowPurchase.status;
    try {
      await this.MypurchasesService.putOneById(nowPurchase.id, nowPurchase);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

}
