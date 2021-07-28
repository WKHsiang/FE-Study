## 1. 组件和组件属性

组件：包含内容、样式和功能的UI单元

### 1-1. 创建一个组件
*特别注意：组件的名称首字母必须大写*

- 函数组件
返回一个React元素

- 类组件
必须继承React.Component

必须提供render函数，用于渲染组件

### 1-2. 组件的属性
- 对于函数组件，属性会作为一个对象的属性，传递给函数的参数
- 对于类组件，属性会作为一个对象的属性，传递给构造函数的参数

注意：组件的属性，应该使用小驼峰命名法

*组件无法改变自身的属性。*

之前学习的React元素，本质上，就是一个组件（内置组件）

React中的哲学：数据属于谁，谁才有权力改动

*React中的数据，自顶而下流动*

## 2. 组件状态

组件状态：组件可以自行维护的数据

组件状态仅在类组件中有效

状态（state），本质上是类组件的一个属性，是一个对象

### 状态初始化
```javascript
import React, { Component } from 'react';

export default class MyClassComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            left: this.props.number
        }

        this.timer = setInterval(() => {
            // 更改状态
            this.setState({
                left: this.state.left - 1
            })
            if(this.state.left === 0) {
                clearInterval(this.timer)
            }
        }, 1000)
    }

    render() {
        return <h1>{this.state.left}</h1>
    }
}
```

### 状态的变化

不能直接改变状态：因为React无法监控到状态发生了变化

必须使用this.setState({})改变状态

一旦调用了this.setState，会导致当前组件重新渲染

### 组件中的数据

props：该数据是由组件的使用者传递的数据，所有权不属于组件自身，因此组件无法改变该数组
state：该数组是由组件自身创建的，所有权属于组件自身，因此组件有权改变该数据

## 3. 事件
在React中，组件的事件，本质上就是一个属性

按照之前React对组件的约定，由于事件本质上是一个属性，因此也需要使用小驼峰命名法

### 如果没有特殊处理，在事件处理函数中，this指向undefined

1. 使用bind函数，绑定this
2. 使用箭头函数

## 4. 深入认识setState
setState，它对状态的改变，可能是异步的

*`如果改变状态的代码处于某个HTML元素的事件中，则其是异步的，否则是同步`*

如果遇到某个事件中，需要同步调用多次，需要使用函数的方式得到最新状态

最佳实践：

1. 把所有的setState当作是异步的
2. 永远不要信任setState调用之后的状态
3. 如果要使用改变之后的状态，需要使用回调函数（setState的第二个参数）
4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setState的第一个函数）

React会对异步的setState进行优化，将多次setState进行合并（将多次状态改变完成后，再统一对state进行改变，然后触发render）

## 5. 生命周期
生命周期：组件从诞生到销毁会经历一系列的过程，该过程就叫做生命周期。React在组件的生命周期中提供了一系列的钩子函数（类似于事件），可以让开发者在函数中注入代码，这些代码会在适当的时候运行。

*生命周期仅存在于类组件中，函数组件每次调用都是重新运行函数，旧的组件即刻被销毁*

### 旧版生命周期

React < 16.0.0

1. constructor
    - 同一个组件对象只会创建一次
    - 不能在第一次挂载到页面之前，调用setState，为了避免问题，构造函数中严禁使用setState
2. componentWillMount
    - 正常情况下，和构造函数一样，它只会运行一次
    - 可以使用setState，但是为了避免bug，不允许使用，因为在某些特殊情况下，该函数可能被调用多次
3. render
    - 返回一个虚拟DOM，会被挂载到虚拟DOM树中，最终渲染到页面的真实DOM中
    - render可能不只运行一次，只要需要重新渲染，就会重新运行
    - 严禁使用setState，因为可能会导致无限递归渲染
4. **componentDidMount**
    - 只会执行一次
    - 可以使用setState
    - 通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中

组件进入活跃状态

5. componentWillReceiveProps
    - 即将接收新的属性值
    - 参数为新的属性对象
    - 该函数可能会导致一些bug，所以不推荐使用
