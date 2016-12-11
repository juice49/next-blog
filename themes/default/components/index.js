import React from 'react'
import Link from 'next/link'
import Layout from './layout'

const Index = () => (
  <Layout>
    <h2>Posts</h2>
    <ul>
      <li><Link href='/blog/hello-world'>Hello, World!</Link></li>
      <li><Link href='/blog/hello-markdown'>Hello Markdown</Link></li>
    </ul>
  </Layout>
)

export default Index
