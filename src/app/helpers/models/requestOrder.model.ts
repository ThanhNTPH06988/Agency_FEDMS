import { Agency } from './agency.model';
import { RequestOrderProductDetails } from './requestOrderProductDetails.model';

export class RequestOrder {
  id: number;
  agency: Agency;
  created_by: string;
  created_at: number;
  requestorderproductdetails_set: RequestOrderProductDetails[];
  code: string;
  bill_value: number;
  approved: boolean;
  approved_at: number;
  rejected: boolean;
  rejected_at: number;
}
