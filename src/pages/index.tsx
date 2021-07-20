import React, {FC} from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import base from '../styles/index.module.scss'
// import '../styles/index.scss'

const Home: FC = () => {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  console.log('process.env.NEXT_PUBLIC_NODE_ENV2', process.env.NEXT_PUBLIC_NODE_ENV2)
  return (
    <div className="container">
      <Head>
        <title>実験場</title>
      </Head>

      <p>NEXTJS</p>

      <Link href="/imageChange">
        SVGを編集してcanvas使ってpng画像をNextJSで作る
      </Link>

      <Link href="/questionSlot">
        GAS使って質問ルーレットをNextJSで作る
      </Link>
    </div>
  )
}


export default Home
