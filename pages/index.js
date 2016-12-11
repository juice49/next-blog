'use strict'

import React, { Component } from 'react'
import { theme } from '../config'

const { Index: IndexTheme } = theme

export default class Index extends Component {

  static async getInitialProps ({ req }) {
    return { foo: 'world' }
  }

  render () {
    return <IndexTheme />
  }

}
