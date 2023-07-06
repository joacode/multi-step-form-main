import React, { CSSProperties, FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/theme'

interface CardProps extends PropsWithChildren {
    active: boolean
    onClick?: () => void
    style?: CSSProperties
    yearly?: boolean
}

const Container = styled.div<CardProps>`
    width: 140px;
    height: ${({ yearly }): string => (!yearly ? '160px' : '180px')};
    border: ${({ active }): string =>
        active
            ? `1px solid ${colors.purplishBlue}`
            : `1px solid ${colors.coolGray}`};
    border-radius: 10px;
    padding: 20px 15px;
    display: inline-block;
    background: ${({ active }): string =>
        !active ? colors.white : colors.magnolia};
    cursor: pointer;

    &: hover {
        border: 1px solid ${colors.purplishBlue};
    }
`

const Card: FC<CardProps> = ({ active, onClick, style, children, yearly }) => {
    return (
        <Container
            active={active}
            onClick={onClick}
            style={style}
            yearly={yearly}
        >
            {children}
        </Container>
    )
}

export default Card
