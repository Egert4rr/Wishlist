const { error } = require('console')
const fs = require('fs')
const path = require('path')

const FilePath = path.join(path.dirname(require.main.filename), 'data', 'wishes.json')

module.exports = class Wish {
    constructor(wish){
        this.description = wish
    }

    saveWish(){
        //read file content first
        fs.readFile(FilePath, (error, fileContent) => {
            let wishes = [];

            if (!error) {
                wishes = JSON.parse(fileContent)                
            }
            else {
                console.log(error);
            }
            wishes.push(this)//newWish.saveWish()

            fs.writeFile(FilePath, JSON.stringify(wishes),(error)=>{
                if (!error) {
                    console.log('Wish saved');
                }
            })
        })
    }

    static fetchWishes(callback){
        fs.readFile(FilePath, (error, fileContent) => {
            if (error) {
                callback([])
            }
            callback(JSON.parse(fileContent))
        })
    }

    static deleteWish(WishToDelete){
        fs.readFile(FilePath, (error, fileContent) => {
            let wishes = [];
            if (!error) {
                wishes = JSON.parse(fileContent)
            }

            for(let i = 0; i < wishes.length; i++) {
                if (wishes[i].description === WishToDelete) {
                    wishes.splice(i, 1)
                    break;
                }
            };

            fs.writeFile(FilePath, JSON.stringify(wishes), (error)=> {
                if (!error) {
                    console.log('Item deleted');
                }
            })

        })
    }

}
