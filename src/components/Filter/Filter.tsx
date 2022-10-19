import { ChangeEvent, useEffect, useState } from 'react';
import './Filter.scss';
export type IFilterValues = {
    lower?: number;
    upper?: number;
}
const RangeBoundaryBlock = ({ text, value, onChange }: {
    text: string,
    value?: number,
    onChange: (e: ChangeEvent) => void;
}) => {
    return <div className='boundary-input-wrapper'>
        <div className='range-label'>
            <div>{text}</div>
            <div>Enter Amount</div>
        </div>
        {/* &#36; is dollar symbol */}
        <div>&#36;</div>
        <input
            value={value}
            onChange={(e: ChangeEvent) => onChange(e)}
        />
    </div>
}

const Filter = ({ values, updateValue }: {
    values?: IFilterValues,
    updateValue: ({ lower, upper }: IFilterValues) => void
}) => {

    const [minValue, setMinValue] = useState<number | undefined>(values?.lower || undefined);
    const [maxValue, setMaxValue] = useState<number | undefined>(values?.upper || undefined);

    useEffect(() => {
        updateValue({ lower: minValue, upper: maxValue })
    }, [minValue, maxValue, updateValue]);
    return <div className='filter-wrapper'>
        <div className='boundary-wrapper'>
            <div className='icon'><div>&#x1F50E;&#xFE0F;</div></div>
            <RangeBoundaryBlock
                text='Minimum Salary'
                onChange={(e: any) => setMinValue(Number(e.target.value))}
                value={minValue} />
        </div>
        <div className='boundary-wrapper'>
            <div>-</div>
            <RangeBoundaryBlock
                text='Maximum Salary'
                onChange={(e: any) => setMaxValue(Number(e.target.value))}
                value={maxValue} />
        </div>
    </div>
}
export default Filter;