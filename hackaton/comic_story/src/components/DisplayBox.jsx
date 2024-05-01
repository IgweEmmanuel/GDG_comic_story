import styled from 'styled-components'
export default function DisplayBox({ image, text }) {
  return (
    <div>
      <Div>
        <div>{image}</div>
        <div>{text}</div>
      </Div>
    </div>
  )
}
const Div = styled.div`
  width: 4rem;
  heigh: 4rem;
  padding: 1.1rem;
`
