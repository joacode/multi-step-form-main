import React, { ReactElement } from 'react'
import styled from 'styled-components'
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

const Greetings = (): ReactElement => {
    return (
        <Background>
            <Container>
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
                    color={colors.coolGray}
                    style={{
                        width: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center',
                    }}
                >
                    Thanks for confirming your subscription! We hope you have
                    <br />
                    fun using our platform. If you ever need support, please
                    feel
                    <br />
                    free to email us at support@loremgaming.com
                </Typography>
            </Container>
        </Background>
    )
}

export default Greetings
