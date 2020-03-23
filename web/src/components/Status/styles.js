import styled from 'styled-components';

export const ContainerDelivered = styled.div`
  width: 100px;
  height: 25;
  border-radius: 12px;
  background: #dff0df;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;

  span {
    font-size: 14px;
    font-weight: bold;
    color: #2ca42b;
  }
`;

export const ContainerPending = styled.div`
  width: 100px;
  height: 25;
  border-radius: 12px;
  background: #f0f0df;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;

  span {
    font-size: 14px;
    font-weight: bold;
    color: #c1bc35;
  }
`;

export const ContainerStarted = styled.div`
  width: 100px;
  height: 25;
  border-radius: 12px;
  background: #bad2ff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;

  span {
    font-size: 14px;
    font-weight: bold;
    color: #4d85ee;
  }
`;

export const ContainerCanceled = styled.div`
  width: 100px;
  height: 25;
  border-radius: 12px;
  background: #fab0b0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;

  span {
    font-size: 14px;
    font-weight: bold;
    color: #de3b3b;
  }
`;
