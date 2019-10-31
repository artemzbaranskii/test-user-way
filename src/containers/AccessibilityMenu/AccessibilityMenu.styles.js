import styled from 'styled-components';

import { colors } from '../../constants/theme';


export const Wrapper = styled.div`
  max-width: 345px;
  width: 100%;
  margin-left:auto;
  margin-right:0;

  .userway-menu-app{
    box-shadow: inset 0 0.5px 0 0 ${colors.gray}, inset 0.5px 0 0 0 ${colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .btn-holder{
    display: flex;
    padding-top: 15px;
  }
`;
