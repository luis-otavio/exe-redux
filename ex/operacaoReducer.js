const INITIAL_STATE = { number: 0 }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'COMPRIMENTO':
            return { ...state, number: 2 * 3.1416 * state.raio }
        case 'AREA':
            return { ...state, number:  3.1416 * Math.pow(state.raio, 2) }
        case 'VOLUME':
            return { ...state, number: 3/4 * 3.1416 * Math.pow(state.raio, 3) }   
        case 'RAIO_CHANGED':
            return { ...state, raio: +action.payload }
        default:
            return state
    }
}