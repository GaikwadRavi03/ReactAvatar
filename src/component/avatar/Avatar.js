import React, { Component } from 'react'
import '../avatar/Avatar.css';
import 'tachyons'


class Avatar extends Component {
    render() {
        return (
            <div className='avatarStyle ma4 bg-light-pink dib pa4'>
                <img src='https://joeschmoe.io/api/v1/ravi' alt='avatar' />
                <h1>Ravi Gaikwad</h1>
                <p>Mern Stack</p>
            </div>
        )
    }
}

export default Avatar
