// const arr = [1, 20, 3, 40, 50, 60];
// const filter = condition => inputIterable => inputIterable.filter(condition);
//
// for (let x of filter(x => x % 2 === 0)(arr)) {
//     console.log(x);
// }

const setSeterTen = (setTen) => {
    setTimeout(() => setTen(10), 3000);
    // setTen(10);
};

// setSeterTen(console.log);

const arr = ['victor', 'yang'];
console.table(arr);

function sayHi([first, last]) {
    console.log(`Hello ${first}`);
}

function change({ object, string, number }) {
    if (object) {
        console.log('------', JSON.stringify(object));
    }
    if (string) {
        console.log('------', `${string} should be string!!!!`);
    }

    if (number) {
        console.log(number === 1, 'is not one');
    }
}

// change({ string: 'sadlf;adsfjds' });
// change({ number: 2 });



/*  -------- BITWISE OPERATOR  -------- */

// READ, WRITE, EXECUTE
// 00000100
// 00000010
// 00000001
const Permissions = {
    read: 4,
    write: 2,
    exec: 1,
}

let myPermission = 0;

// const checkPermission = ({ readPermission, writePermission, executePermission }) => {
function checkPermission(permission){
    // let perms = [];
    // for (let i = 0; i < arguments.length; i++) {
    //     perms.push(arguments[i]);
    // }
    //
    // console.log('perms', perms)
    // // perms = perms.join('&');
    // // console.log('------',perms)
    // // const permissions = [];
    // // console.log('permissions from fn ', permissions);
    // console.log('checking', perms)
    // console.log('------',myPermission & writePermission)
    console.log('----', (myPermission & permission) ? 'yes' : 'no');
};

function deletePerm(perm) {myPermission &= ~ perm}
function addPerm(perm) {myPermission |= perm}

myPermission |= Permissions.read
// myPermission |= Permissions.read() | writePermission | executePermission

// addPerm(readPermission)
checkPermission(Permissions.read)
// checkPermission(writePermission)
// checkPermission(executePermission)


// myPermission = myPermission | readPermission | writePermission;
// console.log('Does user has read and write permissions? ', checkPermission({ writePermission, readPermission }));
//
// myPermission = myPermission | writePermission | executePermission;
// console.log('Does user has read, write and execute permissions? ', checkPermission(executePermission));

// console.log(checkPermission())
