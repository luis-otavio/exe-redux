export function comprimento() {
    return { type: 'COMPRIMENTO' }
}

export function area() {
    return { type: 'AREA' }
}

export function volume() {
    return { type: 'VOLUME' }
}

export function raioChanged(e) {
    return {
        type: 'RAIO_CHANGED',
        payload: e.target.value
    }
}
