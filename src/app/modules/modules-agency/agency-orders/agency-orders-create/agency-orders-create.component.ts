import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import _ from 'lodash';
import { ToastUltiService } from 'src/app/services/toast-ulti.service';
import { RequestOrderService } from 'src/app/services/request-order.service';
import { RequestOrder } from 'src/app/helpers/models/requestOrder.model';
import { AuthenticationService } from 'src/app/helpers/authentication/authentication.service';

@Component({
  selector: 'app-agency-orders-create',
  templateUrl: './agency-orders-create.component.html',
  styleUrls: ['./agency-orders-create.component.css']
})
export class AgencyOrdersCreateComponent implements OnInit {

  currentUser = this.authenticationService.currentUserValue;
  agencyID = this.currentUser.agency[0].id;

  listRecordProduct: any = [];
  isCheckAll: boolean = false;
  listOrderProduct: any = [];
  totalRecords: number;
  listDetailProduct: any = [];
  reqOrderForm: FormGroup;
  amount: number;
  listProductType: any = [];
  idProductType: number = 0;
  createOrderSuccess: any = {}
  searchProduct: string
  selectedTab: number;
  tabSuccess: boolean = true;

  //TamDT
  pageSize: number = 5;
  totalOrder: number = 0;
  loading: boolean = false;
  orderId: number = null;
  codeReq: string = null;
  modalTitle: string = null;

