const db = require("./db/database-connection");

module.exports = {
    list(){
        return db('game')
    },
    read(id){
        return db('game')
        .where('id', id)
    },
    create(game){
        return db('game')
        .insert(game)
        .returning('*')
        .then(record => record[0])
    },
    update(id, game){
        return db('game')
        .update(game)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    delete(id){
        return db('game')
        .delete()
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    }
};
