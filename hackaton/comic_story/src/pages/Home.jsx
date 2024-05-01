import styled from 'styled-components'
import {
  Button,
  DisplayBox,
  SearchBar,
  GenerateBtn,
  ButtonCommit,
} from '../components'
// import content from '../content'

function Home() {
  const data1 = 'GENRE'
  const data2 = 'INSTANT COMIT'
  const data3 = 'Hello, Faith! How can I help you today?'
  const data4 = ''
  const data5 = 'Generate'
  return (
    <div>
      <Container>
        <Btn>
          <Button data={data1} />
          <ButtonCommit data={data2} />
        </Btn>
        <Title>
          <h1>Hello!</h1>
          <span>Welcome to Instant Comics?</span>
        </Title>
        <Search>
          <SearchBar data={data3} />
        </Search>
        <Generate>
          <GenerateBtn data={data5} />
        </Generate>
        <Div>
          <Display>
            <DisplayBox data={data4} />
          </Display>

          <Display>
            <DisplayBox data={data4} />
          </Display>

          <Display>
            <DisplayBox data={data4} />
          </Display>

          <Display>
            <DisplayBox data={data4} />
          </Display>
        </Div>
      </Container>
    </div>
  )
}

export default Home
//container
const Container = styled.div`
  display: grid;
  height: 100vh;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 100%;
`
//Two buttons at top left(Genre), right(Instant Comic)
const Btn = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`
//title
const Title = styled.div`
  font-size: 50px;
`
//Search
const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

//Generate button
const Generate = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`
//Display box
const Display = styled.div`
  display: flex;
  width: 10rem;
  height: 10rem;
  margin-right: 2rem;
  border-radius: 4px;
  background-color: white;
`
//Display box container
const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
