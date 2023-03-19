import styled from "styled-components";
import Icon from "./icon";

export function Page() {
  return (
    <Root>
      <Settings>
        <Column>
          <Row>
            <Date>3월 19일 (일)</Date>
          </Row>
          <Icons>
            <Icon activated />
            <Icon activated />
            <Icon activated />
            <Icon />
            <Icon />
            <Icon />
          </Icons>
        </Column>
      </Settings>
      <Notifications>
        <Group title="대화">
          <Notification />
          <Notification />
        </Group>
        <Group title="소리 알림">
          <Notification />
          <Notification />
        </Group>
        <Group title="무음 알림">
          <Notification />
          <Notification />
        </Group>
      </Notifications>
    </Root>
  );
}

const Root = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Icons = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

const Settings = styled.div`
  width: 100%;
  padding: 0 16px;
`;

const Notifications = styled.div``;

export interface GroupProps {
  title: string;
  children?: React.ReactNode;
}

export function Group(props: GroupProps) {
  const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    border-radius: 16px;
    overflow: hidden;
  `;

  const Title = styled.p`
    font-size: 14px;
    padding: 6px 16px;
  `;

  return (
    <>
      <Title>{props.title}</Title>
      <Group>{props.children}</Group>
    </>
  );
}

const Notification = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f3f2f7;
`;

const Date = styled.div`
  font-size: 20px;
`;

const QuickActions = styled.div``;
