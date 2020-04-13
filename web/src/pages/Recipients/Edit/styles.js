import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;

  margin: 50px auto;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 100px;
    align-self: center;
    color: #f5f5f5;
  }
  h2 {
    margin-top: 100px;
    align-self: center;
    color: #f5f5f5;
    font-size: 32px;
  }

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

export const FormRecipientEdit = styled.div`
  height: 300px;
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

  .name {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
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

  .adressOne {
    display: flex;

    input {
      width: 100%;
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

    #street {
      width: 55%;
    }

    #number {
      width: 15%;
      margin-left: 2%;
    }

    #complement {
      width: 27%;
      margin-left: 2%;
    }
  }

  .adressTwo {
    display: flex;

    input {
      width: 100%;
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

    #city {
      width: 32%;
    }

    #country {
      width: 32%;
      margin-left: 2%;
    }

    #zipcode {
      width: 32%;
      margin-left: 2%;
    }
  }
`;
