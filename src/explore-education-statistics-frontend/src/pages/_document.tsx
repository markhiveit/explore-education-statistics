import { default as BaseDocument, Head, Main, NextScript } from 'next/document';
import React from 'react';

class Document extends BaseDocument {
  public static async getInitialProps(ctx: any) {
    const initialProps: any = await BaseDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <html>
        <Head />

        <body className="govuk-template__body app-body-class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
