
const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'crm'
})

const getAllCustomers = () =>{
    return new Promise((resolve,reject)=>{
        connection.query('select * from customer',function(err,results){
            if(err) reject(err)
            result = JSON.stringify(results)
            res = JSON.parse(result)
            resolve(res)
        })
    })
}
const getCustomerById = (id) =>{
    return new Promise((resolve,reject)=>{
        connection.query('select * from customer where cust_id = ?',[id],function(err,results){
            console.log(results)
            if(err) reject(err)
            result = JSON.stringify(results)
            res = JSON.parse(result)
            resolve(res)
        })
    })
}
const getPage =  async (pageSize,currentPage) =>{
    let customers = await getAllCustomers()
    let count = customers.length
    let pageCount
    if (count > pageSize) {
        pageCount = Math.ceil(count / pageSize)
    } else {
        pageCount = 1
    }
    let result = await getPageIndex(pageSize,currentPage,pageCount)
    return result
}
const getPageIndex = (pageSize,currentPage,pageCount) =>{
    return new Promise((resolve,reject)=>{
        connection.query('select * from customer limit ? offset ?',[pageSize,(currentPage - 1) * pageSize],function(err,results){
            if(err) reject(err)
            let r = JSON.stringify(results)
            let list = JSON.parse(r)
            let result = {
                pages: pageCount,
                list: list,
                pageNum: currentPage
            }
            resolve(result)
        })
    })
}
module.exports = {
    getAllCustomers,
    getCustomerById,
    getPage
}