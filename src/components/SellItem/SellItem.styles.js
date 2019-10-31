import styled from 'styled-components';

import { colors } from '../../constants/theme';


export const Wrapper = styled.div`
  box-shadow: inset 0 -0.5px 0 0 ${colors.gray}, inset -0.5px 0 0 0 ${colors.gray};
  width: 50%;
  color: ${colors.white};
  cursor: pointer;
  height: 100px;
  text-align: center;
  font-size: 12px;
  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  .icon{
    height: 40%;
    min-width: 30%;
    margin-bottom: 9px;
    max-width: 55%;
  }
`;
