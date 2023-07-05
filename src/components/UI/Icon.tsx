import { IconType } from '@/models/models'
import React, { CSSProperties, FC } from 'react'

interface IconProps {
    icon: IconType
    style?: CSSProperties
}

const Icon: FC<IconProps> = ({ icon, style }) => {
    return (
        <img
            src={`/assets/images/icon-${icon}.svg`}
            alt={`icon-${icon}`}
            style={style}
        />
    )
}

export default Icon
