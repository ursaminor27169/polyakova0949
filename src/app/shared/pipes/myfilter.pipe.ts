import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform { 

  transform(purchases: any[], justName: string): any[] {
    let boughtItems = [];
    let notBoughtItems = [];

    purchases.sort((a: any, b: any) => {
      if (a[justName] < b[justName]) {
        return -1;
      } else if (a[justName] > b[justName]) {
        return 1;
      } else {
        return 0;
      }
    });

    purchases.forEach(purchase => {
      if (purchase.status) {
        boughtItems.push(purchase)
      } else {
        notBoughtItems.push(purchase)
      }
    });
    
    let filteredItems = notBoughtItems.concat(boughtItems);
    
    return filteredItems;
  }

}
