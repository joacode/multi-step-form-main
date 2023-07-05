import { IconType } from '@/models/models'
import React, { FC } from 'react'

interface IconProps {
    icon: IconType
}

const Icon: FC<IconProps> = ({ icon }) => {
    return <img src={`/assets/images/icon-${icon}.svg`} alt={`icon-${icon}`} />
}

export default Icon
