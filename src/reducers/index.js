const initialState = {
    contador:0,
}

export default (state = initialState, action)=>{

    if(action.type === "AUMENTAR_TYPE"){
        return{
            ...state, 
            contador: state.contador +1,
            //contador: state.contador + action.payload,
        }
    }
    if(action.type === "DISMINUIR_TYPE"){
        return {
            ...state,
            contador: state.contador +1,
            //contador: state.contador + action.payload
        }
    }
return state
}
