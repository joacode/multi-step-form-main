import {
    AddOnType,
    AddOnsConfig,
    FormConfig,
    PlanConfig,
    StepTitleConfig,
} from '../models'

export const stepContainerConfig = [
    {
        stepNumber: 1,
        label: 'YOUR INFO',
    },
    {
        stepNumber: 2,
        label: 'SELECT PLAN',
    },
    {
        stepNumber: 3,
        label: 'ADD-ONS',
    },
    {
        stepNumber: 4,
        label: 'SUMMARY',
    },
]

export const stepTitleConfig: StepTitleConfig = {
    1: {
        title: 'Personal info',
        subtitle: 'Please provide your name, email address, and phone number.',
    },
    2: {
        title: 'Select your plan',
        subtitle: 'You have the option of monthly or yearly billing.',
    },
    3: {
        title: 'Pick add-ons',
        subtitle: 'Add-ons help enhance your gaming experience.',
    },
    4: {
        title: 'Finishing up',
        subtitle: 'Double-check everything looks OK before confirming.',
    },
}

export const infoConfig: FormConfig[] = [
    {
        label: 'Name',
        type: 'text',
        name: 'name',
        placeholder: 'e.g. Prichi',
    },
    {
        label: 'Email address',
        type: 'email',
        name: 'email',
        placeholder: 'e.g. prichi@email.com',
    },
    {
        label: 'Phone Number',
        type: 'text',
        name: 'phone',
        placeholder: 'e.g. +1 234 567 890',
    },
]

export const planConfig: PlanConfig[] = [
    {
        label: 'Arcade',
        price: 9,
        icon: 'arcade',
        name: 'arcade',
        margin: '0px 10px 0px 0px',
    },
    {
        label: 'Advanced',
        price: 12,
        icon: 'advanced',
        name: 'advanced',
        margin: '0px 10px 0px 10px',
    },
    {
        label: 'Pro',
        price: 15,
        icon: 'pro',
        name: 'pro',
        margin: '0px 0px 0px 10px',
    },
]

export const addOnsConfig: AddOnsConfig[] = [
    {
        title: 'Online Service',
        subtitle: 'Access to multiplayer games',
        price: 1,
        name: AddOnType.ONLINE_SERVICE,
    },
    {
        title: 'Larger storage',
        subtitle: 'Extra 1TB of cloud save',
        price: 2,
        name: AddOnType.LARGER_STORAGE,
    },
    {
        title: 'Customizable Profile',
        subtitle: 'Custom theme on your profile',
        price: 2,
        name: AddOnType.CUSTOMIZABLE_PROFILE,
    },
]
