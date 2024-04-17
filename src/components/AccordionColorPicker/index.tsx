import { ColorInput } from '../../components/ColorInput'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

function AccordionColorPicker() {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="center" fontWeight="600">
              Pick a color
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ColorInput />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionColorPicker
