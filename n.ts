
// Обработка данных в массиве определённым образом с решением О(n).
// Необходимо обработать массив таким образом, чтобы распределить людей  по группам городов

//
// const people = [
//     {name: 'Alex', city: 'Moscow'},
//     {name: 'Ivan', city: 'Moscow'},
//     {name: 'Joe', city: 'New York'},
//     {name: 'Johan', city: 'Berlin'},
// ]
//
//
// const groupByCity = (array) => {
//
// // let hashMap = {}
// //
// //     for (const {name,city} of array) {
// //         hashMap[city] = hashMap[city] ? [...hashMap[city],name] : [name]
// //     }
// //
// //     return hashMap
//     return array.reduce((acc, {name,city}) => {
//
//      return   {...acc,[city] :  [...(acc[city] || []), name]  }
//
//     }, {})
// }
//
// console.log(groupByCity(people))
//
//
//