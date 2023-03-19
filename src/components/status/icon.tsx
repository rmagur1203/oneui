import Image from "next/image";
import styled from "styled-components";

export interface IconProps {
  activated?: boolean;
}

export default function Icon({ activated }: IconProps) {
  const Root = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${activated ? "#3E64F5" : "#BAB0BB"};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Root>
      <Image src="/favorite.svg" alt="icon" width={24} height={24} priority />
    </Root>
  );
}
