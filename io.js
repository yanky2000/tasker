//https://www.youtube.com/watch?v=fdol03pcvMA

const getTen = () => {
    console.log('hi')
    return 10
}


// console.log(getTen());


const arr = [1,2,3,4,5,67,77];

const filtered = condition => inputIterable => inputIterable.filter(condition)

for(let x of filtered(x => x % 2 ===0)(arr)) console.log('------------',x)