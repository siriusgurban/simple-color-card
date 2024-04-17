// @ts-nocheck

import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  Box,
  FormHelperText,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import useTitle from '../../hooks/useTitle'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { ROOTER } from '../../constants/router'
import ColorBox from '../../components/ColorBox'
import { useDispatch, useSelector } from 'react-redux'
import { colorsHandle } from '../../store/global/colorSlice'
import { TypeAnimation } from 'react-type-animation'
import AccordionColorPicker from '../../components/AccordionColorPicker'

const initialValues = {
  colorName: 'Green-400',
  colorCode: '#50C878',
}

function Settings() {
  useTitle('Settings')
  const navigate = useNavigate()
  const toast = useToast()

  const [color, setColor] = useState([])
  const [colorGroup, setColorGroup] = useState('')
  const [disable, setDisable] = useState(true)

  const dispatch = useDispatch()
  const colorsGlobal = useSelector(
    (state: RootState) => state.colorGroup.colorGroup,
  )

  console.log(colorsGlobal, 'colorsGlobal')

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit: handleSubmitColor,
    validate: (form) => {
      const error = {}
      const colorCodeReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

      if (!form?.colorName?.trim()) {
        error.title = 'Require field'
      }
      if (!colorCodeReg.test(form?.colorCode?.trim())) {
        error.desc = 'Enter hash code'
      }
      if (!form?.colorCode?.trim()) {
        error.desc = 'Require field'
      }

      return error
    },
  })

  function handleSubmitColor() {
    if (color.length == 5) {
      setDisable(!disable)
    }
    if (color.length >= 6) return
    setColor([...color, values])
  }

  function handleSubmitColorGroup() {
    if (colorGroup.trim().length == 0) {
      toast({
        description: 'Enter Group name',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }
    if (color.length < 6) return
    dispatch(colorsHandle({ color: color, colorGroup: colorGroup }))
    navigate(ROOTER.HOME)
  }

  return (
    <Box
      spacing={2}
      display="flex"
      flexDirection="column"
      mx="auto"
      p={{ xs: '4px', sm: '10px', lg: 10, md: 8 }}
      bgColor="#CCE4F7"
      h="100vh"
      minWidth="345px"
    >
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Heading mx="auto" pb={10}>
          <TypeAnimation
            sequence={['Create Color Scheme', 1000]}
            wrapper="span"
            cursor={false}
            repeat={1}
          />
        </Heading>
        <Box display="flex" gap="4%">
          <FormControl width="35%">
            <FormLabel htmlFor="colorName">Color Name</FormLabel>
            <Input
              type="text"
              id="colorName"
              name="colorName"
              value={color?.colorName}
              onChange={handleChange}
              border="1px solid #0088CC"
            />
            {errors?.title && (
              <FormHelperText color="red">{errors?.title}</FormHelperText>
            )}
            <FormLabel htmlFor="colorCode">Color Code</FormLabel>
            <Input
              type="text"
              id="colorCode"
              name="colorCode"
              value={color?.colorCode}
              onChange={handleChange}
              border="1px solid #0088CC"
            />
            {errors?.desc && (
              <FormHelperText color="red">{errors?.desc}</FormHelperText>
            )}
            <Box display="flex" justifyContent="center">
              <Button
                isDisabled={!disable}
                colorScheme="telegram"
                my={5}
                onClick={handleSubmit}
              >
                Add Color
              </Button>
            </Box>
          </FormControl>
          <Box
            width="65%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            gap={10}
          >
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              maxWidth="360px"
              mx="auto"
              width={{ xs: '135px', sm: '180px', md: '270px', lg: '360px' }}
              height={{ xs: '60px', sm: '80px', md: '120px', lg: '160px' }}
            >
              {color.map((item, index) => {
                return (
                  <ColorBox
                    color={item?.colorCode}
                    name={item?.colorName}
                    key={index}
                  />
                )
              })}
            </Box>
            <Box>
              <FormControl width="80%" mx="auto">
                <FormLabel htmlFor="groupName">Group Name</FormLabel>
                <Input
                  type="text"
                  id="groupName"
                  name="groupName"
                  onChange={(e) => setColorGroup(e.target.value)}
                  border="1px solid #0088CC"
                />
                <Box display="flex" justifyContent="center">
                  <Button
                    colorScheme="telegram"
                    my={5}
                    onClick={() => handleSubmitColorGroup()}
                    isDisabled={disable}
                    width="100%"
                  >
                    Save
                  </Button>
                </Box>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <AccordionColorPicker />
      </Box>
    </Box>
  )
}

export default Settings
