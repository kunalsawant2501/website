// -----------------------------
// RAILS REQUIRES
// -----------------------------
require("@rails/ujs").start()
require("turbolinks").start()
require("channels")

// -----------------------------
// LIBS REQUIRES
// -----------------------------
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

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
