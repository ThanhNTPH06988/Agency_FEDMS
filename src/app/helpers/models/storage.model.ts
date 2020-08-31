import { StorageProductDetails } from './storageProductDetails.model';

export class Storage {
  created_by: string;
  create_at: number;
  id: number;
  storageproductdetails_set: StorageProductDetails[];
  address: string;
  isExpanded: boolean = false;
}
