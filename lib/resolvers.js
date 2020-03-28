'use strict'

const mutations = require('./mutations');
const queries = require('./queries');
const types = require('./types');

// const courses = [
//   {
//     _id: 'anyid',
//     title: 'Mi titulo',
//     teacher: 'Mi profesor',
//     description: 'una descripcion',
//     topic: 'programacion'
//   },
//   {
//     _id: 'anyid2',
//     title: 'Mi titulo 2',
//     teacher: 'Mi profesor',
//     description: 'una descripcion',
//     topic: 'programacion 2'
//   },
//   {
//     _id: 'anyid3',
//     title: 'Mi titulo 3',
//     teacher: 'Mi profesor',
//     description: 'una descripcion',
//     topic: 'programacion'
//   }
// ]

// module.exports = {
//   hello: () => {
//     return 'Hello world'
//   },
//   greet: () => {
//     return 'Hello everyone'
//   }
// }

// module.exports = {
//   Query: { 
//     getCourses: () => {
//       return courses;
//     },
//     getCourse: (root, args) => {
//       const course = courses.filter(course => course._id === args.id)
//       return course.pop()
//     }
//   }
// }
module.exports = {
  Query: queries,
  Mutation: mutations,
  ...types
}