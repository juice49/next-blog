'use strict'

const express = require('express')
const next = require('next')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const app = next({ dev: true }) // xxx
const handle = app.getRequestHandler()

const schema = buildSchema(`
  type Query {
    post(id: String): Post
  }

  type Post {
    id: String,
    urn: String,
    title: String,
    tags: [ Tag ]
  }

  type Tag {
    name: String
  }
`)

const root = {
  post: obj => ({
    title: 'Hey',
    id: obj.id,
    urn: 'hey-test-post',
    tags: [ 'Foo' ]
  })
}

app.prepare().then(() => {
  const server = express()

  server.use('/api', graphqlHTTP({
    rootValue: root,
    graphiql: true,
    schema
  }))

  server.get('*', handle)

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
