import { colors } from "@/styles/theme";
import React, { CSSProperties, PropsWithChildren } from "react";
import styled from "styled-components";

interface TypographyProps extends PropsWithChildren {
  color?: CSSProperties["color"];
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  style?: CSSProperties;
}
const Container = styled.div<TypographyProps>`
  font-family: "Ubuntu", sans-serif;
  font-size: ${({ fontSize }) => fontSize ?? "16px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? 400};
  line-height: ${({ lineHeight }) => lineHeight ?? "initial"};
  color: ${({ color }) => color ?? colors.marineBlue};
`;

const Typography = ({
  color,
  fontSize,
  fontWeight,
  lineHeight,
  style,
  children,
}: TypographyProps) => {
  return (
    <Container
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      style={style}
    >
      {children}
    </Container>
  );
};

export default Typography;
