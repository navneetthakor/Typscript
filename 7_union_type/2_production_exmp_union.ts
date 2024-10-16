// in real time app, let say we have User and Admin
// we are writing a function or creating an object which can be User or Admin
// so for that Union will help us 

type User = {
    uid: string; // user id
    name: string;
}

type Admin = {
    aid: string; // admin id
    name: string; 
}

function myFunc(obj: User | Admin){
     // this gives error as it's not sure that obj is User or admin, as User not have `aid`
    // console.log(obj.aid)

    if("aid" in obj){ // we can use any check here, which clarifys data type.
        console.log(obj.aid)
    }

    console.log(obj.name + "\n");
}

myFunc({aid: "aid", name: "navneet"});
myFunc({uid: "uid", name: "navneet"});

export {};