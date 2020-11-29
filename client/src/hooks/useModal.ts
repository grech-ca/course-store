import { useDispatch, useSelector } from 'react-redux';

import { openModal, closeModal } from 'ducks/modal';

import { ModalName, Modal } from 'ducks/modal/types';

type UseModalHookResult = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useModal = (name: ModalName): UseModalHookResult => {
  const dispatch = useDispatch();

  const isOpen = useSelector<Modal>((modal: Modal) => modal[name as ModalName].isOpen) as boolean;

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
