import { Field, FormikErrors, FormikValues, useFormikContext } from 'formik'
import React, { ReactElement } from 'react'
import { Input as RSInput } from 'rsuite'
import styled from 'styled-components'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import { colors } from '../../styles/theme'
import Typography from '../UI/Typography'
import { infoConfig } from '../../constants'

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

const Info = (): ReactElement => {
    const { errors, setFieldValue, validateField, values } = useFormikContext()
    const { isMobile } = useDeviceDetect()

    return (
        <>
            {infoConfig.map(config => (
                <div
                    style={{
                        marginBottom: !isMobile ? '25px' : '15px',
                    }}
                    key={`${config.label}-${config.type}`}
                >
                    <LabelContainer>
                        <Typography fontWeight={500} lineHeight="30px">
                            {config.label}
                        </Typography>
                        {(errors as FormikErrors<FormikValues>)[
                            config.name
                        ] && (
                            <Typography
                                fontWeight={500}
                                lineHeight="30px"
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
                        onChange={(value: FormikValues): void => {
                            setFieldValue(config.name, value)
                            validateField(config.name)
                        }}
                    />
                </div>
            ))}
        </>
    )
}

export default Info
