import { atom } from 'recoil';

export const roomAtom = atom({
    key:'roomAtom',
    default:''

})
// console.log(roomAtom);

export const guestAtom = atom({
    key:'guest',
    default:''

})
// console.log(roomAtom);