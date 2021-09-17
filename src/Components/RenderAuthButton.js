import React from 'react'

const RenderAuthButton = (props) => {
    const {btnName, submitted} = props;
    
    if (submitted) {
        return <button type="submit" className="btn text-white" >Loading...</button>
    } else {
        return <button type="submit" className="btn text-white">{btnName}</button>
    }
}

export default RenderAuthButton
