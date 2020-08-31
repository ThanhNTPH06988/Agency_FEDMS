import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agency-orders-details',
  templateUrl: './agency-orders-details.component.html',
  styleUrls: ['./agency-orders-details.component.css']
})
export class AgencyOrdersDetailsComponent implements OnInit {
  orderDetail :any = {};
  constructor(
    public dialog: MatDialogRef<AgencyOrdersDetailsComponent>,@Inject(MAT_DIALOG_DATA) public data : any)
   {
     this.orderDetail = data
     console.log(this.orderDetail)
    }

  onClose() {
    this.dialog.close();
  }
  
  ngOnInit(): void {
  }

}
