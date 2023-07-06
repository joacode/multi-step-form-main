import React, {
    CSSProperties,
    FC,
    PropsWithChildren,
    ReactElement,
} from 'react'
import styled from 'styled-components'
import { Button as RSButton } from 'rsuite'
import { theme } from '../../styles/theme'

interface ButtonProps extends PropsWithChildren {
    variant: 'primary' | 'subtle'
    disabled?: boolean
    onClick: () => void
    style?: CSSProperties
}

const Container = styled(RSButton)<ButtonProps>`
    display: block;
    width: 125px;
    height: 50px;
    background: ${({ variant }): string =>
        theme.button.variant[variant].background};
    color: ${({ variant }): string => theme.button.variant[variant].color};
    cursor: pointer;

    &:hover {
        background: ${({ variant }): string =>
            theme.button.variant[variant].hover};
    }

    &:focus {
        background: ${({ variant }): string =>
            theme.button.variant[variant].hover};
    }

    &:active {
        background: ${({ variant }): string =>
            theme.button.variant[variant].hover};
    }

    &:disabled {
        background: ${({ variant }): string =>
            theme.button.variant[variant].background};
    }
`

const Button: FC<ButtonProps> = ({
    variant,
    disabled = false,
    onClick,
    style,
    children,
}): ReactElement => {
    return (
        <Container
            variant={variant ?? 'primary'}
            disabled={disabled}
            onClick={onClick}
            style={style}
        >
            {children}
        </Container>
    )
}

export default Button
