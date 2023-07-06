import React, { CSSProperties, FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import { colors } from '../../styles/theme'

interface CardProps extends PropsWithChildren {
    active: boolean
    onClick?: () => void
    style?: CSSProperties
    yearly?: boolean
    // eslint-disable-next-line react/no-unused-prop-types
    isMobile?: boolean
}

const Container = styled.div<CardProps>`
    width: ${({ isMobile }): string => (!isMobile ? '140px' : '100%')};
    height: ${({ yearly }): string => (!yearly ? '160px' : '180px')};
    border: ${({ active }): string =>
        active
            ? `1px solid ${colors.marineBlue}`
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
    const { isMobile } = useDeviceDetect()
    return (
        <Container
            active={active}
            onClick={onClick}
            style={style}
            yearly={yearly}
            isMobile={isMobile}
        >
            {children}
        </Container>
    )
}

export default Card
