
const aumentar = () =>{
    return {
        type: "AUMENTAR_TYPE",
        payload: 1
    }
}

const disminuir = () =>{
    return {
        type: "DISMINUIR_TYPE",
        payload: -1
    }
}

export {aumentar, disminuir};