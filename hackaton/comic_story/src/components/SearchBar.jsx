import styled from 'styled-components'
export default function SearchBar({ data3 }) {
  return (
    <div>
      <div>
        <Input
          type="text"
          placeholder="Enter a brief prompt for your comic..."
        />
      </div>
    </div>
  )
}

const Input = styled.input`
  display: flex;
  width: 90vw;
  height: 7rem;
  color: black;
  border-radius: 4px;
  font-size: 30px;
  font-weight: bold;
  padding: 1rem 3rem;
  background-color: white;
`
