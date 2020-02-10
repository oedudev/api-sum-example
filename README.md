# API Sum Example

This project aims to show the application of an API to solve simple math problems using express and schema validator.

### Installation

api-sum-example requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd api-sum-example
$ npm install -d
$ node index.js
```
The App will open the port **3000** and actually have only 1 endpoint:
    - **/api/solve** *(POST)*

### The endpoint will receive the following payload:
```sh
{
   "a" : [],
   "k" : 0
}
```
Where **"a"** means the array of numbers to check the sum
And **"k"** means the result desired


### To run unit tests (installing jest universally)... 

```sh
$ npm install -g jest
$ jest
```

License
----

MIT
