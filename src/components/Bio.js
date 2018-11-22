import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(.25),
        }}
      >
        <img
          src={profilePic}
          alt={`Roby`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: 100,
          }}
        />
        <p
          style={{
            color: "#444",
          }}
        >
          <strong>Roby Saavedra</strong> is a product designer who lives in NYC.<br /> He's currently building educational software at <a href="https://www.flocabulary.com" target="_blank">Flocabulary</a><br />{' '}
          <a href="mailto:roby.saavedra@protonmail.com">
            Go ahead and email him.
          </a>
        </p>
      </div>
    )
  } 
}

export default Bio
