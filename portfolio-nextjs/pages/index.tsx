import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import App from '../components';

export default function Home(): JSX.Element {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <App />
    </div>
  );
}
