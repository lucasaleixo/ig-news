import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts / ig-news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>21 de fevereiro de 2022</time>
            <strong>Oportunidades internacionais em programação</strong>
            <p>Obter uma oportunidade no exterior é um objetivo e um sonho para muitos devs</p>
          </a>
          <a href="#">
            <time>21 de fevereiro de 2022</time>
            <strong>Oportunidades internacionais em programação</strong>
            <p>Obter uma oportunidade no exterior é um objetivo e um sonho para muitos devs</p>
          </a>
          <a href="#">
            <time>21 de fevereiro de 2022</time>
            <strong>Oportunidades internacionais em programação</strong>
            <p>Obter uma oportunidade no exterior é um objetivo e um sonho para muitos devs</p>
          </a>
        </div>
      </main>
    </>
  );
}