import { Profile } from "./profile.model";
import { Role } from './role.enum';
import { Agency } from './agency.model';

export class User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_active: Boolean;
  last_login: Date;
  date_joined: Date;
  role: Role;
  profile: Profile;
  agency?: Agency[];
  token?: string;
}
