// it's lose form of class 

interface User {
    readonly _id: number,
    name: string,
    email: string,
    isPaid ?: boolean,
    // getHello: () => string, //one way (prefer to use it when need to add '?', second gives error with that)
    getHello(name: string): string // TS not giving error if we not provide params, but gives for inapropriate values
}

const nk: User = {
    _id: 1,
    name: "navneet",
    email: 'n@n.com',
    // getHello: () => {    // no error
    //     return "Hello";
    // }
    // getHello: (nk: number) => {  //error due to value type mismatch
    //     return "Hello";
    // }
    // getHello: (name: string, mk: number) => { //though it have extra values, not giving error
    //     return "Hello";
    // }
    getHello: (nk: string) => {
        return "Hello";
    }
}

export {};