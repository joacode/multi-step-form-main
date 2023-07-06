import React, { FC } from 'react'
import styled from 'styled-components'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import { colors } from '../../styles/theme'
import Typography from '../UI/Typography'

interface StepContainerProps {
    stepNumber: number
    label: string
    activeStep: number
}

const Container = styled.div`
    display: flex;
    color: ${colors.white};
    margin-bottom: 30px;
`

const DescriptionContainer = styled.div`
    display: grid;
    margin-left: 15px;
`

const StepNumber = styled.div<{ isActive: boolean }>`
    border: 1px solid ${colors.white};
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    background: ${({ isActive }): string =>
        isActive ? colors.lightBlue : 'transparent'};
    color: ${({ isActive }): string =>
        isActive ? colors.marineBlue : colors.white};
`

const StepContainer: FC<StepContainerProps> = ({
    stepNumber,
    label,
    activeStep,
}) => {
    const { isMobile } = useDeviceDetect()
    return (
        <Container>
            <StepNumber isActive={stepNumber === activeStep}>
                {stepNumber}
            </StepNumber>
            {!isMobile && (
                <DescriptionContainer>
                    <Typography fontSize="14px" color={colors.coolGray}>
                        STEP {stepNumber}
                    </Typography>
                    <Typography
                        fontSize="15px"
                        fontWeight={700}
                        color={colors.white}
                        style={{ letterSpacing: '1px' }}
                    >
                        {label}
                    </Typography>
                </DescriptionContainer>
            )}
        </Container>
    )
}

export default StepContainer
