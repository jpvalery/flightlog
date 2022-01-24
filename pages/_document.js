import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            defer
            data-website-id="2ed405e9-3698-40a9-9286-0531e2cb11df"
            src="https://analytics.jpvalery.com/umami.js"
          ></script>
        </Head>
        <body className="bg-zinc-800 text-zinc-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
