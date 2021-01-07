import { GetServerSideProps } from 'next';
import { FC } from 'react';
import Container from '../components/Container/Container';
import HomeProduct from '../components/HomeProduct/HomeProduct';
import { IProduct } from '../store/cart';
import styles from './styles.module.scss';

interface IProps {
  products: Array<IProduct>;
}

const Home: FC<IProps> = ({ products }) => {
  return (
    <Container>
      <div className={styles.products}>
        {products.map(product => (
          <HomeProduct product={product} key={product.id} />
        ))}
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
