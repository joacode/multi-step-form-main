import { CSSProperties } from 'react'

export interface StepTitleConfig {
    [key: number]: {
        title: string
        subtitle: string
    }
}

export interface FormComponents {
    [key: number]: {
        component: JSX.Element
    }
}

export interface FormConfig {
    label: string
    type: string
    name: 'name' | 'email' | 'phone'
    placeholder: string
}

export type IconType = 'advanced' | 'arcade' | 'checkmark' | 'pro' | 'thank-you'

export enum SubscriptionType {
    MONTHLY = 'MONTHLY',
    YEARLY = 'YEARLY',
}

export type PlanType = 'advanced' | 'arcade' | 'pro'

export interface PlanConfig {
    label: string
    price: number
    icon: IconType
    name: PlanType
    margin: CSSProperties['margin']
}

export enum AddOnType {
    ONLINE_SERVICE = 'Online Service',
    LARGER_STORAGE = 'Larger Storage',
    CUSTOMIZABLE_PROFILE = 'Customizable Profile',
}

export interface AddOn {
    name: AddOnType
    price: number
    subscription: SubscriptionType
}

export interface AddOnsConfig {
    title: string
    subtitle: string
    price: number
    name: AddOnType
}

export interface MobileProps {
    isMobile: boolean
}
