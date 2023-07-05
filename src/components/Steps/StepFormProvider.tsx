import React, { FC, ReactElement } from 'react'
import Info from './Info'
import Plan from './Plan'
import { FormComponents } from '@/models/models'

interface StepFormProviderProps {
    activeStep: number
}

const StepFormProvider: FC<StepFormProviderProps> = ({ activeStep }) => {
    const Form: FormComponents = {
        1: {
            component: <Info />,
        },
        2: { component: <Plan /> },
    }

    return Form[activeStep].component
}

export default StepFormProvider
