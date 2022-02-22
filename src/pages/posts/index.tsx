import { GetStaticProps } from 'next'
import Head from 'next/head';
import Prismic from '@prismicio/client'

import { getPrismicClient } from '../../services/prismic';

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

export const getStaticProps: GetStaticProps = async() => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}