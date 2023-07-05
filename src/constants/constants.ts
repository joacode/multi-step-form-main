import { FormConfig, StepTitleConfig } from '@/models/models'

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
