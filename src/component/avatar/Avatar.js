import React, { Component } from 'react'
import '../avatar/Avatar.css';
import 'tachyons'
import AvatarList from './AvatarList';


class Avatar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Wel-Come to Avatar World'
        }
    }

    render() {

        const avatarArray = [
            {
                id: '1',
                name: 'Rohit',
                work: 'gameDeveloper'
            }, {
                id: '2',
                name: 'Ravi',
                work: 'MernStack'
            }, {
                id: '3',
                name: 'Munna',
                work: 'frontEnd'
            }, {
                id: '4',
                name: 'Dipak',
                work: 'Movies'
            }
        ]

        const avatarCard = avatarArray.map((avatar, i) => {
            return <AvatarList key={i} id={avatarArray[i].name} name={avatarArray[i].name} work={avatarArray[i].work} />
        })

        const handleMessage = () => {
            this.setState({
                message: 'Thank you for click here...'
            })
        }

        return (
            <div className='avatarStyle '>
                <h1>{this.state.message}</h1>
                <div>
                    {avatarCard}
                </div>
                <button onClick={handleMessage}>click Here</button>
            </div>
        )
    }
}

export default Avatar;