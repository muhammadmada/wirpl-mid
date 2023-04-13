import Head from 'next/head'
import home from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>QuickFashion</title>
      </Head>
      <div className={home.container}>
            <div className={home.head}>
                <h1>
                  GET AN OUTFIT FROM
                  <br />YOUR FAVORITE
                  <br />FASHION DESIGNER
                  <br/>NOW
                </h1>
                <br/>
                <div className={home.search}>
                  <p>search for designer or outfit</p>
                </div>
            </div>
        </div>
        </>
  )
}
