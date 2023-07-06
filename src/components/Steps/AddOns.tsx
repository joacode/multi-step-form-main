import React, { ReactElement, useCallback, useEffect } from 'react'
import { Checkbox } from 'rsuite'
import styled from 'styled-components'
import { FormikValues, useFormikContext } from 'formik'
import Card from '../UI/Card'
import Typography from '../UI/Typography'
import { colors } from '../../styles/theme'
import { AddOn, AddOnsConfig, SubscriptionType } from '../../models'
import { addOnsConfig } from '../../constants'
import { pricePerSelected } from '../../utils'

const Container = styled.div`
    display: flex;    
    justify-content: space-between;
    align-items: center;
}
`

const AddOns = (): ReactElement => {
    const { values, setFieldValue } = useFormikContext()

    const price = (config: AddOnsConfig | AddOn): number =>
        (values as FormikValues).plan.subscription === SubscriptionType.MONTHLY
            ? config.price
            : config.price * 10

    const handleClickCard = useCallback(
        (addOn: AddOn) => {
            let { addOns } = values as FormikValues

            if (
                (values as FormikValues).addOns.find(
                    (a: AddOn) => a.name === addOn.name
                ) !== undefined
            ) {
                addOns = addOns.filter(a => a.name !== addOn.name)
            } else {
                addOns.push(addOn)
            }

            setFieldValue('addOns', addOns)
        },
        [values]
    )

    useEffect(() => {
        const areAllValuesSamePlan = (values as FormikValues).addOns.every(
            (addOn: AddOn) =>
                addOn.subscription ===
                (values as FormikValues).plan.subscription
        )

        if (!areAllValuesSamePlan) {
            const selectedPlan = (values as FormikValues).plan.subscription

            const newAddOns = (values as FormikValues).addOns.map(
                (addOn: AddOn): AddOn => {
                    const finalPrice =
                        addOnsConfig.find(
                            (a: AddOnsConfig) => a.name === addOn.name
                        ) ?? addOnsConfig[0]

                    return {
                        name: addOn.name,
                        subscription: selectedPlan,
                        price: price(finalPrice),
                    }
                }
            )

            setFieldValue('addOns', newAddOns)
        }
    }, [])

    return (
        <div style={{ marginTop: '30px' }}>
            {addOnsConfig.map(config => (
                <Card
                    active={(values as FormikValues).addOns.includes(
                        config.name
                    )}
                    style={{
                        width: '450px',
                        height: '80px',
                        marginTop: '10px',
                        marginBottom: '10px',
                    }}
                    onClick={(): void =>
                        handleClickCard({
                            name: config.name,
                            price: price(config),
                            subscription: (values as FormikValues).plan
                                .subscription,
                        })
                    }
                    key={`${config.name}-${config.subtitle}`}
                >
                    <Container>
                        <div style={{ display: 'flex' }}>
                            <Checkbox
                                inline
                                checked={(values as FormikValues).addOns.find(
                                    (a: AddOn) => a.name === config.name
                                )}
                            />
                            <div>
                                <Typography fontWeight={700}>
                                    {config.title}
                                </Typography>
                                <Typography color={colors.coolGray}>
                                    {config.subtitle}
                                </Typography>
                            </div>
                        </div>
                        <Typography
                            fontWeight={500}
                            color={colors.purplishBlue}
                        >
                            {pricePerSelected(
                                (values as FormikValues).plan.subscription,
                                price(config)
                            )}
                        </Typography>
                    </Container>
                </Card>
            ))}
        </div>
    )
}

export default AddOns