  constructor(
    public dialog: MatDialogRef<AgencyOrdersCreateComponent>,
    private authenticationService: AuthenticationService,
    private productService: ProductService,
    private toast: ToastUltiService,
    private requestOrderService: RequestOrderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) params,
  ) {
    if (params != undefined && params != null) {
      params.requestorderproductdetails_set.forEach(obj => {
        obj.product['amount'] = obj.amount;
        this.listOrderProduct.push(obj.product);
      });
      this.orderId = params.id;
      this.codeReq = params.code
      this.modalTitle = 'Cập nhật thông tin đơn hàng';
    } else {
      this.modalTitle = 'Tạo mới đơn hàng';
    }
    this.searchData(0);
    this.getProductType();
  }

  ngOnInit() { }

  ChangeProductType() {
    this.searchData(0);
  }

  SearchProduct() {
    this.searchData(0);
  }

  getProductType() {
    this.productService.getAllProductType().subscribe(data => {
      let all = {
        id: 0,
        code: "ALL",
        product_type: "Tất cả"
      }
      this.listProductType.push(all);
      let proType = _.concat(data.results, 1, all);
      this.listProductType = _.concat(this.listProductType, data.results);
    });
  }

  private initForm() {
    this.reqOrderForm = this.fb.group({
      id: null,
      code: '',
      agency_id: this.agencyID,
      details: [this.listDetailProduct],
    });
  }

  onPageChange(event) {
    this.searchData(event.pageIndex);
  }

  searchData(page) {
    this.loading = true;
    this.listRecordProduct = [];

    let param = {
      page: page + 1,
      page_size: this.pageSize
    }

    if (this.idProductType != null && this.idProductType > 0) {
      param['product_type_id'] = this.idProductType;
    }

    if (this.searchProduct != null) {
      param['search'] = this.searchProduct;
    }

    this.productService.getPaginationTest(param).subscribe((data) => {
      let dataSearch = data.results;
      if (this.listOrderProduct.length > 0) {
        dataSearch.forEach(obj => {
          this.listOrderProduct.forEach(item => {
            if (obj.id === item.id) {
              obj.isCheck = true;
              obj.amount = item.amount;
              return;
            }
          })
        });
      }
      this.listRecordProduct = dataSearch;
      this.totalRecords = data.count;
      this.loading = false;
    })
  }

  onClose() {
    this.dialog.close();
  }

  //TamDT
  checkAll() {
    this.listRecordProduct = _.map(this.listRecordProduct, (obj) => {
      obj.isCheck = !obj.isCheck;
      return obj;
    });
  }



  onChangeTotal(isCurrencyDown: boolean, item: any) {
    this.totalOrder = 0;
    if (isCurrencyDown != null) {
      if (!isCurrencyDown) {
        item.amount = item.amount + 1;
      } else {
        if (item.amount > 1)
          item.amount = item.amount - 1;
      }
    }

    this.listOrderProduct.forEach(obj => {
      this.totalOrder += (obj.base_price * obj.amount)
    });
  }
  checkItem(item) {
    if (item.isCheck === false) {
      this.listOrderProduct = _.reject(this.listOrderProduct, (obj) => {
        return obj.id === item.id;
      });
      item.amount = null;
    } else {
      this.listOrderProduct.push(item);
      item.amount = 1;
    }

    let lstCheck = _.filter(this.listRecordProduct, (obj) => {
      return obj.isCheck;
    });
    if (lstCheck.length === this.listRecordProduct.length) {
      this.isCheckAll = true;
    } else {
      this.isCheckAll = false;
    }
  }

  orderNext() {
    if (this.listOrderProduct.length === 0) {
      this.toast.showWarning('Cảnh báo', 'Vui lòng chọn ít nhất 1 mặt hàng');
      return;
    }
    this.listOrderProduct.forEach(obj => {
      this.totalOrder += (obj.base_price * obj.amount)
      if (obj.amount > obj.available_quantity) {
        this.toast.showWarning('Cảnh báo', 'sản phẩm ' + obj.name + ' không đủ số lượng để đáp ứng');
        this.selectedTab = 0
      } else {
        this.selectedTab = 1
      }
    });
  }

  createOders() {
    this.loading = true;
    if (this.listOrderProduct.length === 0) {
      this.toast.showWarning('Cảnh báo', 'Vui lòng chọn ít nhất 1 mặt hàng');
      return;
    } else {
      this.listOrderProduct.forEach(element => {
        this.listDetailProduct.push({ product_id: element.id, amount: element.amount })
      });
      this.initForm()
    }
    this.listOrderProduct.forEach(obj => {
      if (obj.amount > obj.available_quantity) {
        this.toast.showWarning('Cảnh báo', 'sản phẩm ' + obj.name + ' không đủ số lượng để đáp ứng !');
        return;
      }
    });

    if (this.orderId === null) {
      this.requestOrderService.create(this.reqOrderForm.value as RequestOrder).subscribe((res) => {
        this.toast.showSuccess('Thông báo', 'Đặt hàng thành công !')
        this.loading = false;
        this.createOrderSuccess = res;
        this.selectedTab = 2
        this.tabSuccess = false
      });
    } else {
      this.reqOrderForm.controls.id.setValue(this.orderId);
      this.reqOrderForm.controls.code.setValue(this.codeReq);
      this.requestOrderService.update(this.orderId, this.reqOrderForm.value as RequestOrder).subscribe((res) => {
        this.toast.showSuccess('Thông báo', 'Cập nhật đơn hàng thành công !')
        this.loading = false;
        this.createOrderSuccess = res;
        this.selectedTab = 2
        this.tabSuccess = false
      });
    }

  }

  deletedCargo(cargo) {
    this.listOrderProduct = _.reject(this.listOrderProduct, (obj) => {
      cargo.isCheck = false;
      cargo.amount = null
      return obj.code === cargo.code;
    });
  }

  backTabOne() {
    this.listOrderProduct = _.map(this.listOrderProduct, (obj) => {
      obj.isCheck = true;
      return obj
    });
    this.tabSuccess = true
    this.selectedTab = 0
  }

  reOders() {
    this.listOrderProduct = _.reject(this.listOrderProduct, (obj) => {
      obj.isCheck = false;
      obj.amount = null;
      return obj
    });
    this.tabSuccess = true
    this.selectedTab = 0
  }
}

