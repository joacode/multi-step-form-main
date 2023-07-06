import React, { FC } from 'react'
import styled from 'styled-components'
import StepContainer from '../Steps/StepContainer'
import { stepContainerConfig } from '../../constants'

const ImgContainer = styled.div`
    // height: 568px;
    // margin: auto 0px auto 16px;
    // padding: 40px 30px;
    // position: relative;
`

const Img = styled.img`
    // margin: -40px -30px;
`

const HeaderImage: FC<{ activeStep: number }> = ({ activeStep }) => {
    return (
        <ImgContainer>
            <div style={{ position: 'fixed' }}>
                {stepContainerConfig.map(config => (
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
    )
}

export default HeaderImage
