import * as React from 'react'
import { navigate } from 'gatsby'


const IndexPage = () => {
  const goToTest = () => {
    navigate('/test', {
      state: {
        action: 123,
      },
    })
  }

  return (
    <main>
      <button onClick={goToTest}>Go to test page</button>
    </main>
  )
}

export default IndexPage
