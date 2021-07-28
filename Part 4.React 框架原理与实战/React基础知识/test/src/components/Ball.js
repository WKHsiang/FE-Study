import React, { Component } from 'react'
import './Ball.css'

export default class Ball extends Component {

    constructor(props) {
        super(props)
        this.state = {
            width: props.width || 100,
            height: props.height || 100,
            left: props.left || 0,
            top: props.top || 0,
            speedX: props.speedX || 0,
            speedY: props.speedY || 0,
            bgColor: props.bgColor || 'red'
        }

        setInterval(() => {
            let x = this.state.left + this.state.speedX * 16 / 1000
            let y = this.state.top + this.state.speedY * 16 / 1000
            let nSpeedX = this.state.speedX
            let nSpeedY = this.state.speedY
            if(x <=0) {
                x = 0
                nSpeedX = -nSpeedX
            } else if(x >= document.documentElement.clientWidth - this.state.width) {
                x = document.documentElement.clientWidth - this.state.width
                nSpeedX = -nSpeedX
            }
            if(y <= 0) {
                y = 0
                nSpeedY = -nSpeedY
            } else if(y >= document.documentElement.clientHeight - this.state.height) {
                y = document.documentElement.clientHeight - this.state.height
                nSpeedY = -nSpeedY
            }
            this.setState({
                left: x,
                top: y,
                speedX: nSpeedX,
                speedY: nSpeedY,
            })
        }, 16)
        

    }

    

    render() {
        return (
            <div className='ball' 
                style={{
                    width: this.state.width,
                    height:this.state.height,
                    left: this.state.left,
                    top:this.state.top,
                    speedX: this.state.speedX,
                    speedY:this.state.speedY,
                    background: this.state.bgColor
                }}                
            >
                
            </div>
        )
    }
}
