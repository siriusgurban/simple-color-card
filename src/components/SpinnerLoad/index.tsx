import { Box } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'

function SpinnerLoad() {
  return (
    <Box
      h="100vh"
      bgColor="#CCE4F7"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  )
}

export default SpinnerLoad
