import React, { Component } from 'react'
import '../avatar/Avatar.css';
import 'tachyons'
import AvatarList from './AvatarList';


class Avatar extends Component {
    render() {
        return (
            <div className='avatarStyle '>
                <AvatarList id='1' name='Ravi' work='Mern' />
                <AvatarList id='2' name='Rohit' work='gaming' />
                <AvatarList id='3' name='Munna' work='php' />
                <AvatarList id='4' name='Dipak' work='meal' />
            </div>
        )
    }
}

export default Avatar
