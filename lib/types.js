'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb');

module.exports = {
  Course: {
    students: async ({ students }) => {
      let db;
      let studentsData;
      let ids;
      try {
        db = await connectDb()
        ids = students ? students.map(id => ObjectID(id)) : [];
        studentsData = ids.length > 0  
          ? await db.collection('students').find(
            { _id: { $in: ids } }
          ).toArray()
        : [];
      } catch (error) {
        console.error(error);
      }
      return studentsData;
    }
  },
  Person: {
    __resolveType: (person, context, info) => {
      if (person.phone) return 'Monitor'
      
      return 'Student'
    }
  },
  GlobalSearch: {
    __resolveType: (item, context, info) => {
      if (item.title) return 'Course';

      if (item.phone) return 'Monitor';

      return 'Student';
    }
  }
}