// passing object to function 
function func1(obj: {username: string, email: string ,ispaid: boolean}): void{
    console.log(obj);
}

// returning object from function 
function func2():{username: string, email: string, ispaid: boolean} {
    return {username:"navneet", email:"n@n.com", ispaid:true};
}

// passing function with extra params (bad behaviour)
// func1({username:"navneet", email:"n@n.com", ispaid:true, isActive: true}); // gives error 

const temp = {username:"navneet", email:"n@n.com", ispaid:true, isActive: true};
func1(temp); // no error but we have same params as above
export {};