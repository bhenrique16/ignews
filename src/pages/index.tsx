import Head from 'next/head'
import { GetServerSideProps } from 'next'
import styles from './home.module.scss'
import SubscribeButton from '../components/Header/SubscribeButton'
import { stripe } from '../services/stripe'


export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React </span>world</h1>
          <p>
            Get acess to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/Mulher.svg" alt="Girl coding" />
      </main>

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_price_1O48CEE6oPjfwhiGW3Wk1KZn', {
    expand: ['product']
  })

  const product = {
    priceId
  }

  return {
    props: {
      nome: 'bruno'
    }
  }

}
