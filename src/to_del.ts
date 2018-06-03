// --------- ЗАДАЕМ ЖЕСТКУЮ СТРУКТУРУ ОБЪЕКТА ---------
namespace SetStrictObjType { //

    let t: {
        a: number,
        b: string
    }

    t = {
        // a: 234,
        b: 'sdflkjsf',
        // c: 12 // нельзя, тк такого свойства нет в типе
    }
}


// --------- ЧТОБЫ ФУНКЦИЯ ПРИНИМАЛА РАЗНОЕ КОЛ-ВО АГРУМЕНТОВ ---------
namespace OverloadPadding {
    function padding(all: number);
    function padding(topAndBottom: number, leftAndRight: number);
    function padding(top: number, bottom: number, left: number, right: number);

    function padding(a: number, b?: number, c?: number, d?: number) {
        if (b == undefined && c === undefined && d === undefined) {
            d = b = c = a
        }

        else if (c === undefined && d === undefined) {
            c = b;
            d = a;
        }

        return {
            top: a,
            bottom: d,
            left: b,
            right: c
        }
    }

    padding(4);
    padding(2, 5);
    padding(2, 5, 3, 5);

}


// ---------- ЗАДАТЬ ТИП РЕЗУЛЬТАТА ВЫЗОВА ФУНКЦИИ -----------
namespace Callable {

    interface ReturnString {
        (): string,

        new(): string
    }

    declare let isString: ReturnString;
// Закомментил тк валит код в chrome. Здесь приведен пример исключительно для применения типа
    // let someString = isString() // someString будет строкой
    // someString = 'adsfasdf' // ок
    // someString = 12 // ошибка - не строка!
}


/* ------ ПРОВЕРИТЬ НАЛИЧИЕ ОБЯЗАТЕЛЬНОГО СВОЙСТВА В params (FRESHNESS) --------- */
namespace Freshness {
    function checkFood(some: { isFresh?: string }) {
        console.log((some.isFresh))
    }

    const apple = {isFresh: 'oh yeah'}
    const orange = {isFresh: 'not much', quantity: 12} // доп параметр - ок
    const boxes = {quantity: 12}

    checkFood(apple)
    checkFood(orange) // ok, т.к. есть обязательный параметр isFresh, доп свойство не учитывается
    checkFood(boxes) // ошибка, нет свойства isFresh
}


/* ------- GENERIC TYPES --------- */

namespace GenericTypes {
// Function
    function f<T>(arr: T[]): T[] {
        let toreturn = [];
        for (let i = arr.length - 1; i >= 0; i -= 1) {
            toreturn.push(arr[i])
        }
        return toreturn
    }


    const arr = [1, 2, 3, 4]
    const arr2 = ['one', 'two', 'three']

    var reversed = f(arr2);
    reversed[0] = 'jkjk'


// Class with generic types

    class Queue<T> {
        private data = [];
        push = (item: T) => this.data.push(item);
        shift = (): T => this.data.shift();
    }

    const someq = new Queue<number>()
    someq.push(1);

    someq.push('adsf') //cannot input string, only number!! type
}


// ------Type Instantiation for Generics
namespace GenericTypesToSpecificType {
    class Bar<T> {
        x: T
    }

    let bbb = Bar as { new(): Bar<number> } // sets a number type

    let xx = new bbb
    xx.x = 12 // now is of number type
}


// ЗАДАТЬ СТРОГИЙ НАБОР СВОЙСТВ  ПАРАМЕТРА ФУНКЦИИ
namespace StrictFuncParams {
    interface phraseParams {
        name: string,
        age: number
    }

    function f1(params: phraseParams): string {
        const {age, name} = params;
        return `${name} is ${age} years old`
    }

    // Но можно передать доп параметр в объекте.
    // /Если создать объект с доп свойством и его передать как параметр, ошибки не будет
    const aa = {age: 12, name: 'adfads', adf: 234};
    f1(aa) // ок!!1

    // Если же передавать доп свойство через object literal то будет ошибка!
    const phrase = f1({age: 12, name: 'john', alsd: 'fadsf'});
}


/* -------- TYPE GUARD ---------- */

// ОГРАНИЧИТЬ ВАРИАНТЫ ВЫБОРА ЗНАЧЕНИЙ ДЛЯ ПЕРЕМЕННОЙ
namespace ChooseFromDic {
    let foo: "hello"
    foo = 'adlsf' // может быть только hello

    // Задать возможные значения для переменной
    type Directions = 'South' | 'North' | 'East' | 'South'

    function move(distance: number, direction: Directions) {
        return 'go'
    }

    move(12, 'North') // direction allow only 4 values (South-*-North)

