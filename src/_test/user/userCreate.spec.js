const { expect } = require('chai')
const { userCreateQ } = require('./queries')
const { user } = require('./data')
const { gqlRequest } = require('../gqlRequest')
let respData = null
let postData = null

describe('userCreate', () => {
    describe('userCreatePositive', () => {
        it('user create', (done) => {
            postData =  {
                query: userCreateQ,
                variables: user
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done (err)
                    respData = res.body
                    console.log(respData)
                    //expect(respData).eq()
                    done()
            })
        })
    })
});