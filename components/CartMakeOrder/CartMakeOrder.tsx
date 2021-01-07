import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { cartStore } from '../../store/cart';
import Swal from 'sweetalert2';
import styles from './styles.module.scss';

interface IProps {}

const CartMakeOrder: FC<IProps> = () => {
  const router = useRouter();

  const sum = cartStore.products.reduce((acc, { price, count }) => {
    acc += price * count;

    return acc;
  }, 0);

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

  return (
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
  );
};

export default observer(CartMakeOrder);
