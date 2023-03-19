import styled from "styled-components";
import { Page } from "./page";

export function Bar() {
  return (
    <Root>
      <LeftItems>
        <Item>12:00</Item>
      </LeftItems>
      <RightItems>
        <Item>12:00</Item>
      </RightItems>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const LeftItems = styled.div``;

const RightItems = styled.div``;

const Item = styled.div`
  flex: 1;
`;
