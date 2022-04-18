import { useState } from '#app'

export const list = () => {
    return useState('list');
}

export const waiting = () => {
    return useState('waiting');
}

export default function (data) {
    useState('list', () => data);
}


