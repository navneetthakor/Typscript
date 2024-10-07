# Abstract
- This Repository is entrily created by 
    - Navneet kumar ( @navneetthakor )

to learn typscript deeply

## Introduction

- Typscript is just performs ->  static checking + Javascript
- at compile time typscript is compiled in -> javascript
- Typscript is development tool
- It saves our life from locking in runtime errors
 

## Installation

- Two main kind of installations
    1. global installation to use it in our system
        ```
        npm install -g typescript
        ```
    2. installation as development tool in our projects [ts.config file will be generated here]
        ```
        npm install typescript --save-dev
        ```
- In this section I have created '1_installation' folder where basic typscript file [ intro.ts ] is there
    1.  to compile this file
        ```
        tsc intro.ts
        ```
        this will generate [ intro.js ] file 

## Data-types
- Typescript is very reach in data-types. following are the few of them
    - Number
    - String
    - Boolean
    - Any
    - Array
    - etc ...

- In this section I have created '2_data-type' folder to learn how to declare data-type for a variable
    1. Declaring variable of type 'String'
        ```
        let name: string;
        name = "Navneet"
        ```
    2. Variable declarationa and initialization both in single line
        ```
        let name: string = "Navneet";
        ```
    3. If we are initializing variable while declaration then, it's not compulsory to provide [ data_type ] as TS is smart enough to automatically infer the data_type
        ```
        let name = "Navneet";
        ```
    4. In case, for a variable if we are not defining data-type and at the same time not initializing it, then data-type fo the variable will be infer as ```any```. It means this variable can take any value.
        ```
        let name;
        ```
        - here datat-type of this variable ```name``` is ```any```.
        - TS provides ```noImplicitAny``` compiler flag to avoid this situation.

    5. General syntax:
        ```
        [type] [variable_name]: [data_type];
        ```
        here,
        type  = ```var | let | const ```

## Working with functions
- In case of functions the defualt inference for the data-type of input variables and returned values is ```any``` which is problemetic. That's why in case of functions we have to make sure that we are providind apropriate types.

    1. Syntax to define data-types for functions.
    ```
    fund_name(var_name: data_type): return_data_type{
        .
        .
        return data_type_value;
    }
    ```

    2. if there are multiple parameter to pass then also we can define them like below.
    ```
    myFunc(num: number, name: string): void {
        ...
    }
    ```

    3. To pass default value to parameters
    ```
    myFunc(name: string, id: number = 0): void{
        ...
    }
    ```

    4. for inbuilt functions like map,
    ```
    myArr.map((name): string =>{
        return `Hello Mr. ${name}`;
    });
    ```
    here, data_type of 'name' will be correctly infered automatically according to the type of array. So, we not need to provide it explicitly.







