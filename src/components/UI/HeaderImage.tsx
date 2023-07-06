import React, { FC } from 'react'
import styled from 'styled-components'
import { colors } from 'src/styles/theme'
import StepContainer from '../Steps/StepContainer'
import { stepContainerConfig } from '../../constants'

const ImgContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 30px 100px 0 100px;
    margin-left: auto;
`

const Img = styled.img`
    width: 100%;
    margin-top: -525px;
`
const Background = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background: ${colors.magnolia};
    z-index: 0;
    margin-top: -70px;
`

const HeaderImage: FC<{ activeStep: number }> = ({ activeStep }) => {
    return (
        <>
            <ImgContainer>
                {stepContainerConfig.map(config => (
                    <StepContainer
                        stepNumber={config.stepNumber}
                        label={config.label}
                        activeStep={activeStep < 4 ? activeStep : 4}
                        key={`${config.label}-${config.stepNumber}`}
                    />
                ))}
            </ImgContainer>
            <Img src="/assets/images/bg-sidebar-desktop.svg" />
            <Background />
        </>
    )
}

export default HeaderImage
