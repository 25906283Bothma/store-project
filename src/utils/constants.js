import React from 'react'
require('dontenv').config()
const Airtable = require('airtable')
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});
var base = Airtable.base('appDEHeH8EDQ13r7L');

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
export const products_url = 'https://api.airtable.com/v0/appDEHeH8EDQ13r7L/Table%201?api_key=keyhVfHtuogPhOeoT'

export const single_product_url = 'https://api.airtable.com/v0/appDEHeH8EDQ13r7L/Table%201?api_key=keyhVfHtuogPhOeoT'

