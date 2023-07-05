import { colors } from '@/styles/theme'
import { useFormikContext } from 'formik'
import React, { FC } from 'react'
import styled from 'styled-components'
import Typography from './UI/Typography'
import isEmpty from 'lodash/isEmpty'
import Button from './UI/Button'
import StepFormProvider from './Steps/StepFormProvider'
import { stepTitleConfig } from '@/constants/constants'

interface FormContainerProps {
    activeStep: number
    setActiveStep: (p: number) => void
}

const Container = styled.div`
    margin: 50px 90px 30px 100px;
    width: 460px;
    height: 520px;
`

const Form = styled.div`
    height: 300px;
    margin-top: 40px;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 67px;
    width: 100%;
`

const FormContainer: FC<FormContainerProps> = ({
    activeStep,
    setActiveStep,
}) => {
    const { errors, isValid, dirty } = useFormikContext()

    return (
        <Container>
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
            <Form>{StepFormProvider({ activeStep, setActiveStep })}</Form>
            <ButtonsContainer>
                {activeStep > 1 && (
                    <Button
                        onClick={() => setActiveStep(activeStep - 1)}
                        variant="subtle"
                    >
                        <Typography color={colors.marineBlue} fontWeight={500}>
                            Go Back
                        </Typography>
                    </Button>
                )}
                <Button
                    disabled={
                        dirty ? !isValid && dirty && !isEmpty(errors) : true
                    }
                    onClick={() => setActiveStep(activeStep + 1)}
                    variant="primary"
                    style={{ marginLeft: 'auto' }}
                >
                    <Typography color={colors.white} fontWeight={500}>
                        {activeStep !== 4 ? 'Next Step' : 'Confirm'}
                    </Typography>
                </Button>
            </ButtonsContainer>
        </Container>
    )
}

export default FormContainer
