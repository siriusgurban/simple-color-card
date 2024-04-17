import { Box } from '@chakra-ui/react'

function ColorBox({ color = '#F48507FF', name = 'default' }) {
  return (
    <div>
      <Box
        bg={color}
        width={{ xs: '45px', sm: '60px', md: '90px', lg: '120px' }}
        height={{ xs: '30px', sm: '40px', md: '60px', lg: '80px' }}
        border="1px solid black"
        display="flex"
        flexDirection="column"
        flexBasis="100%"
        flex={1}
        pl={1}
        pt={1}
        fontWeight={700}
        overflow="hidden"
      >
        {name}
      </Box>
    </div>
  )
}

export default ColorBox
