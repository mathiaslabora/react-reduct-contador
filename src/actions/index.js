
import { counter as CounterTypes } from '../constants/actionTypes'


export const incrementarContador = () =>  {
    return({
        type: CounterTypes.INCREMENTAR
    })
}

export const decrementarContador = () =>  {
    return({
        type: CounterTypes.DECREMENTAR
    })
}

export default{
    incrementarContador,
    decrementarContador,
}