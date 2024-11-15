import {
  text,
  varchar,
  pgTable,
  uuid,
  json,
  timestamp,
} from 'drizzle-orm/pg-core';
import { CustomerAddress, Employee } from '../models/users';

const createdAt = timestamp('created_at').defaultNow().notNull();
const updatedAt = timestamp('updated_at')
  .defaultNow()
  .$onUpdate(() => new Date())
  .notNull();

export const usersTable = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: varchar('password').notNull(),
  employees: json('employees').$type<Employee[]>().notNull(),
  createdAt,
  updatedAt,
});

export const customersTable = pgTable('customers', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phoneNumber: text('phone_number').notNull(),
  address: json('address').$type<CustomerAddress>().notNull(),
  userId: uuid('user_id')
    .references(() => usersTable.id)
    .notNull(),
  createdAt,
  updatedAt,
});

export const procedures = pgTable('procedures', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  employee: json('employee').$type<Employee>().notNull(),
  createdAt,
  updatedAt,
  customerId: uuid('customer_id')
    .references(() => customersTable.id)
    .notNull(),
  userId: uuid('user_id')
    .references(() => usersTable.id)
    .notNull(),
});
