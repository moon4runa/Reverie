import React from 'react'

const PlaylistLink = (props) => {
    const url = React.useState("");

    const handleSubmit = (event) =>{
        const URL = url
        console.log(URL);

    }
        return (
            <>
            <form onSubmit={handleSubmit}>
                <label> <input name="url" type="text"></input> </label>
                <button>Submit</button>
            </form>   
            </>
             )
}

export default PlaylistLink