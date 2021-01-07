import { observer } from 'mobx-react';
import { FC } from 'react';
import Container from '../../components/Container/Container';
import { cartStore } from '../../store/cart';
import styles from './styles.module.scss';
import CartProduct from '../../components/CartProduct/CartProduct';
import CartMakeOrder from '../../components/CartMakeOrder/CartMakeOrder';

const Cart: FC = () => {
  return (
    <Container>
      {cartStore.products.length ? (
        <div className={styles.products}>
          <div className={styles.body}>
            {cartStore.products.map(product => (
              <CartProduct product={product} key={product.id} />
            ))}
          </div>
          <CartMakeOrder />
        </div>
      ) : (
        <div className={styles.empty}>The cart is empty</div>
      )}
    </Container>
  );
};

export default observer(Cart);
