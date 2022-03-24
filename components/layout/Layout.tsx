import React, { FC } from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({children, title="Gustavo Restrepo"}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Gustavo Restrepo" />
      </Head>
      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  );
};
