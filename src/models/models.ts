import { ReactElement } from 'react'

export interface StepTitleConfig {
    [key: number]: {
        title: string
        subtitle: string
    }
}

export interface FormComponents {
    [key: number]: {
        component: ReactElement
    }
}

export interface FormConfig {
    label: string
    type: string
    name: 'name' | 'email' | 'phone'
    placeholder: string
}

export type IconType = 'advanced' | 'arcade' | 'checkmark' | 'pro' | 'thank-you'
