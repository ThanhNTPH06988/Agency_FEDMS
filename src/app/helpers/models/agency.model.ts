import { User } from './user.model';
import { PriorityLevel } from './priorityLevel.enum';

export class Agency {
    id: number;
    user_related: number;
    code: string;
    name: string;
    address: string;
    phone_number: string;
    priority_level: PriorityLevel;
    created_at: Date;
}
