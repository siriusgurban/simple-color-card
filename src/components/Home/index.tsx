import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import useTitle from '../../hooks/useTitle'
import ColorBoxGroup from '../ColorBoxGroup'

const colorArr = [1, 2, 3, 4, 5, 6]

function Home() {
  useTitle('Home')

  return (
    <div>
      <SimpleGrid
        spacing={2}
        display="flex"
        justifyContent="around"
        flexDirection="column"
        px={10}
        py={10}
        height="100vh"
      >
        <Heading mx="auto" p={10}>
          Color Schemes
        </Heading>
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
        >
          {colorArr.map((item, index) => (
            <ColorBoxGroup />
          ))}
        </Box>
      </SimpleGrid>
    </div>
  )
}

export default Home
