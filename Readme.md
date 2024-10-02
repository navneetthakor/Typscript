## Introduction

- Typscript is just performs ->  static checking + Javascript
- at compile time typscript is compiled in -> javascript
- Typscript is development tool
- It saves our life from locking in runtime errors

- - 

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
- In this section I have created '1_installation' folder where basic typscript file [ intro.ts ] is there, now to compile this file <br>
        ```
        tsc intro.ts
        ```
    this will generate [ intro.js ] file 
