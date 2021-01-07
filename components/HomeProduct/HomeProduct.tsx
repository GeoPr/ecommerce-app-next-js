import { FC } from 'react';
import { cartStore, IProduct } from '../../store/cart';
import styles from './styles.module.scss';

interface IProps {
  product: IProduct;
}

const HomeProduct: FC<IProps> = ({ product }) => {
	const { id, t, tt, img, price } = product;

	const addProduct = (product: IProduct) => {
    cartStore.add(product);
  };

  return (
    <div className={styles.product}>
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
            onClick={() => addProduct(product)}>
            Add to the cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
