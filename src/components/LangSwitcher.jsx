import { useId } from "react";

export const LangSwitcher =({value, onSelect})=>{
const selectId = useId();
return (
    <div>
        <label htmlFor= {selectId}>Choose language</label>
        <select 
        id={selectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}>
        <option value = "ru">Russian</option>
        <option value = "en">English</option>
        <option value = "pl">Polish</option>
        </select>
    </div>    
);
};

