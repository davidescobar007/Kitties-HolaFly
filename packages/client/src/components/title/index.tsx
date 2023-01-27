import { ReactElement } from 'react';

type Props = {
  children: JSX.Element | string | undefined;
  extraClassName: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default function Title({
  children = '',
  type = 'h2',
  extraClassName = '',
}: Props): ReactElement {
  const cssClass = `text-primary  ${extraClassName}`;
  if (type === 'h1') return <h1 className={cssClass}>{children}</h1>;
  if (type === 'h2') return <h2 className={cssClass}>{children}</h2>;
  if (type === 'h3') return <h3 className={cssClass}>{children}</h3>;
  if (type === 'h4') return <h4 className={cssClass}>{children}</h4>;
  if (type === 'h5') return <h5 className={cssClass}>{children}</h5>;
  else {
    return <></>;
  }
}
