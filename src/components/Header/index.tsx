// @ts-nocheck

import { Badge, Box, Button, Stack } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROOTER } from '../../constants/router.js'
import { useSelector } from 'react-redux'

function Header() {
  const navigate = useNavigate()

  const { pathname } = useLocation()
  function isActive(param: string) {
    return pathname === param ? 'yellow.500' : 'telegram'
  }

  const colorsGlobal = useSelector(
    (state: RootState) => state.colorGroup.colorGroup,
  )

  return (
    <div>
      <Box
        h={100}
        p={8}
        bgGradient="linear(to-l, #7928CA,#12D97C, #FF0080)"
        display="flex"
        justifyContent="center"
        gap={36}
        alignItems="center"
        // borderBottomWidth="6px"
        // borderColor="yellow.500"
      >
        <Stack direction="row" spacing={4} align="center">
          <Button
            color={isActive(ROOTER.HOME)}
            colorScheme="telegram"
            variant="ghost"
            fontSize={24}
            onClick={() => {
              navigate(ROOTER.HOME)
            }}
          >
            Home
            <Badge
              color="red"
              bgColor="cyan.300"
              border={`${!!colorsGlobal?.length && '1px solid black'}`}
              rounded="50%"
              position="absolute"
              top="6px"
              right="-2px"
            >
              {!!colorsGlobal?.length && colorsGlobal?.length}
            </Badge>
          </Button>
          <Button
            color={isActive(ROOTER.SETTINGS)}
            colorScheme="telegram"
            variant="ghost"
            fontSize={24}
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
