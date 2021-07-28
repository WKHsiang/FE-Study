import React, { Component } from 'react'

import PropTypes from "prop-types"

export default class index extends Component {

    static defaultProps = {
        width: 520,
        height: 280,
        imgArr: [],
        duration: 500,
        autoDuration: 3000
    }

    static propTypes = {
        width: PropTypes.number,                        // 宽
        height: PropTypes.number,                       // 高
        imgArr: PropTypes.arrayOf(PropTypes.string),    // 图片数组
        duration: PropTypes.number,                     // 切换时间
        autoDuration: PropTypes.number                  // 切换间隔时间
    }

    render() {
        return (
            <div 
                className="banner-wrap" 
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    imgArr: this.props.imgArr,
                    duration: this.props.duration,
                    autoDuration: this.props.autoDuration
                }}>
                
            </div>
        )
    }
}
