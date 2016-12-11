import React, { PropTypes } from 'react'
import Markdown from 'react-markdown'
import { defaultType, TYPE_REACT, TYPE_MARKDOWN, theme } from '../config'

const { Post } = theme

const PostContainer = ({ type, md, react, title, tags, children }) => {
  if (react) type = TYPE_REACT
  if (md) type = TYPE_MARKDOWN

  return (
    <Post {...{ title, tags }}>
      {type === TYPE_REACT
        ? children
        : <Markdown source={children} />}
    </Post>
  )
}

PostContainer.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf([ TYPE_REACT, TYPE_MARKDOWN ])
}

PostContainer.defaultProps = {
  type: defaultType
}

export default PostContainer