6. **shouldComponentUpdate**
    - 指示React是否要重新渲染该组件，通过返回true和false来指定
    - 默认情况下，会直接返回true
7. componentWillUpdate
    - 组件即将被重新渲染
8. componentDidUpdate
    - 往往在该函数中使用dom操作，改变元素
9. **componentWillUnmount**
    - 通常在该函数中销毁一些组件依赖的资源，比如计时器

### 新版生命周期
React >= 16.0.0

React官方认为，某个数据的来源必须是单一的

1. getDerivedStateFromProps
    - 通过参数可以获取新的属性和状态
    - 该函数是静态的
    - 该函数的返回值会覆盖掉组件状态
    - 该函数几乎是没有什么用
2. getSnapshotBeforeUpdate
    - 真实的DOM构建完成，但还未实际渲染到页面中。
    - 在该函数中，通常用于实现一些附加的dom操作
    - 该函数的返回值，会作为componentDidUpdate的第三个参数

### 传递元素内容

如果给自定义组件传递元素内容，则React会将元素内容作为children属性传递过去。

## 6.表单

- 受控组件：组件的使用者，有能力完全控制该组件的行为和内容。通常情况下受控组件往往没有自身的状态，其内容完全受到属性的控制。

- 非受控组件：组件的使用者，没有能力控制该组件的行为和内容，组件的行为和内容完全自行控制。

**表单组件，默认情况下是非受控组件，一旦设置了表单组件的value属性(单选/多选要设置checked属性)，则其变为受控组件**
```js
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        value: '123'
    }

    render () {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={e => {
                    this.setState({
                        value: e.target.value
                    })
                }} />
            </div>
        )
    }
}
```

## 7. HOC 高阶组件

HOF：Higher-Order Function 高阶函数，以函数作为参数，并返回一个函数

HOC：Higher-Order Component 高阶组件，以组件作为参数，并返回一个组件

通常，可以利用HOC实现横切关注点

## 8. ref

reference：引用

场景：希望直接使用dom元素中的某个方法，或者希望直接使用自定义组件中的某个方法

1. ref作用于内置的html组件，得到的将是真实的dom对象
2. ref作用于类组件，得到的将是类的实例
3. ref不能作用于函数组件

ref不再推荐使用字符串赋值，字符串赋值的方式将来可能会被移除

目前，ref推荐使用对象或者函数

**对象**

通过 React.createRef 函数创建
```js
import React, { Component } from 'react'
export default class Comp extends Component {
    constuctor(prop) {
        this.txt = React.createRef()
    }
    render() {
        return (
            <div>
                <input ref={this.txt} type="text" />
                <input ref={el=>{this.txt1 = el}} type="text" />
            </div>
        )
    }
} 
```

**函数**

函数的调用时间：
- 1. componentDidMount的时候会调用该函数
    - 1. 在componentDidMount事件中可以使用ref
- 2. 如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧函数以及新的函数，时间点就出现在componentDidUpdate之前
    - 1. 旧的函数被调用时，传递null
    - 2. 新的函数被调用时，传递对象
- 3. 如果ref所在的组件被卸载，会调用函数

**谨慎使用ref**

能够使用属性和状态控制，就不要使用ref

ref使用场景：
1. 调用真实的DOM对象中的方法
2. 某一时间需要调用类组件的方法

**window.getComputedStyle()**

## 9. Ref转发

forwardRef方法：
1. 参数，传递的是函数组件，不能是类组件，并且需要一个参数来接收ref
2. 返回值，返回一个新的组件
```js
import React from 'react'

function A(props, ref) {
    return <h1 ref={ref}>ttt</h1>
}

const NewA = React.forwardRef(A)

export default class App extends React.Component {
    ARef = React.createRef()
    render() {
        return (
            <div>
                <NewA ref={this.ARef}>
            </div>
        )
    }
}
```

## 10. Context

上下文：Context，表示做某一些事情的环境

React中的上下文特点：

1. 当某个组件创建了上下文后，上下文中的数据，会被所有后代组件共享

2. 如果某个组件依赖了上下文，会导致该组件不再纯粹（数据仅来源于属性props）

3. 一般情况下，用于第三方组件（通用组件）

