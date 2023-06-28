export const distance = {
    'km': {
        name: 'kilometer',
        base: 1000,
    },
    'hm': {
        name: 'hectometer',
        base: 100,
    },
    'dam': {
        name: 'decameter',
        base: 10,
    },
    'm': {
        name: 'meter',
        base: 1
    },
    // 'dm': {
    //     name: 'decimeter',
    //     base: 0.1
    // },
    'cm': {
        name: 'centimeter',
        base: 0.01
    },
    // 'mm': {
    //     name: 'millimeter',
    //     base: 0.001
    // },
    // 'um': {
    //     name: 'micrometer',
    //     base: 0.000001
    // },
    // 'nm': {
    //     name: 'nanometer',
    //     base: 1e-9
    // }
}

export const defaultSelectOne = distance['m'];
export const defaultSelectTwo = distance['km'];
