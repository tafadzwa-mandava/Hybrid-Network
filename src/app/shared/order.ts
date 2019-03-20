import {Customer} from '../shared/customer';

export interface Order{
    id: number;
    customer: Customer;
    total: number;
    placed: Date;
    fulfilled: Date;
    status: string;
}