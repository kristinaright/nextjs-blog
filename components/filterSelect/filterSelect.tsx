import React from 'react';
export interface FilterSelectProps {
    options: Array<any>;
    defaultValue: string;
    value: string;
    onChange: (params: string) => void;
  };

const FilterSelect: React.FC<FilterSelectProps> = ({
    options,
    defaultValue,
    value,
    onChange
}) => {
    return (
        <select
            value={value}
            onChange={e=>onChange(e.target.value)}
        >
            <option disabled>{defaultValue}</option>
            {
                options.map(optionItem=>
                    <option
                    value={optionItem.value}
                    key={optionItem.value}
                    >
                        {optionItem.name}
                    </option>
                )
            }
        </select>
    );
}
export default FilterSelect;