// var One = {
//     def2: "def2-One",
//     def1: "def1-One",
//     def3: "def3-One",
// }
//
// var Two = {
//     def2: "def2-Two",
//     def1: "def1-Two",
//     def4: "def4-Two",
// }
//
// let Three = Object.assign({}, One, Two)
//
// console.dir(Three)

const a = (c)=>{

    function b(d){
        return d+c;
    }
    return b;
}


console.log(a(2)(1))