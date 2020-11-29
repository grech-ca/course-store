export enum ModalActions {
  OpenModal = 'OpenModal',
  CloseModal = 'CloseModal',
  ToggleModal = 'ToggleModal',
}

export type ModalParams = {
  isOpen: boolean;
};

export enum ModalName {
  CreateOrder = 'CreateOrder',
}

export type Modal = Record<ModalName.CreateOrder, ModalParams>;

export interface ModalAction {
  type?: ModalActions;
  name?: ModalName;
}
