import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    background-color: rgba(240, 248, 255, 0.88);
`

function Loading() {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  )
}

export default Loading