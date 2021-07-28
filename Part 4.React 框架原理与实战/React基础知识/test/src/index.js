import React from 'react';
import ReactDOM from 'react-dom';
// import CheckBoxGroup from './components/common/CheckBoxGroup/index'
// import App from './App'
// import Ball from './components/Ball'

import Test from './components/common/Banner/Test'


// ReactDOM.render(
//   <Ball width={100} height={100} left={20} top={40} speedX={200} speedY={400} />,
//   document.getElementById('root')
// );

// const btn = <button onClick={(e) => {
//   console.log(e)
// }} onMouseEnter={() => {
//   console.log('鼠标移入 constructor componentWillMount render componentDidMount componentWillReceiveProps shouldComponentUpdate componentWillUpdate componentDidUpdate componentWillUnmount')
// }}>点击</button>

// let name = 'checkBoxGroup',
// dates = [
//     {value: 'football', text: '足球'},
//     {value: 'basketball', text: '篮球'},
//     {value: 'movie', text: '电影'},
// ],
// checkedList = ['football', 'movie']

// function onChange(newArr) {
//     checkedList = newArr
// }

// ReactDOM.render(<CheckBoxGroup name={name} dates={dates} checkedList={checkedList} onChange={onChange} />, document.getElementById('root'))
ReactDOM.render(<Test />, document.getElementById('root'))