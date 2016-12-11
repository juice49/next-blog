import React from 'react'
import PostContainer from '../../components/post-container'

const content = '# Hello, I am markdown.\n\nMy implementation could do with some improvement.'

export default () => (
  <PostContainer tags={[ 'markdown' ]} children={content} md />
)
