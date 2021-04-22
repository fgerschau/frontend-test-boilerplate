import { FC } from 'react';
import { Container } from '@material-ui/core';

const Layout: FC = ({ children }) => {
  return (
    <Container maxWidth="md">
      <>{children}</>
    </Container>
  );
};

export default Layout;
