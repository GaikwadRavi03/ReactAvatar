import React from 'react'

function AvatarList(props) {
    return (
        <div className='avatarStyle ma4 bg-light-pink dib pa4 tc'>
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt='avatar' />
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default AvatarList
