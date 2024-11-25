'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { DialogContextProps } from './types';

export const DialogContext = createContext<DialogContextProps | null>(null);

export function DialogProvider({ children }: { children: ReactNode }) {
  const [openedId, setOpenedId] = useState<string | null>(null);

  const handleOpenDialog = useCallback((id: string) => {
    setOpenedId(id);
  }, []);
  const handleCloseDialog = useCallback(() => {
    setOpenedId(null);
  }, []);

  const value = useMemo(
    () => ({
      openedId,
      handleOpenDialog,
      handleCloseDialog,
    }),
    [handleCloseDialog, handleOpenDialog, openedId],
  );

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}
