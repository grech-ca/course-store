import React, { FC, ReactNode } from 'react';

import { Modal as MUIModal, DialogContent } from '@material-ui/core';

import useModal from 'hooks/useModal';

import { ModalName } from 'ducks/modal/types';

type Props = {
  name: ModalName;
  children?: ReactNode | ReactNode[];
};

const Modal: FC<Props> = ({ children, name }) => {
  const { isOpen } = useModal(name);

  return (
    <MUIModal open={isOpen}>
      <DialogContent>{children}</DialogContent>
    </MUIModal>
  );
};

export default Modal;
