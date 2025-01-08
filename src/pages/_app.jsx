import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head'; // Importa Head de Next.js
import { LanguageProvider } from "../context/LanguageContext";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <title>Nicoya Zona Azul</title> {/* Título por defecto */}
        <meta name="description" content="Descubre los secretos de la longevidad y cultura de Nicoya, una de las zonas azules del mundo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/logoNicoyaBZ.webp" /> {/* Logo como favicon */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;
