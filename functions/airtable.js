require('dontenv').config()
const Airtable = require('airtable')

const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
.base('appDEHeH8EDQ13r7L')
.table('store')

exports.handler = async (event,context, cb) => {
    try {
        const data = await airtable.list()
        const products = records.map((product) => {
            const {id} = product
            const {name,price,image,colors,company,description,shipping} = product.fields
            const url = image[0].url
            return{id,name,price,url,colors,company,description,shipping}
        })
        return{
            statusCode: 200,
            body: JSON.stringify(products),
            }

    } catch (error){
        return{
            statusCode: 500,
            body: 'Server Error',
            }
    }
   
}