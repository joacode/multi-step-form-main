/* eslint-disable no-empty-pattern */
import React, { ReactElement, useState } from 'react'
import { Grid as RSGrid } from 'rsuite'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormContainer from './FormContainer'
import { colors } from '../styles/theme'
import StepContainer from './Steps/StepContainer'
import { stepContainerConfig } from '../constants'
import { SubscriptionType } from '../models'
import Greetings from './Steps/Greetings'
import { useDeviceDetect } from '../hooks/useDeviceDetect'
import HeaderImage from './UI/HeaderImage'
import ButtonsContainer from './UI/ButtonsContainer'

const Container = styled(RSGrid)<{ isMobile?: boolean }>`
    max-width: 940px;
    max-height: 600px;
    margin: auto;
    margin-top: 10%;
    border-radius: 20px;
    display: flex;
    background: ${colors.white};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (max-width: 576px) {
        z-index: 1;
        display: block;
        margin-left: 15px;
        margin-right: 15px;
        margin-top: -155px;
        position: inherit;
        height: auto;
    }
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
    email: Yup.string()
        .email()
        .required('This field is required.'),
    phone: Yup.number().required('This field is required.'),
})

const Form = (): ReactElement => {
    const [activeStep, setActiveStep] = useState(1)
    const { isMobile } = useDeviceDetect()

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(): void => {
                    setActiveStep(activeStep + 1)
                }}
            >
                {({}): JSX.Element => (
                    <>
                        {isMobile && <HeaderImage activeStep={activeStep} />}
                        <Container isMobile={isMobile}>
                            {!isMobile && (
                                <ImgContainer>
                                    <div style={{ position: 'fixed' }}>
                                        {stepContainerConfig.map(config => (
                                            <StepContainer
                                                stepNumber={config.stepNumber}
                                                label={config.label}
                                                activeStep={
                                                    activeStep < 4
                                                        ? activeStep
                                                        : 4
                                                }
                                                key={`${config.label}-${config.stepNumber}`}
                                            />
                                        ))}
                                    </div>
                                    <Img src="/assets/images/bg-sidebar-desktop.svg" />{' '}
                                </ImgContainer>
                            )}
                            {activeStep < 5 ? (
                                <FormContainer
                                    activeStep={activeStep}
                                    setActiveStep={setActiveStep}
                                />
                            ) : (
                                <Greetings />
                            )}
                        </Container>
                        {isMobile && activeStep < 5 && (
                            <ButtonsContainer
                                activeStep={activeStep}
                                onClickNext={(): void =>
                                    setActiveStep(activeStep + 1)
                                }
                                onClickPrev={(): void =>
                                    setActiveStep(activeStep - 1)
                                }
                            />
                        )}
                    </>
                )}
            </Formik>
        </>
    )
}

export default Form

// eslint-disable-next-line no-lone-blocks
{
    /* <Formik
initialValues={initialValues}
validationSchema={ValidationSchema}
validateOnChange={false}
validateOnBlur={false}
onSubmit={() => {
    setActiveStep(activeStep + 1)
}}
>
{({}) => (
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
        {activeStep < 5 ? (
            <FormContainer
                activeStep={activeStep}
                setActiveStep={setActiveStep}
            />
        ) : (
            <Greetings />
        )}
    </Container>
)}
</Formik> */
}
