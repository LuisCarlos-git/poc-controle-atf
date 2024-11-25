'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '../../ui/button';
import { DeleteAlertProps } from './types';
import { useDialog } from '@/hooks/contexts/useDialog';

export function DeleteAlert({ id, onCancel, onConfirm }: DeleteAlertProps) {
  const { openedId } = useDialog();
  return (
    <AlertDialog open={openedId === id}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza ?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser revertida futuramente
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button onClick={onConfirm} variant="destructive">
            Deletar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
