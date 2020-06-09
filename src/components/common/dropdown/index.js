import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import DropdownStyled from './styles';
const { Option } = Select;

const Dropdown = ({ showSearch, allowClear, disabled, onSelect, onChange, onDropdownVisibleChange, onFocus, data, defaultValue }) => {
  const search = userInput => {
    return userInput;
  }

  const filterOption = (input, option) => {
    let s = option.value;
    if (typeof s === "number") {
        s = "" + s;
    }
    return s.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  }

  return (
    <DropdownStyled>
      <Select
        className='dropdown'
        defaultValue={defaultValue}
        showSearch={showSearch}
        allowClear={allowClear}
        disabled={disabled}
        style={{width: 200}}
        onSelect={onSelect}
        onChange={onChange}
        onDropdownVisibleChange={onDropdownVisibleChange}
        onFocus={onFocus}
        onSearch={search}
        optionFilterProp='children'
        filterOption={filterOption}
      >
        {data.map(data=>{
          return data.make ? (<Option key={data.make} value={data.make}>{data.make}</Option>) 
          : data.model ? (<Option key={data.model} value={data.model}>{data.model}</Option>)
          : data.year ? (<Option key={data.year} value={data.year}>{data.year}</Option>)
          : (<></>)
        })}
      </Select>
    </DropdownStyled>
  )
};

export default Dropdown;
