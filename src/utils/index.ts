import { SubscriptionType } from '../models'

export const pricePerSelected = (
    selected: SubscriptionType,
    price: number
): string => {
    const type = selected === SubscriptionType.MONTHLY ? '/mo' : '/yr'

    return `$${price}${type}`
}
