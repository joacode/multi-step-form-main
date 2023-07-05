import React, { CSSProperties, useCallback, useState } from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/theme'
import Icon from '../UI/Icon'
import Typography from '../UI/Typography'
import { Grid, Toggle } from 'rsuite'
import { IconType } from '@/models/models'
import { FormikValues, useFormikContext } from 'formik'

interface PlanConfig {
    label: string
    price: string
    icon: IconType
    name: 'arcade' | 'advanced' | 'pro'
    margin: CSSProperties['margin']
}

const planConfig: PlanConfig[] = [
    {
        label: 'Arcade',
        price: '$9/mo',
        icon: 'arcade',
        name: 'arcade',
        margin: '0px 10px 0px 0px',
    },
    {
        label: 'Advanced',
        price: '$12/mo',
        icon: 'advanced',
        name: 'advanced',
        margin: '0px 10px 0px 10px',
    },
    {
        label: 'Pro',
        price: '$15/mo',
        icon: 'pro',
        name: 'pro',
        margin: '0px 0px 0px 10px',
    },
]

const Card = styled.div<{ active: boolean }>`
    width: 140px;
    height: 160px;
    border: 1px solid ${colors.purplishBlue};
    border-radius: 10px;
    padding: 20px 15px;
    display: inline-block;
    background: ${({ active }) => (!active ? colors.white : colors.magnolia)};

    &: hover {
        background: ${colors.magnolia};
    }
`

const ToggleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    background: ${colors.magnolia};
    margin-bottom: 133px;
`

const Plan = () => {
    const { setFieldValue, values } = useFormikContext()

    const handleToggleChange = useCallback(
        (checked: boolean) => {
            if (checked) {
                setFieldValue('subscriptionType', 'yearly')
            } else {
                setFieldValue('subscriptionType', 'monthly')
            }
        },
        [values]
    )

    return (
        <>
            <Grid
                fluid
                style={{ padding: 0, marginTop: '36px', marginBottom: '30px' }}
            >
                {planConfig.map((config) => (
                    <Card
                        style={{ margin: config.margin, cursor: 'pointer' }}
                        onClick={() => setFieldValue('plan', config.name)}
                        active={config.name === (values as FormikValues)?.plan}
                    >
                        <Icon icon={config.icon} />
                        <Typography
                            fontWeight={500}
                            style={{ marginTop: '42px' }}
                        >
                            {config.label}
                        </Typography>
                        <Typography fontSize="14px" color={colors.coolGray}>
                            {config.price}
                        </Typography>
                    </Card>
                ))}
            </Grid>
            <ToggleContainer>
                <Typography
                    fontSize="14px"
                    fontWeight={500}
                    style={{ marginRight: '20px' }}
                >
                    Monthly
                </Typography>
                <Toggle
                    defaultChecked={
                        (values as FormikValues)?.subscriptionType === 'yearly'
                    }
                    onChange={handleToggleChange}
                />
                <Typography
                    fontSize="14px"
                    fontWeight={500}
                    style={{ marginLeft: '20px' }}
                >
                    Yearly
                </Typography>
            </ToggleContainer>
        </>
    )
}

export default Plan
