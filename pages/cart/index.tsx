import { observer } from 'mobx-react';
import { FC } from 'react';
import Container from '../../components/Container/Container';
import { cartStore } from '../../store/cart';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import styles from './styles.module.scss';

const Cart: FC = () => {
  const router = useRouter();

  const deleteProduct = (id: number) => {
    cartStore.delete(id);
  };

  const makeOrder = () => {
    Swal.fire({
      title: 'Thank`s for your order !',
      text: 'We`ll be glad to see you again.',
      icon: 'success',
      timer: 7000,
    });

    cartStore.reset();

    router.push('/');
  };

  const sum = cartStore.products.reduce((acc, { price, count }) => {
    acc += price * count;

    return acc;
  }, 0);

  return (
    <Container>
      {cartStore.products.length ? (
        <div className={styles.products}>
          <div className={styles.body}>
            {cartStore.products.map(product => {
              const { id, t, tt, img, price, count } = product;

              return (
                <div className={styles.product} key={id}>
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
            })}
          </div>
          <div className={styles.order}>
            <div className={styles.sum}>
              Sum: {sum}
              <span className="dollar">$</span>
            </div>
            <button
              className={`${styles['order-button']} button`}
              onClick={makeOrder}>
              Make the order
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.empty}>The cart is empty</div>
      )}
    </Container>
  );
};

export default observer(Cart);
