import { Row } from '@tanstack/react-table';
import { TableData } from '../customers-table/types';

export type CustomerTableActionsProps = {
  row: Row<TableData>;
};

export enum DIALOG_IDS {
  DELETE_CUSTOMER_DIALOG_ID = 'DELETE_CUSTOMER_DIALOG_ID',
}
