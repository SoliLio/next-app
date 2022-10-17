import Head from "next/head"
import Link from "next/link"
import React from 'react'

const galerie = () => {
  return (
    <>
    <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <title>Galerie</title>
        </Head>
        <Link href="/">Acceuil</Link>
    </>
  )
}

export default galerie