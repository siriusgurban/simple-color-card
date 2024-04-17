// @ts-nocheck

import { Box } from '@chakra-ui/react'

function ColorBox({ color = '#F48507FF', name = 'default' }) {
  return (
    <div>
      <Box
        bg={color}
        // maxWidth="120px"
        // maxHeight="80px"
        // width="100%"
        // height="100%"
        width="120px"
        height="80px"
        border="1px solid black"
        display="flex"
        flexDirection="column"
        flexBasis="100%"
        flex={1}
        pl={2}
        pt={2}
        fontWeight={700}
      >
        {name}
      </Box>
    </div>
  )
}

export default ColorBox
