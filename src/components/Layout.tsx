import { colors } from '@/styles/theme'
import React from 'react'
import styled from 'styled-components'
import Form from './Form'

const Grid = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${colors.magnolia};
`

const Layout = () => {
    return (
        <Grid>
            <Form />
        </Grid>
    )
}

export default Layout
