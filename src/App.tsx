import { Suspense, lazy } from 'react'
import './App.css'
import Header from './components/Header'
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { ROOTER } from './constants/router'

const Home = lazy(() => import('./components/Home'))
const Settings = lazy(() => import('./components/Settings'))
const NotFound = lazy(() => import('./components/NotFound'))

function App() {
  return (
    <>
      <Suspense fallback>
        <Header />
        <Box bg="red.50">
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