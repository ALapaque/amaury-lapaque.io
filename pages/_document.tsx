import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest"
                href="/manifest.json" />
          <link rel="apple-touch-icon"
                href="/icon.png"></link>
          <meta name="theme-color"
                content="#fff" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="google" content="nopagereadaloud" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description"
                content="Amaury Lapaque, Fullstack developer specilized in frontend technologies, feel free to contact me" />
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
