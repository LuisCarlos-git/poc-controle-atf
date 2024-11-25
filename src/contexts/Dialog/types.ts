export type DialogContextProps = {
  handleOpenDialog: (id: string) => void;
  handleCloseDialog: () => void;
  openedId: string | null;
};
