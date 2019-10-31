import styled from 'styled-components';
import { colors } from '../../../constants/theme';


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;

  padding: 15px 20px;
  border-bottom-left-radius: 10px;
  background-color: ${colors.dark};

  a {
    color: ${colors.gray};
    text-decoration: none;
  }
  .donate {
    color: ${colors.green};
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
  }
`;
