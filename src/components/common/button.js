import styled from 'styled-components'
import colors from './mixins/colors'

const Button = styled.button`
  transition: all .3s ease;
  background: ${props => colors[Object.keys(props).find(p => colors[p])] || colors.default};
  text-transform: ${props => props.upper ? 'uppercase' : 'none'};
  font-weight: bold;
  color: ${props => props.default ? colors.default : colors.invert};
  padding: 9px 13px;
  margin: 1px;
  border: none;
  border-radius: 2px;
  &:hover {
      opacity: .7;
  }
`;

export default Button;