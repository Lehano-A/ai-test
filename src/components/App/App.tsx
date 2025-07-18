import StartTestSection from '../sections/StartTestSection/StartTestSection'
import { useAppSelector } from '../../redux/store'
import Test from '../Test/Test'
import styled from 'styled-components'
import Notification from '../ui/Notification/Notification'

const Main = styled('main')`
  max-width: 904px;
  width: 100%;
  display: flex;
  margin: 0 auto;
`

function App() {
  const isRunningTest = useAppSelector((state) => state.test.isRunningTest)

  return (
    <>
      <Main>
        {isRunningTest ? (
          <Test />
        ) : (
          <StartTestSection title='Психодиагностический тест для детей' />
        )}
      </Main>

      <Notification />
    </>
  )
}

export default App
