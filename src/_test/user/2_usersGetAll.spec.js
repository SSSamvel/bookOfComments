const { expect } = require('chai')
const { usersGetAllq } = require('./queries')
const { gqlRequest } = require('../gqlRequest')
const { user } = require('./data')


let respData = null
let postData = null

describe('getByID test', () => {
    describe('getByID test - positive', () => {
        it('user get by id', (done) => {
            postData = {
                query: usersGetAllq,
                variables: {
                    amount: null
                  }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done (err)
                    respData = res.body.data.usersGetAll
                    console.log(respData.length)
                    //expect(respData.length)
                    done()
            })
        })
    })
})