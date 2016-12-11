import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>
    <h1><Link href='/'>Ash</Link></h1>
    {children}
    <footer>
      <small>Thanks for reading 😊.</small>
    </footer>
  </div>
)

export default Layout

const style =
  `body {
    font-family: -apple-system, BlinkMacSystemFont;
  }`
