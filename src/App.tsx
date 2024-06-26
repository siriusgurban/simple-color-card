import { Suspense, lazy } from 'react'
import './App.css'
import Header from './components/Header'
import { Box, Progress } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { ROOTER } from './constants/router'
import SpinnerLoad from './components/SpinnerLoad'

const Home = lazy(() => import('./pages/Home'))
const Settings = lazy(() => import('./pages/Settings'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <>
      <Suspense fallback={<SpinnerLoad />}>
        <Header />
        <Progress size="xs" isIndeterminate colorScheme="yellow" height="6px" />
        <Box>
          <Routes>
            <Route path={ROOTER.HOME} element={<Home />} />
            <Route path={ROOTER.SETTINGS} element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Suspense>
    </>
  )
}

export default App
