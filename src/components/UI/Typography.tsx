import React, {
    CSSProperties,
    FC,
    PropsWithChildren,
    ReactElement,
} from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/theme'

interface TypographyProps extends PropsWithChildren {
    color?: CSSProperties['color']
    fontSize?: string
    fontWeight?: number
    lineHeight?: string
    style?: CSSProperties
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}
const Container = styled.div<TypographyProps>`
    font-family: 'Ubuntu', sans-serif;
    font-size: ${({ fontSize }): string => fontSize ?? '16px'};
    font-weight: ${({ fontWeight }): string => fontWeight ?? 400};
    line-height: ${({ lineHeight }): string => lineHeight ?? 'initial'};
    color: ${({ color }): string => color ?? colors.marineBlue};
`

const Typography: FC<TypographyProps> = ({
    color,
    fontSize,
    fontWeight,
    lineHeight,
    style,
    children,
    onClick,
    onMouseEnter,
    onMouseLeave,
}): ReactElement => {
    return (
        <Container
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </Container>
    )
}

export default Typography
