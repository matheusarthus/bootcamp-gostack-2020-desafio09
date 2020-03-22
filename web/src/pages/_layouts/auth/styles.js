import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  max-height: 460px;
  text-align: center;
  background: #fff;
  padding: 50px 50px;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 14px;
        margin-bottom: 10px;
      }

      input {
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #dddddd;
        border-radius: 4px;
        opacity: 1;
        width: 100%;
        height: 45px;
        padding: 0 15px;
        margin: 0 0 20px;

        &::placeholder {
        }
      }
    }

    button {
      margin: 5px 0 0;
      height: 45px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.05, '#7d40e7')};
      }
    }
  }
`;
