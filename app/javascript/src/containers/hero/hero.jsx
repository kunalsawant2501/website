import React from 'react'
import Container from 'components/modules/container/container'
import './hero.scss'

const Hero = () => {
  return (
    <Container id="home" className="d-flex align-self-end">
      <ul className="phrases-list">
        <li className="phrases-list--item">Travel</li>
        <li className="phrases-list--item">Ride</li>
        <li className="phrases-list--item">Code</li>
        <li className="phrases-list--item">Repit</li>
        </ul>
    </Container>
  )
}

export default Hero
