// @ts-nocheck

import { SimpleGrid } from '@chakra-ui/react'
import ColorBox from '../ColorBox'

const colorArr = [1, 2, 3, 4, 5, 6]

function ColorBoxGroup() {
  return (
    <SimpleGrid columns={[2, null, 3]} width="360px" height="160px">
      {colorArr.map((item, index) => {
        return <ColorBox {...item} key={index} />
      })}
    </SimpleGrid>
  )
}

export default ColorBoxGroup
