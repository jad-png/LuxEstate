import React from 'react'
import { BrowserRouter,Routes } from 'react-router'
import routes from './routes'
import render from './routes/render'

const App = () => {
  return (
    // import browser router from react router to wrap the app
    // import the routes and wrap it
    // then use the render method and pass to it the routes
    <BrowserRouter>
      <Routes>{render(routes)}</Routes>
    </BrowserRouter>
  )
}

export default App