import React from 'react'


function About() {
  const abc=localStorage.getItem('email')
  return (
    <>
    <h1>About</h1>
    <h2>{abc}</h2>
    <h1>{localStorage.getItem('name')}</h1>
    </>
  )
}

export default About