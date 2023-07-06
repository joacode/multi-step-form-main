import React, { FC, useMemo, useState } from 'react'
import styled from 'styled-components'
import { FormikValues, useFormikContext } from 'formik'
import capitalize from 'lodash/capitalize'
import Typography from '../UI/Typography'
import { colors } from '../../styles/theme'
import { AddOn, SubscriptionType } from '../../models'
import { pricePerSelected } from '../../utils'

interface SummaryProps {
    activeStep: number
    setActiveStep: (activeStep: number) => void
}

const SummaryContainer = styled.div`
    width: 100%;
    height: fit-content;
    background: ${colors.magnolia};
    border-radius: 8px;
    padding: 20px;
`

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Summary: FC<SummaryProps> = ({ activeStep, setActiveStep }) => {
    const { values } = useFormikContext()
    const [isHovering, setIsHovering] = useState(false)

    const totalPrice = useMemo((): number => {
        const plan = (values as FormikValues).plan.price
        const addOns = (values as FormikValues).addOns.reduce(
            (accumulator: number, addOn: AddOn) => {
                return accumulator + addOn.price
            },
            0
        )

        return plan + addOns
    }, [values])

    return (
        <>
            <SummaryContainer>
                <ListContainer
                    style={{
                        borderBottom: `1px solid ${colors.lightGray}`,
                        paddingBottom: '25px',
                    }}
                >
                    <div>
                        <Typography fontWeight={500} color={colors.marineBlue}>
                            {capitalize((values as FormikValues).plan.name)} (
                            {capitalize(
                                (values as FormikValues).plan.subscription
                            )}
                            )
                        </Typography>
                        <Typography
                            style={{
                                cursor: 'pointer',
                                color: !isHovering
                                    ? colors.coolGray
                                    : colors.purplishBlue,
                                borderBottom: !isHovering
                                    ? `1px solid ${colors.coolGray}`
                                    : `1px solid ${colors.purplishBlue}`,
                                width: 'fit-content',
                                marginTop: '5px',
                            }}
                            onClick={() => setActiveStep(2)}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            Change
                        </Typography>
                    </div>
                    <Typography fontWeight={500} color={colors.marineBlue}>
                        {pricePerSelected(
                            (values as FormikValues).plan.subscription,
                            (values as FormikValues).plan.price
                        )}
                    </Typography>
                </ListContainer>
                {(values as FormikValues).addOns.map((addOn: AddOn) => (
                    <ListContainer style={{ marginTop: '20px' }}>
                        <div>
                            <Typography color={colors.coolGray}>
                                {addOn.name}
                            </Typography>
                        </div>
                        <Typography fontWeight={400} color={colors.marineBlue}>
                            +{pricePerSelected(addOn.subscription, addOn.price)}
                        </Typography>
                    </ListContainer>
                ))}
            </SummaryContainer>
            <ListContainer
                style={{
                    marginTop: '30px',
                    marginLeft: '20px',
                    marginRight: '20px',
                }}
            >
                <div>
                    <Typography color={colors.coolGray}>
                        Total (per{' '}
                        {(values as FormikValues).plan.subscription ===
                        SubscriptionType.MONTHLY
                            ? 'month'
                            : 'year'}
                        )
                    </Typography>
                </div>
                <Typography
                    fontSize="18px"
                    fontWeight={700}
                    color={colors.purplishBlue}
                >
                    +
                    {pricePerSelected(
                        (values as FormikValues).plan.subscription,
                        totalPrice
                    )}
                </Typography>
            </ListContainer>
        </>
    )
}

export default Summary
