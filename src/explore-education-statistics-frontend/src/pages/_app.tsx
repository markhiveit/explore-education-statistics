import { Container, default as BaseApp } from 'next/app';
import React from 'react';
import Breadcrumbs from 'src/components/Breadcrumbs';
import PageBanner from 'src/components/PageBanner';
import PageFooter from 'src/components/PageFooter';
import PageHeader from 'src/components/PageHeader';

import './_app.scss';

class App extends BaseApp {
  public static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <PageHeader />

        <div className="govuk-width-container">
          <PageBanner />
          <Breadcrumbs />

          <main
            className="govuk-main-wrapper app-main-class"
            id="main-content"
            role="main"
          >
            <Container>
              <Component {...pageProps} />
            </Container>
          </main>
        </div>

        <PageFooter />
      </Container>
    );
  }
}

export default App;
