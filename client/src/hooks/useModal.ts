import { useDispatch, useSelector } from 'react-redux';

import { openModal, closeModal } from 'ducks/modal';

import { ModalName, ModalState } from 'ducks/modal/types';

type useModalType = {
  isOpen: unknown;
  open: () => void;
  close: () => void;
};

const useModal = (name: ModalName): useModalType => {
  const dispatch = useDispatch();

  const isOpen = useSelector<ModalState>(state => state.modal[name]?.isOpen);

  const open = (): void => {
    dispatch(openModal(name));
  };

  const close = (): void => {
    dispatch(closeModal(name));
  };

  return {
    isOpen,
    open,
    close,
  };
};

export default useModal;