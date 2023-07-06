import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import { colors } from 'src/styles/theme'
import { useFormikContext } from 'formik'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import { MobileProps } from 'src/models'
import Button from './Button'
import Typography from './Typography'

interface ButtonsContainer {
    activeStep: number
    onClickNext: () => void
    onClickPrev: () => void
}

const Container = styled.div<MobileProps>`
    display: flex;
    justify-content: space-between;
    margin-top: 67px;
    width: 100%;

    ${({ isMobile }): string =>
        isMobile
            ? `
    background: ${colors.white};
    position: fixed;
    bottom: 0px;
    right: 0px;
    height: 70px;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    z-index: 1;
    `
            : ''}
`

const ButtonsContainer: FC<ButtonsContainer> = ({
    activeStep,
    onClickNext,
    onClickPrev,
}): ReactElement => {
    const { errors, isValid, dirty } = useFormikContext()
    const { isMobile } = useDeviceDetect()

    return (
        <Container isMobile={isMobile}>
            {activeStep > 1 && (
                <Button onClick={onClickPrev} variant="subtle">
                    <Typography color={colors.marineBlue} fontWeight={500}>
                        Go Back
                    </Typography>
                </Button>
            )}
            <Button
                disabled={dirty ? !isValid && dirty && !isEmpty(errors) : true}
                onClick={onClickNext}
                variant="primary"
                style={{ marginLeft: 'auto' }}
            >
                <Typography color={colors.white} fontWeight={500}>
                    {activeStep !== 4 ? 'Next Step' : 'Confirm'}
                </Typography>
            </Button>
        </Container>
    )
}

export default ButtonsContainer
