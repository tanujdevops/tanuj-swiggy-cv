import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  classes?: string;
  offset?: any;
}

const Index: FC<Props> = ({ children, classes }) => {
  return <div className={classes}>{children}</div>;
};
export default Index;
