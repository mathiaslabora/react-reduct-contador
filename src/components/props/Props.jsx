import React from "react";

function Props(props){
    return <> {/* a esos <> se les llama fragment sino hay que importarlo*/}
        <h1>Holanda {props.name}</h1>
    </>
}

export default Props;