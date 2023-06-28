import { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import Navbar from "../NavBarComp/Navbar";
import './styles.css';
import { defaultSelectOne, defaultSelectTwo } from "../../Utils/length-config";
import { checkIsValidNumber, getConvertedValue } from "../../Utils";

export default function MainArea() {
    const [inputOne, setInputOne] = useState(defaultSelectOne.base);
    const [inputTwo, setInputTwo] = useState(defaultSelectOne.base / defaultSelectTwo.base);
    const [selectedUnitOne, setSelectedUnitOne] = useState(defaultSelectOne.name);
    const [selectedUnitTwo, setSelectedUnitTwo] = useState(defaultSelectTwo.name);
    const [isInvalidInput, setIsInvalidInput] = useState(false);

    const updateInputOne = (inputValue, selectedUnit) => {
        setInputOne(inputValue);
        setSelectedUnitOne(selectedUnit);
        if (checkIsValidNumber(inputValue)) {
            const newValue = getConvertedValue(inputValue, selectedUnit, selectedUnitTwo);
            setInputTwo(newValue);
            setIsInvalidInput(false)
        } else if (!inputValue) {
            setInputTwo("");
        } else {
            setIsInvalidInput(true);
        }
    }

    const updateInputTwo = (inputValue, selectedUnit) => {
        setInputTwo(inputValue);
        setSelectedUnitTwo(selectedUnit);
        if (checkIsValidNumber(inputValue)) {
            const newValue = getConvertedValue(inputValue, selectedUnit, selectedUnitOne);
            setInputOne(newValue);
            setIsInvalidInput(false)
        } else if (!inputValue) {
            setInputOne("");
        } else {
            setIsInvalidInput(true);
        }
    }

    return <div className="main-area">
        <Navbar />
        <h3 className="text-center light-gray">Length Converter</h3>
        <div className="input-comp-container">
            <InputComponent
                inputValue={inputOne}
                updateValue={updateInputOne}
                selectedUnit={selectedUnitOne} />
            <div className="input-separator">=</div>
            <InputComponent
                inputValue={inputTwo}
                updateValue={updateInputTwo}
                selectedUnit={selectedUnitTwo} />
        </div>
        {isInvalidInput ? <p className="error-text">Entered invalid input</p> : null}
    </div>
}
