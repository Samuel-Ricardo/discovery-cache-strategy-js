import { TIME_TO_LEAVE } from "config/secret";

export function getExpirationTime(): Date {
    const now = new Date()
    now.setSeconds(now.getSeconds() + TIME_TO_LEAVE); 
    return now;
}