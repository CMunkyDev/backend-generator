module.exports = `const db = require('../db/connection.js')

module.exports = (tableName) => {
    class Model {
        static all() {
            return db(tableName)
        }

        static one(id) {
            return db(tableName).where({ id }).first()
        }

        static make(body) {
            return db(tableName).insert(body).returning('*').then(([res]) => res)
        }

        static alter(id, body) {
            return db(tableName).update(body).where({ id }).returning('*').then(([res]) => res)
        }

        static destroy(id) {
            return db(tableName).del().where({ id }).returning('*').then(([res]) => res)
        }

        static allMatchingFrom (tableName, key, value) {
            return db(tableName).where({[key]: value})
        }
    }

    return Model
}`