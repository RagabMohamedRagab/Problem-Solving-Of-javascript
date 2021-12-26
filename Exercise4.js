// Write A program of javascript to get current Date

export class GetFullTime {
    constructor() {
    }
    CurrentDate() {
        return `The Day :${new Date().getDate()} -The Month:  ${new Date().getMonth()} -The Year: ${new Date().getFullYear()} \nThe Hour: ${new Date().getHours()} -The Minute: ${ new Date().getMinutes()} -The Second : ${new Date().getSeconds()}`
    }
}