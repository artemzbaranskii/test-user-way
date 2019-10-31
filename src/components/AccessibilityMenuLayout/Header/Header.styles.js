import styled from 'styled-components';
import { colors } from '../../../constants/theme';


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  padding: 25px 20px;
  border-top-left-radius: 10px;
  
  background-color: ${colors.blue};
  color: ${colors.white};
`;
