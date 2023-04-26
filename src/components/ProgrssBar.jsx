import {Box,LinearProgress} from "@mui/material"
import React from 'react'
import {ProgressBarWrapper} from './styled/ProgressBar.styles'

function ProgrssBar({progress}) {
  return (
   <ProgressBarWrapper>
    <Box width={"100%"}>
   <LinearProgress variant='determinate' value={progress}/>
    </Box>
   </ProgressBarWrapper>
  )
}

export default ProgrssBar