import { ReactElement } from 'react';

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props): ReactElement {
  return <main>{children}</main>;
}

export default Layout;
