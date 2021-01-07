import { observer } from 'mobx-react';
import { FC } from 'react';
import { cartStore } from '../../store/cart';
import A from '../A/A';
import styles from './styles.module.scss';

const items = Array.from({ length: 5 })
  .fill('')
  .map((_, idx) => ({
    title: !idx ? 'Home' : 'Lorem',
    id: idx + 1,
    isLink: !idx,
  }));

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.body}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {items.map(({ id, title, isLink }) => (
              <li className={styles.item} key={id}>
                {isLink ? (
                  <A href={'/'} className={styles.link}>
                    {title}
                  </A>
                ) : (
                  title
                )}
              </li>
            ))}
          </ul>
          <A href="/cart" className={styles['cart-link']}>
            Cart
            <span>{cartStore.products.length}</span>
          </A>
        </nav>
      </div>
    </header>
  );
};

export default observer(Header);
