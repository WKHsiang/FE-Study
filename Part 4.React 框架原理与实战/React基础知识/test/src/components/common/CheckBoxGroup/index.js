import React, { Component } from 'react'

export default class CheckBoxGroup extends Component {

    getCheckbox = () => {
      return  this.props.dates.map(item => (
            <label key={item.value}>
                <input 
                type='checkbox' 
                name={this.props.name} 
                value={item.value} 
                checked={this.props.checkedList.includes(item.value)} 
                onChange={this.changeHandler}
            />
            {item.text}
            </label>
        ))
    }

    changeHandler = (e) => {
        let newArr;
        if(e.target.checked) {
            console.log(this.props.checkedList, e.target.value)
            newArr = [...this.props.checkedList, e.target.value]
        } else {
            newArr = this.props.checkedList.filter(item => (item.value !== e.target.value))
        }
        console.log(newArr)
        this.props.onChange && this.props.onChange(newArr)
    }

    render() {
        return (
            <div>
                {
                    this.getCheckbox()
                }
                
            </div>
        )
    }
}
