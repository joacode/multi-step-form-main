import React, { ReactElement, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { Grid, Toggle } from 'rsuite'
import { FormikValues, useFormikContext } from 'formik'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import { colors } from '../../styles/theme'
import Icon from '../UI/Icon'
import Typography from '../UI/Typography'
import { planConfig } from '../../constants'
import Card from '../UI/Card'
import { SubscriptionType } from '../../models'
import { pricePerSelected } from '../../utils'

const ToggleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    max-height: fit-content;
    background: ${colors.magnolia};
    margin-bottom: 133px;
    border-radius: 10%;
`

const Plan = (): ReactElement => {
    const { setFieldValue, values } = useFormikContext()
    const { isMobile } = useDeviceDetect()

    const handleToggleChange = useCallback(
        (checked: boolean) => {
            const { plan } = values as FormikValues
            if (checked) {
                if (plan.subscription === SubscriptionType.MONTHLY) {
                    setFieldValue('plan', {
                        name: plan.name,
                        price: plan.price * 10,
                        subscription: SubscriptionType.YEARLY,
                    })
                } else {
                    setFieldValue('plan', {
                        name: plan.name,
                        price: plan.price,
                        subscription: SubscriptionType.YEARLY,
                    })
                }
            } else if (plan.subscription === SubscriptionType.YEARLY) {
                setFieldValue('plan', {
                    name: plan.name,
                    price: plan.price / 10,
                    subscription: SubscriptionType.MONTHLY,
                })
            } else {
                setFieldValue('plan', {
                    name: plan.name,
                    price: plan.price,
                    subscription: SubscriptionType.MONTHLY,
                })
            }
        },
        [values]
    )

    const yearly = useMemo(
        () =>
            (values as FormikValues).plan.subscription ===
            SubscriptionType.YEARLY,
        [values]
    )

    const handleChangeCard = (name: string, price: number): void => {
        setFieldValue('plan', {
            name,
            price: yearly ? price * 10 : price,
            subscription: yearly
                ? SubscriptionType.YEARLY
                : SubscriptionType.MONTHLY,
        })
    }

    return (
        <>
            <Grid
                fluid
                style={{
                    padding: 0,
                    marginTop: '36px',
                    marginBottom: !isMobile ? '30px' : '8px',
                    width: !isMobile ? 'max-content' : '100%',
                }}
            >
                {planConfig.map(config => (
                    <Card
                        style={
                            !isMobile
                                ? { margin: config.margin }
                                : {
                                      margin: 'auto',
                                      marginBottom: '15px',
                                      display: 'flex',
                                      height: 'min-content',
                                  }
                        }
                        onClick={(): void =>
                            handleChangeCard(config.name, config.price)
                        }
                        active={
                            config.name === (values as FormikValues)?.plan.name
                        }
                        key={`${config.name}-${config.price}`}
                        yearly={yearly}
                    >
                        <Icon icon={config.icon} style={{}} />
                        <div
                            style={
                                isMobile
                                    ? {
                                          width: 'min-content',
                                          height: 'min-content',
                                          marginLeft: '8px',
                                      }
                                    : {}
                            }
                        >
                            <Typography
                                fontWeight={500}
                                style={{
                                    marginTop: !isMobile ? '42px' : 'auto',
                                    marginBottom: '5px',
                                }}
                            >
                                {config.label}
                            </Typography>
                            <Typography fontSize="14px" color={colors.coolGray}>
                                {pricePerSelected(
                                    (values as FormikValues).plan.subscription,
                                    yearly ? config.price * 10 : config.price
                                )}
                            </Typography>
                            {yearly && (
                                <Typography
                                    fontSize="12px"
                                    color={colors.marineBlue}
                                    style={{
                                        marginTop: '5px',
                                        width: 'max-content',
                                    }}
                                >
                                    2 months free
                                </Typography>
                            )}
                        </div>
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
                        (values as FormikValues)?.plan.subscription ===
                        SubscriptionType.YEARLY
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
