import { User } from './user';
import { Budget } from './budget';

export class Organization {
    id: number;
    name: string = '';
    slackTeamId: string = '';
    members: User[];
    budgets: Budget[];
}