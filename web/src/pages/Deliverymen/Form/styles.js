import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;

  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 20px;

    strong {
      font-size: 24px;
    }

    div {
      display: flex;
    }

    button {
      width: 112px;
      height: 36px;
      border-radius: 4px;
      border: none;
      font-size: 14px;
      color: #fff;
      background: #ccc;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 20px 5px 20px;

      & + button {
        margin-left: 20px;
        background: #7d40e7;
      }
    }
  }
`;

export const FormDeliverymanEdit = styled.div`
  height: 400px;
  background: #fff;
  border-radius: 4px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 14px;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;

    input {
      height: 45px;
      margin-top: 5px;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 15px;
      margin-bottom: 10px;

      ::placeholder {
        font-size: 14px;
      }
    }
  }
`;
