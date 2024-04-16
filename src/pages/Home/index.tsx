// @ts-nocheck

import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import useTitle from '../../hooks/useTitle'
import ColorBoxGroup from '../../components/ColorBoxGroup'
import { useSelector } from 'react-redux'

function Home() {
  useTitle('Home')

  const colorsGlobal = useSelector(
    (state: RootState) => state.colorGroup.colorGroup,
  )

  console.log(colorsGlobal, 'colorsGlobal')

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
          {colorsGlobal.map((item, index) => (
            <ColorBoxGroup key={index} arr={item} />
          ))}
        </Box>
      </SimpleGrid>
    </div>
  )
}

export default Home
