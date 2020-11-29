import { ModalActions, ModalName, Modal, ModalAction } from './types';

const initialState: Modal = {
  CreateOrder: {
    isOpen: false,
  },
};

const modalReducer = (state: Modal = { ...initialState }, action: ModalAction): Modal => {
  const { type, name } = action;

  switch (type) {
    case ModalActions.OpenModal:
      return { ...state, [name as ModalName]: { isOpen: true } };
    case ModalActions.CloseModal:
      return { ...state, [name as ModalName]: { isOpen: false } };
    case ModalActions.ToggleModal:
      return { ...state, [name as ModalName]: { isOpen: !state[name as ModalName]?.isOpen } };
    default:
      return state;
  }
};

export const openModal = (name: ModalName): ModalAction => ({
  type: ModalActions.OpenModal,
  name,
});

export const closeModal = (name: ModalName): ModalAction => ({
  type: ModalActions.CloseModal,
  name,
});

export const toggleModal = (name: ModalName): ModalAction => ({
  type: ModalActions.ToggleModal,
  name,
});

export default modalReducer;
