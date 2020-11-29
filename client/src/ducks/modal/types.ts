export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

const modalNames = ['ADD_TRANSACTION_MUTATION', 'ADD_USER_MUTATION'] as const;

export type ModalName = typeof modalNames[number];

export type Modal = {
  [name in ModalName]: {
    isOpen: boolean;
    options: { [key: string]: any };
  };
};

export type ModalState = Partial<Modal>;

export interface ModalAction {
  type: string;
  name: ModalName;
  options?: { [key: string]: any };
}
