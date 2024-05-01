import styled from 'styled-components'

export default function Button({ data }) {
  return (
    <div>
      <Btn>
        <select>
          <option>{data}</option>
          <option>Text to Image</option>
        </select>
      </Btn>
    </div>
  )
}

const Btn = styled.a`
  /* Custom color Setting for the button */
  --accent-color: #4285f4;
  --text-color: white;

  /* This renders the buttons above... Edit me! */
  background: var(--accent-color);
  border-radius: 3px;
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
  select {
    color: white;
    background-color: #4285f4;
  }
`
