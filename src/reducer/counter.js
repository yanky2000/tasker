import {INCREMENT} from "../constants";

export function count(count = 0, action) {
    return action.type === INCREMENT ? count + 1 : count
}