    let sampleDir: Directions
    sampleDir = 'North'; // is OK
}


/* ---------- EXHAUSTIVE CHECK with NEVER TYPE -------------*/

namespace Exhaustive_check {
    interface Square {
        kind: 'sq',
        x: number
    }

    interface Rectangle {
        kind: 'rec',
        z: number,
        y: number
    }

    interface Circle {
        kind: 'circle',
        p: number,
        r: number
    }

    type Shape = Square | Rectangle | Circle

    function f4(s: Shape) {
        if (s.kind === 'sq') {
            return s.x * s.x
        }

        else if (s.kind === 'rec') {
            return s.z * s.y
        }

        // else if (s.kind === 'circle') return s.p * s.r

        else {
            const _exhaustiveCheck: never = s // TS gives us an error, because we didn't specify case for Circle
        }
    }

// exhaustive check with Switch
    function f5(s: Shape) {
        switch (s.kind) {
            case 'sq':
                return s.x;
            case 'rec':
                return s.y * s.z;
            // case 'circle2': return s.y * s.z;
            default:
                const _check: never = s // gives an error if circle case omitted

        }
    }
}


/* ---------- INDEX SIGNATURES -------------*/

// Declaring index signature

// У объекта обязательное должно быть определенное свойство опр типа
namespace ObjKey {
    let foo: { [index: string]: { name: string } } = {} // all foo members should have 'name' key as string

    foo[0] = {name: 'work'}
    foo[0] = {name2: 'work'} // error
}

// Обязательный тип значения в интерфейсе
namespace ObjKeyPropType {
    interface Interface {
        [i: string]: number;

        x: string // gives an error т.к. мы задали сигнатуру самого индекса [i:string]:number. All explicit members should conform to that index signature
        y: number // is ok
    }
}

// Ключ может быть только из определенных обязательных значений
namespace ObjKeyPropNameFromDic {
    type Index = 'a' | 'b' | 'c'
    type FromIndex = {[key in Index]: number}
    const Good: FromIndex = {'a': 1, b: 2, d: 2} // ошибка: 1. Не должно быть "d". 2.Нет "с"
}

// Nested index signatures
namespace NestedIndex {
    interface NestedCss {
        color?: string;

        [key: string]: string | NestedCss // is BAD because see below
    }


    const isGoodByHasSilentError: NestedCss = { // works but there is silent error in next example
        color: 'red',
        '.subclass': {
            color: 'blue'
        }
    }

    const failedSilently: NestedCss = {
        coour: 'blue' // ---- coour falls out from interface, as coour is valid string selector
    }

// Nest nested index signatures in separate prop
    interface NestedCss2 {
        color?: string;
        nest?: {
            [key: string]: string | NestedCss
        }
    }

// Usage
    const exampleClass: NestedCss2 = {
        color: 'red',
        nest: {
            '.subclass': {
                color: 'blue'
            }
        }
    };

    const notFailedSilently: NestedCss2 = {
        coour: 'red', // TS gives us a nice error indicator! ))

    };
}


/* -------- Тип можно задавать используя тип другой переменную, свойства класса ------*/

namespace UsingOthersForTypes {
// 1. Задать тип объекта от другого существующей объекта через typeof
    namespace ObjTypeFromOtherObj {
        interface Obj2 {
            x: string
        }

        const obj: Obj2 = {x: 'hello'}

        let obj3: typeof obj = {x: 'hela'} // obj3 имеет тот же тип что и obj
    }

// 2. Использовать тип  свойства класса для типизации
    namespace ObjPropNamesForVarValues {
        class FooClass {
            foo: string // Хотим использовать тип строка
        }

        declare let _fooVar: FooClass; // Объявляем через declare переменную которой даем тип свойства класса

        let shouldBeString: typeof _fooVar.foo; // применяем тип
        shouldBeString = {};
        shouldBeString = ';aldksfj;asdf'
    }

// 3. Задать тип и значение переменной используя константу const
    namespace VarValStrict {
        const greeting = "hello world!"
        let otherGreeting: typeof greeting;
        otherGreeting = 'adf';
        otherGreeting = 'hello world!' // может быть только hello world из const
    }
}


// 4. Переменная может принимать значение только из ключей объекта
namespace ObjKeysForVarValues {
    const roles = {
        manager: 'Этот ключ для исполжвыжадф офывад ',
        operator: 'operator'
    }

    type Roles = keyof typeof roles;

    let user: Roles
    user = "manager"

    const ttt = 'hello'
    let someUser: typeof ttt
    someUser = 'hello'

}


try {
    throw new Error('someting bad happened')
}

catch (e) {
    console.log(e)
}


