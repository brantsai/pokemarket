import { useState } from 'react';
import Layout from '../comps/Layout'
import '../styles/globals.css'
import AppContext from '../comps/AppContext'

function MyApp({ Component, pageProps }) {
  const [currentCard, setCurrentCard] = useState({});

  return (
    <AppContext.Provider value={{currentCard, setCurrentCard}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
