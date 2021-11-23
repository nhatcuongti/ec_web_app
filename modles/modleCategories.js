import db from './dbAccess.js'

export default{
    getAllData(){
        return db('categories');
    },

    addNewData(entry){
        return db('categories').insert(entry);
    },

    updateData(entry){
        const ID = entry.CatID;
        return db('categories').where('CatID', ID).update({"CatName":entry.CatName});
    },

    deleteData(ID){
        return db('categories').where('CatID', ID).del();
    }
}