import React, { CSSProperties, FC } from 'react'
import { IconType } from '../../models'

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
            width={40}
            height={40}
        />
    )
}

export default Icon
