import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

const Selection = ({ showSearch, allowClear, disabled, onSelect, onChange, onFocus, data, defaultValue }) => {
  const search = userInput => {
    return userInput;
  }

  const filterOption = (input, option) => {
    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  }

  return (
    <Select
      defaultValue={defaultValue}
      showSearch={showSearch}
      allowClear={allowClear}
      disabled={disabled}
      style={{width: 200}}
      onSelect={onSelect}
      onChange={onChange}
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
  )
};

export default Selection;