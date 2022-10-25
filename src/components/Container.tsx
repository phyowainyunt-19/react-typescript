// Style props
import React from 'react'

type StyleProps = {
    styles: React.CSSProperties
}

const Container = (props: StyleProps) => {
    return (
        <div style={props.styles}>Styled texts go here</div>
    )
}

export default Container