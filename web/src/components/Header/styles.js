import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #ffff;
  padding: 0 30px;
  border-bottom: 1px solid #eee9e9;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 135px;
      height: 26px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #999999;
    }

    a {
      font-weight: bold;
      font-size: 15px;
      color: #999999;
      transition: color 0.3s;

      &:hover {
        color: #444444;
      }
    }

    > a {
      margin-right: 15px;
    }
  }

  aside {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 14px;
      color: #666666;
      margin-bottom: 5px;
    }

    button {
      border: none;
      font-size: 14px;
      background: #ffff;
      color: #de3838;

      transition: background 0.3s;

      &:hover {
        color: ${darken(0.07, '#de3838')};
      }
    }
  }
`;
