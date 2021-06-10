import * as React from 'react'
import { navigate } from 'gatsby'


const TestPage = () => {
  const goToMain = () => {
    navigate('/')
  }

  return (
    <main>
      <title>Test Page</title>
      <button onClick={goToMain}>go main</button>
      {typeof window !== 'undefined' && <pre>{JSON.stringify(window.history.state)}</pre>}
    </main>
  )
}

export default TestPage
