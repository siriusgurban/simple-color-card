// @ts-nocheck

import {
  FormControl,
  FormLabel,
  SimpleGrid,
  Input,
  Heading,
  Button,
  Box,
  FormHelperText,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import useTitle from '../../hooks/useTitle'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { ROOTER } from '../../constants/router'
import ColorBox from '../ColorBox'

const initialValues = {
  colorName: '',
  colorCode: '',
}

const colorArr = [1, 2, 3, 4, 5, 6]

function Settings() {
  useTitle('Settings')

  const [color, setColor] = useState([])

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit: handleSubmitColor,
    validate: (form) => {
      const error = {}

      if (!form?.colorName?.trim()) {
        error.title = 'Require field'
      }
      if (!form?.colorCode?.trim()) {
        error.desc = 'Require field'
      }

      return error
    },
  })

  // async function handleEditBloag(data) {
  //   console.log(data, 'data')
  //   try {
  //     await crtBlog(data)
  //     navigate(ROOTER.ARTICLES)
  //     toast({
  //       description: 'Your post created',
  //       status: 'success',
  //       duration: 3000,
  //       isClosable: true,
  //       position: 'top-right',
  //     })
  //   } catch (error) {
  //     toast({
  //       description: error.message,
  //       status: 'error',
  //       duration: 3000,
  //       isClosable: true,
  //       position: 'top-right',
  //     })
  //   }
  // }

  function handleSubmitColor() {
    setColor([{ colorName, colorCode }])
  }

  return (
    <SimpleGrid
      spacing={10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      px={10}
      py={6}
    >
      {console.log(color, 'color state')}
      <Heading mx="auto">Create Color Scheme</Heading>
      <Box display="flex" justifyContent="space-between">
        <FormControl width="30%">
          <FormLabel htmlFor="colorName">Color Name</FormLabel>
          <Input
            type="text"
            id="colorName"
            name="colorName"
            value={color?.colorName}
            onChange={handleChange}
          />
          {/* {errors?.title && (
          <FormHelperText color="red">{errors?.title}</FormHelperText>
        )} */}
          <FormLabel htmlFor="colorCode">Color Code</FormLabel>
          <Input
            type="text"
            id="colorCode"
            name="colorCode"
            value={color?.colorCode}
            onChange={handleChange}
          />
          {/* {errors?.desc && (
          <FormHelperText color="red">{errors?.desc}</FormHelperText>
        )} */}
          <Box display="flex" justifyContent="center">
            <Button colorScheme="telegram" my={5} onClick={handleSubmit}>
              Add Color
            </Button>
          </Box>
        </FormControl>

        <SimpleGrid
          columns={[2, null, 3]}
          width="360px"
          height="160px"
          mx="auto"
        >
          {colorArr.map((item, index) => {
            return <ColorBox {...item} key={index} />
          })}
          {/* <FormControl>
            <FormLabel htmlFor="groupName">Group Name</FormLabel>
            <Input
              type="text"
              id="groupName"
              name="groupName"
            />
            <Box display="flex" justifyContent="center" w="100%">
              <Button colorScheme="telegram" my={5} onClick={handleSubmit}>
                Save
              </Button>
            </Box>
          </FormControl> */}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  )
}

export default Settings
