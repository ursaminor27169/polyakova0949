import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyPurchase } from 'src/app/shared/modules/mypurchases.module';
import { MypurchasesService } from 'src/app/shared/services/mypurchases.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit {

  id: number;
  purchase: MyPurchase;
  purchaseForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private MypurchasesService: MypurchasesService, private router: Router) { 
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    this.getData();
    this.purchaseForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.pattern(/\d/)]),
      status: new FormControl(false)
    });
  }

  async getData() {
    if (this.id > 0) {
      try {
        let purchase = this.MypurchasesService.getOneById(this.id);
        this.purchase = await purchase;
      } catch (err) {
        console.error(err);
      }
      this.purchaseForm.patchValue({
        name: this.purchase.name,
        amount: this.purchase.amount,
        status: this.purchase.status
      });
    }
  }

  async onSave() {
    if (this.id > 0) {
      try {
        await this.MypurchasesService.putOneById(this.id, this.purchaseForm.value);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        await this.MypurchasesService.postOne(this.purchaseForm.value);
        this.getData();
      } catch (err) {
        console.error(err);
      }
    }
    this.router.navigate(['/purchases']);
  }

  async onDelete() {
    try {
      await this.MypurchasesService.deleteOneById(this.id);
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/purchases']);
  }

}
