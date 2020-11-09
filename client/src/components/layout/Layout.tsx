import React, { Fragment, FC, ReactNode } from 'react';

import Header from 'components/layout/Header';

type Props = {
  header?: boolean;
  admin?: boolean;
  children?: undefined | ReactNode | ReactNode[];
};

const Layout: FC<Props> = ({ header, children }) => {
  return (
    <Fragment>
      {header && <Header />}
      {children}
    </Fragment>
  );
};

export default Layout;
