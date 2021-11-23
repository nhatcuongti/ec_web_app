import db from './dbAccess.js'

export default {
    getAllData() {
        return db('products');
    },

    addNewData(entry) {
        return db('products').insert(entry);
    },

    updateData(entry) {
        const ID = entry.ProID;
        return db('products').where('ProID', ID).update({ "ProName": entry.CatName });
    },

    deleteData(ID) {
        return db('categories').where('ProID', ID).del();
    },

    getDataWithCatID(ID) {
        return db('products').where('CatID', ID)
    }
}