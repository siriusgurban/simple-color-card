import { Box, Button, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ROOTER } from '../../constants/router'

function GetStart() {
  const navigate = useNavigate()
  return (
    <>
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Heading
          bgColor="red.300"
          rounded="24px"
          px={4}
          width="35%"
          mx="auto"
          size={{ sm: 'md', md: 'lg', lg: 'xl' }}
          textAlign="center"
        >
          There is no color scheme
        </Heading>
        <Button
          mx="auto"
          colorScheme="telegram"
          my={5}
          onClick={() => navigate(ROOTER.SETTINGS)}
          width="35%"
          rounded="24px"
        >
          Get Start
        </Button>
      </Box>
    </>
  )
}

export default GetStart
