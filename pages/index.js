import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { Component } from 'react'
//import { attributes, react as HomeContent } from '../content/home.md';
import { attributes, react as HomeContent } from '../content/home.md';
//import image from '../public/img/avatar.jpg'



console.log(process.env)

export default class Home extends Component {
  render() {
    let { title, cats, galleryImages } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <title>my first netlify</title>
        </Head>
        <article>
            <Link href="/galerie">Galerie</Link>          
          <HomeContent />
          {galleryImages.map((image, k)  => (
            <Image
            src={image.src}
            alt={image.alt}
            width='150px'
            height='150px'
            />
          ) )}
        
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}