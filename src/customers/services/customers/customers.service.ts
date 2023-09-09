import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'bob@gmail.com',
      name: 'Bob Bob',
    },
    {
      id: 2,
      email: 'adam@gmail.com',
      name: 'Adam Adam',
    },
    {
      id: 3,
      email: 'nick@gmail.com',
      name: 'Nick Nick',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDTO) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
