//
// function yyy(x:Array<number>){
//     // return x.push()
//     return console.log(x)
// }
//
// let c = [1,2]
// yyy([...c,34]);


type State = {
    screen: 'loading'
} | {
    screen: 'answering',
    problems: Array<number>,
    currentProblem: number,
} | {
    screen: 'finished',
    pointsData: number

}

let phase = 'loading';

let state: State = {
    screen: 'finished',
    problems: [1,2],
    pointsData: 1,
}

console.log('------',state)