import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from '../mixins/colors'

const NavLink = styled(Link)`
    color: ${colors.default};
    text-decoration: none;
    text-transform: none;
    text-align: center;
    padding: 12px;
    &:hover, &:active, &:visited, &:link{
      color: ${colors.default};
      text-decoration: none;
      text-transform: none;
    }
    &:hover {
      color: ${colors.primary};
    }
`;

export default NavLink;