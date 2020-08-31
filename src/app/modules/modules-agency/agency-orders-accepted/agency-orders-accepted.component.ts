import { Component, OnInit } from '@angular/core';
import { AgreedOrderService } from 'src/app/services/agreed-orders.service';
import { AuthenticationService } from 'src/app/helpers/authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestOrderService } from 'src/app/services/request-order.service';
import { ToastUltiService } from 'src/app/services/toast-ulti.service';

@Component({
  selector: 'app-agency-orders-accepted',
  templateUrl: './agency-orders-accepted.component.html',
  styleUrls: ['./agency-orders-accepted.component.css']
})
export class AgencyOrdersAcceptedComponent implements OnInit {

  currentUser = this.authenticationService.currentUserValue;
  agencyID = this.currentUser.agency[0].id;
  reqOrderId: number
  loading: boolean = false;
  pageSize: number = 10;
  page: number = 0;
  totalRecords: number = 0;
  agreedOrdersDetail: any = {}
  requestOrdersDetail: any = {};

  constructor(
    private toast: ToastUltiService,
    private router: Router,
    private agreedOrderService: AgreedOrderService,
    private requestOrderService: RequestOrderService,
    private authenticationService: AuthenticationService,
    private activeRoute: ActivatedRoute,
  ) {
    this.findReqOrderId();
   }

  ngOnInit(): void {
    this.searchData();
    this.findOrderDetail();
  }

  findReqOrderId() {
    this.activeRoute.params.subscribe(param => {
      this.reqOrderId = param.id
    })
  }

  findOrderDetail(){
    this.activeRoute.params.subscribe(param => {
      this.requestOrderService.getById(param.id).subscribe(data => {
        this.requestOrdersDetail = data
        console.log('requet' + this.requestOrdersDetail)
      })
    })
  }

  accepted(id){
    this.agreedOrderService.accept(id).subscribe(res => {
      if(res && res.id){
        this.toast.showSuccess('Thông báo', 'Duệt đơn hàng thành công !')
      this.router.navigate(['/agency/orders']);
    }
    })
  }

  noAccepted(id){
    this.agreedOrderService.noAccept(id).subscribe(res => {
      if(res && res.id){
        this.toast.showSuccess('Thông báo', 'Từ chối đơn hàng thành công !')
      this.router.navigate(['/agency/orders']);
    }
    })
  }

  searchData() {
    this.loading = true;
    this.totalRecords = 0;
    let param = {
      agency: this.agencyID,
      request_order: this.reqOrderId,
    }
    this.agreedOrderService.searchAgreedOrder(param).subscribe(agrOrders => {
      this.agreedOrdersDetail = agrOrders;
      console.log(' agreed' + this.agreedOrdersDetail);
      this.loading = false;
    });
  }

  onPageChange(event) {
    this.page = event.pageIndex;
    this.searchData();
  }
  
}
