import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import Typography from '../UI/Typography'
import Icon from '../UI/Icon'
import { colors } from '../../styles/theme'

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div``

const defaultText = (): ReactElement => (
    <p>
        Thanks for confirming your subscription! We hope you have
        <br />
        fun using our platform. If you ever need support, please feel
        <br />
        free to email us at support@loremgaming.com
    </p>
)

const mobileText = (): ReactElement => (
    <p>
        Thanks for confirming your subscription!
        <br />
        We hope you have fun using our
        <br />
        platform. If you ever need support,
        <br />
        please feel to email us at
        <br />
        support@loremgaming.com
    </p>
)

const Greetings = (): ReactElement => {
    const { isMobile } = useDeviceDetect()
    return (
        <Background>
            <Container style={isMobile && { margin: '80px 25px' }}>
                <Icon
                    icon="thank-you"
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '40px',
                        display: 'block',
                    }}
                />
                <Typography
                    fontSize="25px"
                    fontWeight={700}
                    style={{
                        width: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '20px',
                    }}
                >
                    Thank you!
                </Typography>
                <Typography
                    lineHeight="1.3"
                    color={colors.coolGray}
                    style={{
                        width: 'max-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center',
                    }}
                >
                    {!isMobile ? defaultText() : mobileText()}
                </Typography>
            </Container>
        </Background>
    )
}

export default Greetings
