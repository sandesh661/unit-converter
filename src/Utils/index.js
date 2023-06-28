import { distance } from "./length-config";

export const getUnitsList = () => {
    let unitList = []
    for (let unit in distance) {
        unitList.push(distance[unit].name)
    }
    return unitList;
}

export const getConvertedValue = (updatedValue, updatedUnit, unitForConversion) => {
    const baseValue1 = getBaseValue(updatedUnit);
    const baseValue2 = getBaseValue(unitForConversion);
    return updatedValue * baseValue1 / baseValue2;
}

const getBaseValue = (unitForConversion) => {
    let baseValue = 1;
    for (let unit in distance) {
        if (distance[unit].name === unitForConversion)
            baseValue = distance[unit].base;
    }
    return baseValue;
}

// Regex to check enterd value is valid number(includes, decimal, floating, exponential types)
export const checkIsValidNumber = (value) => {
    const pattern = /^([-+]?\d*\.?\d+)(?:[eE]([-+]?\d+))?$/;
    return pattern.test(value);
}
