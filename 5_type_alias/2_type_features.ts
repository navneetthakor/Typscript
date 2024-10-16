// we have two editional features provided by typscript 
// 1. readonly value 
// 2. optional value (?)

type User = {
    name: string;
    readonly email: string; // readonly property
    phone?: string; // optional property
}

// see we haven't added phone 
const user: User = {
    name: "navneet",
    email: "tnavneet@gmail.com"
}

// user.email = "n@n.com" // throws error as it's readonly

export {};