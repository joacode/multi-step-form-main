import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'
import Form from './Form'

const Grid = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${colors.magnolia};
`

const Layout = (): ReactElement => {
    return (
        <Grid>
            <Form />
        </Grid>
    )
}

export default Layout
