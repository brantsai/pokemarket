import { useState } from 'react';
import Layout from '../comps/Layout'
import '../styles/globals.css'
import AppContext from '../comps/AppContext'
import { AuthProvider } from '../comps/AuthContext';

function MyApp({ Component, pageProps }) {
  const [currentCard, setCurrentCard] = useState({});

  return (
    <AuthProvider>
      <AppContext.Provider value={{currentCard, setCurrentCard}}>
        <Layout>
          <div className="content">
            <Component {...pageProps} />
          </div>
        </Layout>
      </AppContext.Provider>
    </AuthProvider>
  )
}

export default MyApp
