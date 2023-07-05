import { colors } from '@/styles/theme'
import React, { useState } from 'react'
import { Grid as RSGrid } from 'rsuite'
import styled from 'styled-components'
import FormContainer from './FormContainer'
import { Formik } from 'formik'
import * as Yup from 'yup'
import StepContainer from './Steps/StepContainer'
import { stepContainerConfig } from '@/constants/constants'
import { SubscriptionType } from '@/models/models'
import Greetings from './Steps/Greetings'

const Container = styled(RSGrid)`
    width: 940px;
    height: 600px;
    margin: auto;
    margin-top: 10%;
    border-radius: 20px;
    display: flex;
    background: ${colors.white};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const ImgContainer = styled.div`
    height: 568px;
    margin: auto 0px auto 16px;
    padding: 40px 30px;
    position: relative;
`

const Img = styled.img`
    margin: -40px -30px;
`

const initialValues = {
    name: undefined,
    email: undefined,
    phone: undefined,
    plan: { name: 'arcade', price: 9, subscription: SubscriptionType.MONTHLY },
    addOns: [],
}

const ValidationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required.'),
    email: Yup.string().email().required('This field is required.'),
    phone: Yup.number().required('This field is required.'),
})

const Form = () => {
    const [activeStep, setActiveStep] = useState(1)

    return (
        <Container>
            <ImgContainer>
                <div style={{ position: 'fixed' }}>
                    {stepContainerConfig.map((config) => (
                        <StepContainer
                            stepNumber={config.stepNumber}
                            label={config.label}
                            activeStep={activeStep < 4 ? activeStep : 4}
                            key={`${config.label}-${config.stepNumber}`}
                        />
                    ))}
                </div>
                <Img src="/assets/images/bg-sidebar-desktop.svg" />{' '}
            </ImgContainer>
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={() => {
                    setActiveStep(activeStep + 1)
                }}
            >
                {({ handleSubmit }) =>
                    activeStep < 5 ? (
                        <form onSubmit={handleSubmit}>
                            <FormContainer
                                activeStep={activeStep}
                                setActiveStep={setActiveStep}
                            />
                        </form>
                    ) : (
                        <Greetings />
                    )
                }
            </Formik>
        </Container>
    )
}

export default Form
