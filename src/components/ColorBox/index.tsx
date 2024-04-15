// @ts-nocheck

import { Box } from '@chakra-ui/react'

function ColorBox({ color = '#F48507FF', name = 'default' }) {
  return (
    <div>
      <Box bg={color} width="120px" height="80px" border="1px solid black">
        {name}
      </Box>
    </div>
  )
}

export default ColorBox
