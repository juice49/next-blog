import React from 'react'
import Link from 'next/link'
import PostContainer from '../../components/post-container'

export default () => (
  <PostContainer title='Hello, World!' tags={[ 'next.js', 'blog' ]}>
    <p>I've been experimenting with Next.js to create a blog.</p>
    <p>I don't think Next.js is perfect for the job just yet, however a lot of
    the difficulties I've encountered will be solved once the <a href='https://github.com/zeit/next.js/issues/291'>node.js API</a> ships.</p>
    <p>Next.js has been great to try out. It handles HMR, bundle splitting, CSS in JS,
    and routing out of the box with no setup required. It's really pretty cool.</p>
    <h2>Listing content</h2>
    <p>Next.js uses the filesystem for routing. This is nice to work with, but
    listing routes is not as easy as you might think. Why would we want to list
    routes? To create collection pages! Pages such as our homepage or tag
    pages.</p>
    <p>My initial idea was to use the node.js fs module to read all of the posts,
    but Next.js doesn't support this module. It probably wouldn't be very
    performant anyway, and doesn't really fit Next.js' model. The fs module
    would be meaningless clientside.</p>
    <p>There are a couple of other options, but until the node.js API for
    Next.js ships, we need to setup a second HTTP server to use them.</p>
    <h3>A build tool that creates JSON</h3>
    <p>We could use a build tool to create JSON files listing all of our content.
    Our Next.js pages could then read from this JSON. As far as I can tell,
    Next.js can't serve JSON right now—so we'd need to create a separate server
    for it.</p>
    <h3>A build tool that creates components</h3>
    <p>Maybe we could avoid creating a separate server if our build tool created
    page components and put them directly into our `pages` directory.</p>
    <h3>A basic API server</h3>
    <p>This would probably be the most flexible option—our Next.js pages could
    ask for content dynamically. For example, we could change our page length
    without having to rebuild a bunch of static data.</p>
    <h2>Dynamic routes</h2>
    <p>Next.js doesn't support dynamic route segments yet. We can use GET
    parameter instead, but that's not as nice.</p>
    <h2>Markdown writing experience not great</h2>
    <p>The markdown writing experience <a href='https://github.com/juice49/next-blog/blob/master/pages/blog/hello-markdown.js'>isn't great right now</a>, but I'm sure it
    can be improved.</p>
    <p><a href='https://github.com/juice49/next-blog'>View the source code on GitHub.</a></p>
  </PostContainer>
)
