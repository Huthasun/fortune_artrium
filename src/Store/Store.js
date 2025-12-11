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
export const roomStatusTrigger = atom({
    key: 'roomStatusTrigger',
    default: 0
})
// console.log(roomAtom);