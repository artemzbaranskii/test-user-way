import styled from 'styled-components';

import { colors } from '../../../constants/theme';

export const Wrapper = styled.div`
	height: calc(100vh - 282px);
  background-color: ${colors.darkBlue};
  padding: 20px 20px 12px;
  position: relative;
  
  .logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 8px;
    padding: 15px 0;
    width: 90%;
    
    span{
      svg{
        height: 25px;
        width: 25px;
        padding-left: 30px;
      }
    }
  }
`;
