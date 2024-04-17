// @ts-nocheck

import { Box, Heading, Text } from '@chakra-ui/react'
import ColorBox from '../ColorBox'
import { useEffect, useState } from 'react'

function ColorBoxGroup({ arr }) {
  console.log(arr, 'arr')
  const [rndColor, setRndColor] = useState()

  useEffect(() => {
    function rndColor() {
      const rndNumber = Math.floor(Math.random() * 6)
      setRndColor(arr?.color[rndNumber].colorCode)
    }
    rndColor()
  }, [arr])

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        gap="10%"
        px="20px"
      >
        <Box>
          <Heading
            maxWidth="360px"
            minWidth="120px"
            size={{ sm: 'sm', md: 'md', lg: 'lg' }}
          >
            Group&nbsp;Name
            <Box height={1} width="100%" bgColor="cyan.300"></Box>
            <Text color={`${rndColor}`}>{arr?.colorGroup}</Text>
          </Heading>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          maxWidth="360px"
          width={{ xs: '135px', sm: '180px', md: '270px', lg: '360px' }}
          height={{ xs: '60px', sm: '80px', md: '120px', lg: '160px' }}
        >
          {arr?.color.map((item, index) => {
            return (
              <ColorBox
                key={index}
                color={item.colorCode}
                name={item.colorName}
              />
            )
          })}
        </Box>
      </Box>
    </>
  )
}

export default ColorBoxGroup
