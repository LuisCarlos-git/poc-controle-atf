'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Clipboard,
  MoreHorizontal,
  Pencil,
  Table2Icon,
  Trash2,
} from 'lucide-react';
import { CustomerTableActionsProps, DIALOG_IDS } from './types';
import Link from 'next/link';
import { useDialog } from '@/hooks/contexts/useDialog';
import { DeleteAlert } from '@/components/shared/delete-alert';

export function CustomerTableActions({ row }: CustomerTableActionsProps) {
  const { handleOpenDialog, handleCloseDialog } = useDialog();

  return (
    <>
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
          <DropdownMenuItem
            onClick={() =>
              handleOpenDialog(DIALOG_IDS.DELETE_CUSTOMER_DIALOG_ID)
            }
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Excluir cliente
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteAlert
        id={DIALOG_IDS.DELETE_CUSTOMER_DIALOG_ID}
        onCancel={handleCloseDialog}
        onConfirm={() => console.log('Excluir cliente')}
      />
    </>
  );
}
