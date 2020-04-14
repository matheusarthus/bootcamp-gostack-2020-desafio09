import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;

  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    strong {
      font-size: 24px;
    }
  }

  ul {
    margin-top: 10px;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 30px;

  form {
    display: flex;
    align-items: center;
    width: 237px;
    height: 36px;
    background: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #dddddd;

    input {
      margin-left: 10px;
      width: 100%;
      border: none;

      &::placeholder {
        font-size: 14px;
        color: #999999;
      }
    }
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 142px;
    height: 36px;
    border: none;
    border-radius: 4px;
    padding: 5px 15px;
    background: #7d40e7;
    transition: background 0.3s;

    span {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    &:hover {
      background: ${darken(0.03, '#7d40e7')};
    }
  }
`;

export const OrderTable = styled.table`
  width: 100%;
  margin-top: 30px;
  border-collapse: collapse;
  border-collapse: separate !important;
  border-spacing: 0 20px !important;

  thead th {
    text-align: left;
    color: #444;
    font-size: 16px;
    padding: 6px 15px 0;

    &:last-child {
      text-align: center;
    }
  }

  tbody td {
    background: #fff;
    height: 57px;
    padding: 6px 15px;
    color: #666;
    font-size: 16px;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      text-align: right;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: none;
    border: none;
  }

  #left {
    display: ${(props) => (props.page <= 1 ? 'none' : 'flex')};
  }

  #right {
    display: ${(props) => (props.deliverymen < 10 ? 'none' : 'flex')};
  }

  span {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
