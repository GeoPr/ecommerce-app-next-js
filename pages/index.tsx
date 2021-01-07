import { GetServerSideProps } from 'next';
import { FC } from 'react';
import Container from '../components/Container/Container';
import { IProduct } from '../store/cart';
import styles from './styles.module.scss';
import { cartStore } from '../store/cart';

interface IProps {
  products: Array<IProduct>;
}

const Home: FC<IProps> = ({ products }) => {
  const addProduct = (product: IProduct) => {
    cartStore.add(product);
  };

  return (
    <Container>
      <div className={styles.products}>
        {products.map(product => {
          const { t, tt, img, id, price, count } = product;

          return (
            <div key={id} className={styles.product}>
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
        })}
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:2100/products');
  const products = await response.json();

  return { props: { products } };
};

export default Home;
