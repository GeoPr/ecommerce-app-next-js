import { observer } from 'mobx-react';
import { FC } from 'react';
import { cartStore, IProduct } from '../../store/cart';
import styles from './styles.module.scss'

interface IProps {
  product: IProduct;
}

const CartProduct: FC<IProps> = ({ product }) => {
  const { id, t, tt, img, count, price } = product;

  const deleteProduct = (id: number) => {
    cartStore.delete(id);
  };

  return (
    <div className={styles.product}>
      <div className={styles.count}>{count}</div>
      <div className={styles.img}>
        <img src={img} alt="Product" />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h4 className={styles.title}>{t}</h4>
          <p className={styles.subtitle}>{tt}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.price}>
            {price}
            <span className="dollar">$</span>
          </div>
          <button
            className={`${styles.button} button`}
            onClick={() => deleteProduct(id)}>
            Delete the product
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(CartProduct);