### 10-1. 旧的API

**创建上下文**

只有类组件才可以创建上下文

1. 给类组件书写一个静态属性 chilfContextTypes，使用该属性对上下文中的数据类型进行约束

2. 添加实例方法 getChildContext，该方法返回的对象，即上下文中的数据，该数据必须满足类型约束，该方法会在每次render之后运行。

```js
import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class test extends Component {

    // 约束上下文数据的类型
    static childContextTypes = {
        a: PropTypes.number,
        b: PropTypes.string.isRequired
    }

    // 得到上下文中的数据
    getChildContext() {
        a: 1234,
        b: 'WKH',
        onChangeA:(newA) => {
            this.setState({
                a: newA
            })
        }
    }

    render() {
        return <h1>TTT</h1>
    }
}

```

**使用上下文中的数据**

要求：如果要使用上下文中的数据，组件必须有一个静态属性 contextTypes，该属性描述了选哟获取的上下文中的数据类型。

1. 可以在组建的构造函数中，通过第二个参数，获取上下文数据
2. **从组件的context属性中获取**
3. 在函数组件中，通过第二个参数，获取上下文数据

```js
class ChildB extends Component {

    static contextTypes = {
        a: PropTypes.number
    }
    
    constructor(props, context) {
        super(props, context) // 将参数的上下文交给父类处理
        // cosnole.log(context)
        cosnole.log(this.context)
    }
    
    render() {
        return <div>TTT</div>
    }
}
```

**上下文中的数据变化**

上下文中的数据不可以直接变化，最终都是通过状态改变，可以在上下文中加入一个处理函数，用于后代组件恒该上下文的数据

### 10-2. 新的API

待更新。。。 3-8

## 11. PuerComponent

纯组件，用于避免不必要的渲染（运行render函数），从而提高效率

优化：如果一个组件的属性和状态，都没有发生变化，重新渲染该组件是没有必要的

PureComponent是一个组件，如果某个组件继承自该组件，则该组件的shouldComponentUpdate会进行优化，对属性和状态进行**浅比较**，如果相等则不会重新渲染

- 1. PureComponent进行的是浅比较
    - 1. 为了效率， 尽量使用PureComponent；要求不要改动之前的状态，永远是创建新的状态覆盖之前的状态（Immutable，不可变对象）

    - 2. Immutable.js 专门用于制作不可变对象

3. 函数组件，使用React.memo函数制作纯组件

## 12. render props

**getBoundingClientRect() 获取某个元素相对于视窗的位置集合**

有时候，某些组件的各种功能及其处理逻辑几乎相同，只是显示的界面不一样，建议使用以下方法来解决重复代码的问题（横切关注点）

1. render props

2. HOC

## 13. Portals

插槽：将一个React元素渲染到指定的DOM容器中

ReactDOM.createPortal(React元素，真实的DOM容器)，该函数返回一个React元素

**注意事件冒泡**

1. React中的事件是包装过的。

2. 它的事件冒泡是根据虚拟DOM树来冒泡的，与真实DOM树无关。

## 14. 错误边界

默认情况下，若一个组件在渲染期间（render发生错误，会导致整个组件树全部被卸载）

错误边界：是一个组件，该组件会捕获到渲染期间（render）子组件发生的错误，并有能力阻止错误继续传播

**让某个组件捕获错误**

- 1. 编写声命周期函数 静态函数 getDerivedStateFromError，它会在渲染子组件发生错误后更新到页面之前运行

    - 1. 只有子组件发生错误时才会运行该函数

    - 2. 该函数返回一个对象，React会将该对象的属性覆盖掉当前组件的state

    - 3. 参数：错误对象

- 2. 编写生命周期函数 componentDidCatch   *会影响效率*
    - 1. 实例方法
    - 2. 运行时间点：渲染子组件的过程中，发生错误，更新页面之后，由于其运行时间点比较靠后，因此不太会在该函数中改变状态。
    - 3. 通常，该函数用于记录错误消息。

**细节**

某些错误，错误边界组件无法捕获

1. 自身的错误

2. 异步的错误

3. 事件中的错误

总结：仅处理渲染子组件期间的同步错误