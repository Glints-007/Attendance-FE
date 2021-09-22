import React from 'react'

const RenderAuthButton = (props) => {
    const {btnName, submitted} = props;
    
    if (submitted) {
        return <button type="submit" className="custBtn text-white" >Loading...</button>
    } else {
        return <button type="submit" className="custBtn text-white">{btnName}</button>
    }
}

export default RenderAuthButton
