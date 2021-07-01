const Airtable = require('airtable')

const airtable = new Airtable({apiKey: keyhVfHtuogPhOeoT})
.base('appDEHeH8EDQ13r7L')
.table('store')

exports.handler = async (event,context, cb) => {
    try {
        const data = await airtable.list()
        const products = records.map((product)) => {
            const {id} = product;
            const {};
        }

    } catch (error){

    }
    return{
    statusCode: 200,
    body: 'Airtable Example',
    }
}