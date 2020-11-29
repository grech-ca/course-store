import { SHOW_MODAL, CLOSE_MODAL, TOGGLE_MODAL, ModalName, ModalState, ModalAction } from './types';

const initialState: ModalState = {};

const modalReducer = (state: ModalState = { ...initialState }, action: ModalAction): ModalState => {
  const { type, name, options } = action;

  switch (type) {
    case SHOW_MODAL:
      return { ...state, [name]: { isOpen: true, options } };
    case CLOSE_MODAL:
      return { ...state, [name]: { isOpen: false, options } };
    case TOGGLE_MODAL:
      return { ...state, [name]: { isOpen: !state[name]?.isOpen, options } };
    default:
      return state;
  }
};

export const openModal = (name: ModalName, options?: { [key: string]: any }): ModalAction => ({
  type: SHOW_MODAL,
  name,
  options,
});

export const closeModal = (name: ModalName, options?: { [key: string]: any }): ModalAction => ({
  type: CLOSE_MODAL,
  name,
  options,
});

export const toggleModal = (name: ModalName, options?: { [key: string]: any }): ModalAction => ({
  type: TOGGLE_MODAL,
  name,
  options,
});

export default modalReducer;
