/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import { Modal as MUIModal, DialogContent } from '@material-ui/core';

import useModal from 'hooks/useModal';

import { ModalName } from 'ducks/modal/types';

type Props = {
  name: ModalName;
  children?: ReactNode | ReactNode[];
};

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    outline: 'none',
  },
}));

const Modal: FC<Props> = ({ children, name }) => {
  const classes = useStyles();

  const { isOpen, close } = useModal(name);

  const history = useHistory();

  useEffect(() => {
    close();
  }, [history]);

  return (
    <MUIModal
      disableAutoFocus
      disableRestoreFocus
      disableEnforceFocus
      className={classes.modal}
      open={isOpen}
      onClose={close}
    >
      <DialogContent className={classes.content}>{children}</DialogContent>
    </MUIModal>
  );
};

export default Modal;
