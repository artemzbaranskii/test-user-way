import styled from 'styled-components';

import { colors } from '../../constants/theme';


export const Wrapper = styled.div`
  width: ${({width}) => width || '100%'};
  margin-left: ${({marginLeft}) => marginLeft && '5px'};
  
  button{
    background-color: ${colors.dark};
    border: unset;
    color: ${colors.white};
    font-size: 14px;
    padding: 15px 10px;
    width: 100%;
    cursor: pointer;
    opacity: 0.8;
  }
`;
