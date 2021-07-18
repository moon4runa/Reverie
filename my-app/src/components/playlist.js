import React from 'react'

const Playlist = ({src}) => {
        return (
            <div>
                <iframe src={src} width="100%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        )
}

export default Playlist
