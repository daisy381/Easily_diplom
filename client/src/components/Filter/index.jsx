//library
import React from 'react';
import {Checkbox, Divider, Rate, Slider} from "antd";

//Style
import {CheckboxTitle,CheckboxContainer,FilterContainer} from './style'

//Images

function Filter() {

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    return (
        <FilterContainer>
            <CheckboxTitle>Brand</CheckboxTitle>
            <CheckboxContainer onChange={onChange}>
                <Checkbox value="A">Lenovo</Checkbox>
                <Checkbox value="B">HP</Checkbox>
                <Checkbox value="C">ASUS</Checkbox>
                <Checkbox value="D">Huawei</Checkbox>
            </CheckboxContainer>
            <Divider/>

            <CheckboxTitle>Price</CheckboxTitle>
                <Checkbox value="A">50 0000 - 99 999</Checkbox>
                <Checkbox value="B">100 000 - 149 999</Checkbox>
                <Checkbox value="C">150 000 - 199 999</Checkbox>
                <Checkbox value="D">200 000 - 499 999</Checkbox>
                <Checkbox value="D">from 499 999</Checkbox>
            <Divider/>

            <CheckboxTitle>Processor</CheckboxTitle>
            <CheckboxContainer onChange={onChange}>
                <Checkbox value="E">Core i3</Checkbox>
                <Checkbox value="A">Core i5</Checkbox>
                <Checkbox value="B">Core i7</Checkbox>
                <Checkbox value="C">Ryzen 5</Checkbox>
                <Checkbox value="D">Ryzen 7</Checkbox>

            </CheckboxContainer>
            <Divider/>

            <CheckboxTitle>Colour</CheckboxTitle>
            <CheckboxContainer onChange={onChange}>
                <Checkbox value="A">All</Checkbox>
                <Checkbox value="E">Black</Checkbox>
                <Checkbox value="B">Blue</Checkbox>
                <Checkbox value="C">White</Checkbox>
            </CheckboxContainer>
            <Divider/>

            <CheckboxTitle>Rate</CheckboxTitle>
            <CheckboxContainer onChange={onChange}>
                <Checkbox value="G">All</Checkbox>
                <Checkbox value="A"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={1}/></Checkbox>
                <Checkbox value="B"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={2}/></Checkbox>
                <Checkbox value="C"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={3}/></Checkbox>
                <Checkbox value="D"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={4}/></Checkbox>
                <Checkbox value="E"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={5}/></Checkbox>
            </CheckboxContainer>
            <Divider/>
        </FilterContainer>
    );
}

export default Filter;