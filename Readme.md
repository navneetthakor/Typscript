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
    
    4. Generatl syntax:
        ```
        [type] [variable_name]: [data_type];
        ```
        here,
        type  = ```var | let | const ```


