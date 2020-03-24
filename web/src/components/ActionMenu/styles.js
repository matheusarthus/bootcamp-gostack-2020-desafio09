import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;

  button {
    background: none;
    border: 0;
  }

  button.badge {
    margin-left: calc(50% - 6px);
  }
`;

export const MoreOptions = styled.div`
  position: absolute;
  background: #fff;
  z-index: 1;
  padding: 15px 10px;
  border-radius: 4px;
  width: 150px;
  white-space: nowrap;
  margin-top: 5px;
  top: 20px;
  left: calc(50% - 75px);
  border: 0.5px solid rgba(4, 4, 4);

  display: ${(props) => (props.visible ? 'flex' : 'none')} !important;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 4px);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #444;
  }

  div {
    width: 100%;

    & + div {
      border-top: 1px solid #eee;
      margin-top: 5px;
      padding-top: 5px;
    }

    button,
    a {
      border: 0;
      background: none;
      color: #999;
      font-size: 16px;

      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
