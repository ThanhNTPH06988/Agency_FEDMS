import { User } from './user.model';

export class ProductUnitType {
  created_by: User;
  created_at: Date;
  code: string;
  unit_type: string;
}