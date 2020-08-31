import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AgencyOrdersCreateComponent } from './agency-orders-create/agency-orders-create.component';
import { RequestOrderService } from 'src/app/services/request-order.service';
import { AuthenticationService } from 'src/app/helpers/authentication/authentication.service';
import { AgencyOrdersDetailsComponent } from './agency-orders-details/agency-orders-details.component';
import { AgreedOrderService } from 'src/app/services/agreed-orders.service';
import { Router } from '@angular/router';
import { ToastUltiService } from 'src/app/services/toast-ulti.service';


@Component({
  selector: 'app-agency-orders',
  templateUrl: './agency-orders.component.html',
  styleUrls: ['./agency-orders.component.css']
})
export class AgencyOrdersComponent implements OnInit {

  currentUser = this.authenticationService.currentUserValue;
  agencyID = this.currentUser.agency[0].id;

  //TamDT
  loading: boolean = false;
  pageSize: number = 10;
  page: number = 0;
  totalRecords: number = 0;
  lstRecords: any = [];
  lstStatus: any = [];
  status: number = 0;

  dateFrom1: Date = null;
  dateTo1: Date = null;
  orderCode: any = null;
  agreedOrdersDetail: any = [];

  constructor(private dialog: MatDialog,
    private requestOrderService: RequestOrderService,
    private agreedOrderService: AgreedOrderService,
    private authenticationService: AuthenticationService,
    private toast: ToastUltiService,
    private router: Router

  ) { }


  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  searchData() {
    this.loading = true;
    this.lstRecords = [];
    this.totalRecords = 0;
    let param = {
      agency: this.agencyID,
      page: this.page + 1,
      page_size: this.pageSize
    }
    if (this.dateTo1 != null && this.dateFrom1 != undefined) {
      param['f_created_at'] = this.formatDate(this.dateTo1);
    }
    if (this.dateFrom1 != null && this.dateFrom1 != undefined) {
      param['t_created_at'] = this.formatDate(this.dateFrom1);
    }
    if (this.orderCode != null && this.orderCode != undefined) {
      param['search'] = this.orderCode;
    }

    this.requestOrderService.searchRequestOrder(param).subscribe(reqOrder => {
      this.lstRecords = reqOrder.results;
      this.totalRecords = reqOrder.count;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.lstStatus = [
      { id: 0, name: 'Tất cả' },
      { id: 1, name: 'Chờ xử lý' }, 
      { id: 2, name: 'Nam phát nhận đơn' },
      { id: 10, name: 'Đại lý từ chối' },
      { id: 11, name: 'Đại lý duyệt đơn' },
      { id: 33, name: 'Lịch giao hàng dự kiến' },
      { id: 44, name: 'Đã nhận hàng' },
    ]
    this.searchData();
    this.getStatusAgreed()
  }

  getStatusAgreed() {
    this.loading = true;
    this.totalRecords = 0;
    let param = {
      agency: this.agencyID,
    }
    this.agreedOrderService.searchAgreedOrder(param).subscribe(agrOrders => {
      this.agreedOrdersDetail = agrOrders.results;
      console.log(this.agreedOrdersDetail)
      this.loading = false;
    });
  }

  completeAgreed(id){
    this.agreedOrderService.complete(id).subscribe(res => {
      if(res && res.id){
        this.toast.showSuccess('Thông báo', 'Đã nhận hàng thành công !')
      this.getStatusAgreed()
    }
    })
  }

  onPageChange(event) {
    this.page = event.pageIndex;
    this.searchData();
  }

  onDialogAdd(item:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.data = item;

    let dialogRef = this.dialog.open(AgencyOrdersCreateComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.searchData();
    });
  }


  onDialogDetail(item) {
    const dialogRef = this.dialog.open(AgencyOrdersDetailsComponent, 
      {
        width: '80%',
        data: item
      });
    dialogRef.afterClosed().subscribe(result => {
      dialogRef.close()
    });
  }

}

