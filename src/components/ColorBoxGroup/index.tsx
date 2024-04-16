// @ts-nocheck

import { Heading, SimpleGrid } from '@chakra-ui/react'
import ColorBox from '../ColorBox'

function ColorBoxGroup({ arr }) {
  console.log(arr, 'arr')

  return (
    <>
      <Heading>Group Name: {arr?.colorGroup}</Heading>
      <SimpleGrid columns={[2, null, 3]} width="360px" height="160px">
        {arr?.color.map((item, index) => {
          return (
            <ColorBox
              key={index}
              color={item.colorCode}
              name={item.colorName}
            />
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default ColorBoxGroup
