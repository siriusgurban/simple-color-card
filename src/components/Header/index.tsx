// @ts-nocheck

import { Badge, Box, Button, Image, Stack } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROOTER } from '../../constants/router.js'
import { useSelector } from 'react-redux'

function Header() {
  const navigate = useNavigate()

  const { pathname } = useLocation()
  function isActive(param: string) {
    return pathname === param ? 'orange.700' : 'telegram'
  }

  const colorsGlobal = useSelector(
    (state: RootState) => state.colorGroup.colorGroup,
  )

  return (
    <div>
      <Box
        h={100}
        p={8}
        bgColor="green.500"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottomWidth="6px"
        borderColor="orange.700"
      >
        {/* <Image
          colorScheme="telegram"
          variant="ghost"
          onClick={() => {
            navigate(ROOTER.HOME)
          }}
          cursor="pointer"
          fontSize="3xl"
          src="../../../icons8-blog-96.png"
        /> */}
        <Stack direction="row" spacing={4} align="center">
          <Button
            color={isActive(ROOTER.HOME)}
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.HOME)
            }}
          >
            Home
            <Badge color="red">
              {!!colorsGlobal?.length && colorsGlobal?.length}
            </Badge>
          </Button>
          <Button
            color={isActive(ROOTER.SETTINGS)}
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.SETTINGS)
            }}
          >
            Settings
          </Button>
        </Stack>
      </Box>
    </div>
  )
}

export default Header
