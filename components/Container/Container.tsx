import { FC } from 'react';
import Head from 'next/head';
import styles from './styles.module.scss'

const Container: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cart app</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <div className="wrapper">
        <main className="page">
          <section className={styles.section}>
            <div className="_container">
              <div>{children}</div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Container;
