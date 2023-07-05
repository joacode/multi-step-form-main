import React, { FC } from 'react'
import Info from './Info'
import Plan from './Plan'
import { FormComponents } from '@/models/models'
import AddOns from './AddOns'
import Summary from './Summary'

interface StepFormProviderProps {
    activeStep: number
    setActiveStep: (activeStep: number) => void
}

const StepFormProvider: FC<StepFormProviderProps> = ({
    activeStep,
    setActiveStep,
}) => {
    const Form: FormComponents = {
        1: {
            component: <Info />,
        },
        2: { component: <Plan /> },
        3: { component: <AddOns /> },
        4: {
            component: (
                <Summary
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                />
            ),
        },
    }

    return Form[activeStep].component
}

export default StepFormProvider
