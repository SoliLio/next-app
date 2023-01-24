import Head from "next/head"
import Image from "next/image";
import Link from "next/link"
import React from 'react'
import { attributes, react as GalleryContent } from '../content/carroussel.md';

const galerie = () => {
  let { title, galleryImages } = attributes
  return (
    <>
    <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <title>Galeries</title>
        </Head>
        <Link href="/">Acceuil</Link>
        <h1>{title}</h1>
        <GalleryContent />
        
          {galleryImages.map((img, k) => (
            <Image 
            src={'/'+ img.image}
            alt={img.alt}
            width="150px"
            height="150px"
            />
          ))}
        
    </>
  )
}

export default galerie