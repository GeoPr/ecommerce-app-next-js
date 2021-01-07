import Link from 'next/link';
import { FC } from 'react';
import styles from './styles.module.scss';

interface IProps {
  href: string;
  className?: string;
}

const A: FC<IProps> = ({ children, href, className = '' }) => {
  return (
    <Link href={href}>
      <a className={`${styles.link} ${className}`}>{children}</a>
    </Link>
  );
};

export default A;
