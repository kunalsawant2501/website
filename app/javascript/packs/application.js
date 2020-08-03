// -----------------------------
// RAILS REQUIRES
// -----------------------------
require("@rails/ujs").start()
require("turbolinks").start()
require("channels")

// -----------------------------
// REACT APP
// -----------------------------
import React from 'react'
import { render } from 'react-dom'
import App from 'containers/app'

document.addEventListener('DOMContentLoaded', () => {
  render (
    <App />,
    document.getElementById('app')
  )
})
