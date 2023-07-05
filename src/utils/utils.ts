import { SubscriptionType } from '@/models/models'

export const pricePerSelected = (selected: SubscriptionType, price: number) => {
    const type = selected === SubscriptionType.MONTHLY ? '/mo' : '/yr'

    return `$${price}${type}`
}
