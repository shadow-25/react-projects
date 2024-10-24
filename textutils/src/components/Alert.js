import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:'60px'}}>
       { props.alert && <div>
            <div className={`alert alert-${props.alert.type} d-flex`} role="alert">
                <p>{props.alert.msg}</p>
            </div>
        </div>}
        </div>
    )
}
