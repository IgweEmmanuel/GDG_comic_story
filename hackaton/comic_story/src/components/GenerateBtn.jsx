import styled from 'styled-components'
import { useState } from 'react'

export default function GenerateBtn({ data }) {
  const [dat, setDat] = useState(0)

  return (
    <div>
      <Div>{data}</Div>
    </div>
  )
}
const Div = styled.a`
  /* Custom color Setting for the button */
  --accent-color: #db4437;
  --text-color: #fff;

  /* This renders the buttons above... Edit me! */
  background: var(--accent-color);
  border-radius: 4px;
  border: 1px solid var(--accent-color);
  color: var(--text-color);
  display: inline-block;
  font-weight: bold;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;
  height: 3rem;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }
`
