// @ts-nocheck

import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import useTitle from '../../hooks/useTitle'
import ColorBoxGroup from '../../components/ColorBoxGroup'
import { useSelector } from 'react-redux'
import { TypeAnimation } from 'react-type-animation'
import GetStart from '../../components/GetStart'

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
        flexDirection="column"
        p={{ sm: '10px', lg: 10, md: 8 }}
        height="100vh"
        maxHeight="100%"
        bgColor="#CCE4F7"
        minWidth="460px"
      >
        <Heading mx="auto" pb={10}>
          <TypeAnimation
            sequence={['Color Schemes', 1000]}
            wrapper="span"
            cursor={false}
            repeat={1}
          />
        </Heading>
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          flexDirection="column"
          gap={6}
        >
          {colorsGlobal.length != 0 ? (
            colorsGlobal.map((item, index) => (
              <ColorBoxGroup key={index} arr={item} />
            ))
          ) : (
            <GetStart />
          )}
        </Box>
      </SimpleGrid>
    </div>
  )
}

export default Home
