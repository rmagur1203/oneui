import styled from "styled-components";
import { Bar } from "./bar";
import { Page } from "./page";

export function Status() {
  return (
    <Root>
      <Bar />
      <Page />
    </Root>
  );
}

const Root = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 6px 16px;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
