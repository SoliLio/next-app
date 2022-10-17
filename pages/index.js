import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { Component } from 'react'
//import { attributes, react as HomeContent } from '../content/home.md';
import { attributes, react as GalerieContent } from '../content/galerie.md';
import image from '../public/img/avatar.jpg'



console.log(process.env)

export default class Home extends Component {
  render() {
    let { title, cats, avatar } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <title>my first netlify</title>
        </Head>
        <article>
            <Link href="/galerie">Galerie</Link>
          <h1>{title} !</h1>
          
           <Image 
          src={avatar}
          alt="rate"
          width='350px'
          height='400px'
          /> 
         
          
          <GalerieContent />
        
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