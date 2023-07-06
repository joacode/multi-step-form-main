import { useMediaQuery } from 'react-responsive'

/**
 * Types
 */

enum Device {
    DESKTOP = 'DESKTOP',
    MOBILE = 'MOBILE',
}

enum DEVICE_SIZE {
    MIN_DESKTOP = '992px',
    MAX_MOBILE = '576px',
}

interface HooksDeviceResp {
    device?: Device
    isDesktop: boolean
    isMobile: boolean
}

/**
 * Hook
 */

export const useDeviceDetect = (): HooksDeviceResp => {
    const isMobile = useMediaQuery({
        query: `(max-width: ${DEVICE_SIZE.MAX_MOBILE})`,
    })

    const isDesktop = useMediaQuery({
        query: `(min-width: ${DEVICE_SIZE.MIN_DESKTOP})`,
    })

    return {
        isMobile,
        isDesktop,
        device: isDesktop ? Device.DESKTOP : Device.MOBILE,
    }
}
