import Head from "next/head"
import { Component } from 'react'
//import { attributes, react as HomeContent } from '../content/home.md';
import { attributes, react as GalerieContent } from '../content/galerie.md';

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <title>my first netlify</title>
        </Head>
        <article>
          <h1>{title}</h1>
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