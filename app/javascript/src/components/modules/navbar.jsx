import React from 'react'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'

const Navbar = () => {
  return (
    <div className="navbar">
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Hidden smDown>
          <Box px={2} py={1}>
            Home
          </Box>
          <Box px={2} py={1}>
            About Me
          </Box>
          <Box px={2} py={1}>
            Work Experience
          </Box>
          <Box px={2} py={1}>
            Contact Me
          </Box>
        </Hidden>
      </Box>
    </div>
  )
}

export default Navbar
