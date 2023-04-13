import Head from 'next/head'
import admin from '../styles/Admin.module.css'
import Nav from '../components/Nav'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Admin() {
  return (
    <>
      <Head>
        <title>QuickFashion</title>
      </Head>
      <div>
        <div className={admin.upper}>
            <div className={admin.upperLeft}>
                <h1>enter your 
                <br/>product picture
                <br />here
                </h1>
            </div>
            <div className={admin.upperRight}>
                <div>
                    <h1>
                        Product Description:
                    </h1>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam auctor, nisl eget ultricies tincidunt, nisl
                        ligula aliquam mauris, nec ultricies nisl nunc vel
                        mauris. Nullam auctor, nisl eget ultricies tincidunt,
                        nisl ligula aliquam mauris, nec ultricies nisl nunc
                        vel mauris.
                    </p>
                </div>
            </div>
        </div>
        <div className={admin.lower}>
        </div>
      </div>
    </>
    )
}
