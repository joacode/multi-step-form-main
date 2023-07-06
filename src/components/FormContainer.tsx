import React, { FC } from 'react'
import styled from 'styled-components'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import { MobileProps, SubscriptionType } from 'src/models'
import { FormikValues, useFormikContext } from 'formik'
import Typography from './UI/Typography'
import { colors } from '../styles/theme'
import StepFormProvider from './Steps/StepFormProvider'
import { stepTitleConfig } from '../constants'
import ButtonsContainer from './UI/ButtonsContainer'

interface FormContainerProps {
    activeStep: number
    setActiveStep: (p: number) => void
}

type MobileAndStep = MobileProps & {
    activeStep?: number
    addOnsLength?: number
    subscriptionType?: SubscriptionType
}

const Container = styled.div<MobileAndStep>`
    margin: ${({ isMobile }): string =>
        !isMobile ? '50px 90px 30px 100px' : '35px 25px'};
    max-width: 460px;
    ${({ isMobile, activeStep, addOnsLength, subscriptionType }): string => {
        if (isMobile) {
            if (activeStep === 1) {
                return 'height: 330px;'
            }
            if (activeStep === 2) {
                if (subscriptionType === SubscriptionType.YEARLY) {
                    return 'height: 670px;'
                }
                return 'height: 520px;'
            }
            if (activeStep === 3) {
                return 'height: 400px;'
            }
            if (activeStep === 4) {
                const height = 240 + addOnsLength * 40
                return `height: ${height}px;`
            }
        }
        return 'height: 520px;'
    }}
`

const Form = styled.div<MobileProps>`
    height: 300px;
    margin-top: ${({ isMobile }): string => (!isMobile ? '40px' : '15px')};
`

const FormContainer: FC<FormContainerProps> = ({
    activeStep,
    setActiveStep,
}) => {
    const { values } = useFormikContext()
    const { isMobile } = useDeviceDetect()

    return (
        <Container
            isMobile={isMobile}
            activeStep={activeStep}
            addOnsLength={(values as FormikValues).addOns.length}
            subscriptionType={(values as FormikValues).plan.subscription}
        >
            <Typography
                fontSize="30px"
                fontWeight={700}
                style={{ margin: '0px' }}
            >
                {stepTitleConfig[activeStep].title}
            </Typography>
            <Typography
                color={colors.coolGray}
                style={{
                    margin: '0px',
                    marginTop: '10px',
                }}
            >
                {stepTitleConfig[activeStep].subtitle}
            </Typography>
            <Form isMobile={isMobile}>
                {StepFormProvider({ activeStep, setActiveStep })}
            </Form>
            {!isMobile && (
                <ButtonsContainer
                    activeStep={activeStep}
                    onClickNext={(): void => setActiveStep(activeStep + 1)}
                    onClickPrev={(): void => setActiveStep(activeStep - 1)}
                />
            )}
        </Container>
    )
}

export default FormContainer
