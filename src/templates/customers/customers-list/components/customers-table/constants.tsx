'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CustomerTableActions } from '../customer-table-actions';
import { TableData } from './types';

export const columns: ColumnDef<TableData>[] = [
  {
    header: 'Id',
    accessorKey: 'id',
  },
  {
    header: 'Nome do cliente',
    accessorKey: 'name',
  },
  {
    header: 'E-mail',
    accessorKey: 'email',
  },
  {
    header: 'Telefone',
    accessorKey: 'phoneNumber',
  },
  {
    header: 'Data de criação',
    accessorKey: 'createdAt',
    cell: ({ row }) =>
      new Intl.DateTimeFormat('pt-BR').format(row.getValue('createdAt')),
  },
  {
    id: 'actions',
    cell: ({ row }) => <CustomerTableActions row={row} />,
  },
];
