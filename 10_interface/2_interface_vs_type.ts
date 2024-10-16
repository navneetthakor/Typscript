//1. reopening of the interface 
interface User {
    readonly _id: number,
    name: string,
    email: string,
    isPaid ?: boolean,
    getHello(name: string): string 
}

interface User {
    password: string
}
    // -> now User have all the properties define in both of above 
    // -> where, as in `type alias` we can't modify it once it is created 


// 2. inheritance 
// -> in interface 
interface Admin extends User{
    role: "admin" | "dbAdmin" | "ceo"
}

// -> in type alias 
type user = {
    name: string
}

type admin = user & {
    role: "admin" | "dbAdmin" | "ceo"
}

export {};