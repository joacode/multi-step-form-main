import { useMediaQuery } from 'react-responsive'

/**
 * Types
 */

enum Device {
    DESKTOP = 'DESKTOP',
    MOBILE = 'MOBILE',
    TABLET = 'TABLET',
}

enum DEVICE_SIZE {
    MIN_DESKTOP = '992px',
    MAX_MOBILE = '768px',
    MIN_TABLET = '768px',
    MAX_TABLET = '991px',
}

interface HooksDeviceResp {
    device?: Device
    isTablet: boolean
    isDesktop: boolean
    isMobile: boolean
}

/**
 * Hook
 */

export const useDeviceDetect = (): HooksDeviceResp => {
    // { query: `(max-width: ${DEVICE_SIZE.MAX_MOBILE})` }
    const isMobile = useMediaQuery({
        query: `(max-width: ${DEVICE_SIZE.MAX_MOBILE})`,
    })
    const isTablet = useMediaQuery({
        query: `(min-width: ${DEVICE_SIZE.MIN_TABLET}) and (max-width: ${DEVICE_SIZE.MAX_TABLET})`,
    })
    const isDesktop = !isMobile && !isTablet

    const mobileTabletHandler = isTablet ? Device.TABLET : Device.MOBILE

    return {
        isMobile: isMobile && !isTablet,
        isTablet,
        isDesktop,
        device: isDesktop ? Device.DESKTOP : mobileTabletHandler,
    }
}
