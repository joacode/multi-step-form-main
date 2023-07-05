import { colors } from '@/styles/theme'
import { Field, FormikErrors, FormikValues, useFormikContext } from 'formik'
import React, { FC } from 'react'
import { Input as RSInput } from 'rsuite'
import styled from 'styled-components'
import Typography from '../UI/Typography'
import { infoConfig } from '@/constants/constants'

const Input = styled(RSInput)`
    &: hover {
        border-color: ${colors.marineBlue};
        border-shadow: none;
    }

    &: focus {
        border-color: ${colors.marineBlue};
        border-shadow: none;
    }
`

const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info: FC = () => {
    const { errors, setFieldValue, validateField, values } = useFormikContext()

    return infoConfig.map((config) => (
        <>
            <LabelContainer>
                <Typography
                    fontWeight={500}
                    lineHeight="30px"
                    style={{
                        marginTop: '36px',
                    }}
                >
                    {config.label}
                </Typography>
                {(errors as FormikErrors<FormikValues>)[config.name] && (
                    <Typography
                        fontWeight={500}
                        lineHeight="30px"
                        style={{
                            marginTop: '36px',
                        }}
                        color={colors.strawberryRed}
                    >
                        {
                            (errors as FormikErrors<FormikValues>)[
                                config.name
                            ] as string
                        }
                    </Typography>
                )}
            </LabelContainer>
            <Field
                defaultValue={(values as FormikValues)[config.name]}
                type={config.type}
                name={config.name}
                placeholder={config.placeholder}
                component={Input}
                onChange={(value: FormikValues) => {
                    setFieldValue(config.name, value)
                    validateField(config.name)
                }}
            />
        </>
    ))
}

export default Info
