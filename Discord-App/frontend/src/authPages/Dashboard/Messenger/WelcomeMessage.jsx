import React from 'react'
import { Typography } from '@mui/material'
import { styled } from '@mui/system'

const Wrapper = styled('div')({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography variant="h6" sx={{ color: 'white' }}>
        Click on a friend name to start chatting!
      </Typography>
    </Wrapper>
  )
}

export default WelcomeMessage
