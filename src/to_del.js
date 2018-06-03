// --------- ЗАДАЕМ ЖЕСТКУЮ СТРУКТУРУ ОБЪЕКТА ---------
var SetStrictObjType;
(function (SetStrictObjType) {
    var t;
    t = {
        // a: 234,
        b: 'sdflkjsf',
    };
})(SetStrictObjType || (SetStrictObjType = {}));
// --------- ЧТОБЫ ФУНКЦИЯ ПРИНИМАЛА РАЗНОЕ КОЛ-ВО АГРУМЕНТОВ ---------
var OverloadPadding;
(function (OverloadPadding) {
    function padding(a, b, c, d) {
        if (b == undefined && c === undefined && d === undefined) {
            d = b = c = a;
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
        };
    }
    padding(4);
    padding(2, 5);
    padding(2, 5, 3, 5);
})(OverloadPadding || (OverloadPadding = {}));
// ---------- ЗАДАТЬ ТИП РЕЗУЛЬТАТА ВЫЗОВА ФУНКЦИИ -----------
var Callable;
(function (Callable) {
    // Закомментил тк валит код в chrome. Здесь приведен пример исключительно для применения типа
    // let someString = isString() // someString будет строкой
    // someString = 'adsfasdf' // ок
    // someString = 12 // ошибка - не строка!
})(Callable || (Callable = {}));
/* ------ ПРОВЕРИТЬ НАЛИЧИЕ ОБЯЗАТЕЛЬНОГО СВОЙСТВА В params (FRESHNESS) --------- */
var Freshness;
(function (Freshness) {
    function checkFood(some) {
        console.log((some.isFresh));
    }
    var apple = { isFresh: 'oh yeah' };
    var orange = { isFresh: 'not much', quantity: 12 }; // доп параметр - ок
    var boxes = { quantity: 12 };
    checkFood(apple);
    checkFood(orange); // ok, т.к. есть обязательный параметр isFresh, доп свойство не учитывается
    checkFood(boxes); // ошибка, нет свойства isFresh
})(Freshness || (Freshness = {}));
/* ------- GENERIC TYPES --------- */
var GenericTypes;
(function (GenericTypes) {
    // Function
    function f(arr) {
        var toreturn = [];
        for (var i = arr.length - 1; i >= 0; i -= 1) {
            toreturn.push(arr[i]);
        }
        return toreturn;
    }
    var arr = [1, 2, 3, 4];
    var arr2 = ['one', 'two', 'three'];
    var reversed = f(arr2);
    reversed[0] = 'jkjk';
    // Class with generic types
    var Queue = /** @class */ (function () {
        function Queue() {
            var _this = this;
            this.data = [];
            this.push = function (item) { return _this.data.push(item); };
            this.shift = function () { return _this.data.shift(); };
        }
        return Queue;
    }());
    var someq = new Queue();
    someq.push(1);
    someq.push('adsf'); //cannot input string, only number!! type
})(GenericTypes || (GenericTypes = {}));
// ------Type Instantiation for Generics
var GenericTypesToSpecificType;
(function (GenericTypesToSpecificType) {
    var Bar = /** @class */ (function () {
        function Bar() {
        }
        return Bar;
    }());
    var bbb = Bar; // sets a number type
    var xx = new bbb;
    xx.x = 12; // now is of number type
})(GenericTypesToSpecificType || (GenericTypesToSpecificType = {}));
// ЗАДАТЬ СТРОГИЙ НАБОР СВОЙСТВ  ПАРАМЕТРА ФУНКЦИИ
var StrictFuncParams;
(function (StrictFuncParams) {
    function f1(params) {
        var age = params.age, name = params.name;
        return name + " is " + age + " years old";
    }
    // Но можно передать доп параметр в объекте.
    // /Если создать объект с доп свойством и его передать как параметр, ошибки не будет
    var aa = { age: 12, name: 'adfads', adf: 234 };
    f1(aa); // ок!!1
    // Если же передавать доп свойство через object literal то будет ошибка!
    var phrase = f1({ age: 12, name: 'john', alsd: 'fadsf' });
})(StrictFuncParams || (StrictFuncParams = {}));
/* -------- TYPE GUARD ---------- */
// ОГРАНИЧИТЬ ВАРИАНТЫ ВЫБОРА ЗНАЧЕНИЙ ДЛЯ ПЕРЕМЕННОЙ
var ChooseFromDic;
(function (ChooseFromDic) {
    var foo;
    foo = 'adlsf'; // может быть только hello
    function move(distance, direction) {
        return 'go';
    }
    move(12, 'North'); // direction allow only 4 values (South-*-North)
    var sampleDir;
    sampleDir = 'North'; // is OK
})(ChooseFromDic || (ChooseFromDic = {}));
/* ---------- EXHAUSTIVE CHECK with NEVER TYPE -------------*/
var Exhaustive_check;
(function (Exhaustive_check) {
    function f4(s) {
        if (s.kind === 'sq') {
            return s.x * s.x;
        }
        else if (s.kind === 'rec') {
            return s.z * s.y;
        }
        // else if (s.kind === 'circle') return s.p * s.r
        else {
            var _exhaustiveCheck = s; // TS gives us an error, because we didn't specify case for Circle
        }
    }
    // exhaustive check with Switch
    function f5(s) {
        switch (s.kind) {
            case 'sq':
                return s.x;
            case 'rec':
                return s.y * s.z;
            // case 'circle2': return s.y * s.z;
            default:
                var _check = s; // gives an error if circle case omitted
        }
    }
})(Exhaustive_check || (Exhaustive_check = {}));
/* ---------- INDEX SIGNATURES -------------*/
// Declaring index signature
// У объекта обязательное должно быть определенное свойство опр типа
var ObjKey;
(function (ObjKey) {
    var foo = {}; // all foo members should have 'name' key as string
    foo[0] = { name: 'work' };
    foo[0] = { name2: 'work' }; // error
})(ObjKey || (ObjKey = {}));
// Ключ может быть только из определенных обязательных значений
var ObjKeyPropNameFromDic;
(function (ObjKeyPropNameFromDic) {
    var Good = { 'a': 1, b: 2, d: 2 }; // ошибка: 1. Не должно быть "d". 2.Нет "с"
})(ObjKeyPropNameFromDic || (ObjKeyPropNameFromDic = {}));
// Nested index signatures
var NestedIndex;
(function (NestedIndex) {
    var isGoodByHasSilentError = {
        color: 'red',
        '.subclass': {
            color: 'blue'
        }
    };
    var failedSilently = {
        coour: 'blue' // ---- coour falls out from interface, as coour is valid string selector
    };
    // Usage
    var exampleClass = {
        color: 'red',
        nest: {
            '.subclass': {
                color: 'blue'
            }
        }
    };
    var notFailedSilently = {
        coour: 'red',
    };
})(NestedIndex || (NestedIndex = {}));
/* -------- Тип можно задавать используя тип другой переменную, свойства класса ------*/
var UsingOthersForTypes;
(function (UsingOthersForTypes) {
    // 1. Задать тип объекта от другого существующей объекта через typeof
    var ObjTypeFromOtherObj;
    (function (ObjTypeFromOtherObj) {
        var obj = { x: 'hello' };
        var obj3 = { x: 'hela' }; // obj3 имеет тот же тип что и obj
    })(ObjTypeFromOtherObj || (ObjTypeFromOtherObj = {}));
    // 2. Использовать тип  свойства класса для типизации
    var ObjPropNamesForVarValues;
    (function (ObjPropNamesForVarValues) {
        var FooClass = /** @class */ (function () {
            function FooClass() {
            }
            return FooClass;
        }());
        var shouldBeString; // применяем тип
        shouldBeString = {};
        shouldBeString = ';aldksfj;asdf';
    })(ObjPropNamesForVarValues || (ObjPropNamesForVarValues = {}));
    // 3. Задать тип и значение переменной используя константу const
    var VarValStrict;
    (function (VarValStrict) {
        var greeting = "hello world!";
        var otherGreeting;
        otherGreeting = 'adf';
        otherGreeting = 'hello world!'; // может быть только hello world из const
    })(VarValStrict || (VarValStrict = {}));
})(UsingOthersForTypes || (UsingOthersForTypes = {}));
// 4. Переменная может принимать значение только из ключей объекта
var ObjKeysForVarValues;
(function (ObjKeysForVarValues) {
    var roles = {
        manager: 'Этот ключ для исполжвыжадф офывад ',
        operator: 'operator'
    };
    var user;
    user = "manager";
    var ttt = 'hello';
    var someUser;
    someUser = 'hello';
})(ObjKeysForVarValues || (ObjKeysForVarValues = {}));
try {
    throw new Error('someting bad happened');
}
catch (e) {
    console.log(e);
}
