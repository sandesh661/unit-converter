
import { getUnitsList } from '../../Utils';
import './styles.css';

export default function InputComponent(props) {

    return <div className="input-comp">
        <input value={props.inputValue} name="input1" onChange={(e) => props.updateValue(e.target.value, props.selectedUnit)} ></input>
        <select
            value={props.selectedUnit}
            onChange={(e) => props.updateValue(props.inputValue, e.target.value)}
            name="units" className="unit-dropdown">
            {getUnitsList().map((item, index) =>
                <option key={index} value={item} >{item}</option>
            )}
        </select>
    </div>
}
