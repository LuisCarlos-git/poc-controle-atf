'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableData } from './components/customers-table/types';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  Clipboard,
  MoreHorizontal,
  Pencil,
  Table2Icon,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';

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
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Abrir menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(row.original.id)}
          >
            <Clipboard className="mr-2 h-4 w-4" />
            Copiar ID do cliente
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Table2Icon className="mr-2 h-4 w-4" />
            Procedimentos
          </DropdownMenuItem>
          <Link href={`/customers/edit/${row.original.id}`}>
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Editar cliente
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Trash2 className="mr-2 h-4 w-4" />
            Excluir cliente
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
