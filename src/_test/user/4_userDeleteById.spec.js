const { expect } = require('chai')
const { userDeleteByIdq } = require('./queries')
const { gqlRequest } = require('../gqlRequest')


let respData = null
let postData = null

describe('DELETE BY ID', () => {
    describe('delete by id test - positive', () => {
        it('user delete by id', (done) => {
            postData = {
                query: userDeleteByIdq,
                variables: {
                    userId: process.env.USER_ID
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done (err)
                    respData = res.body.data.userDeleteById
                    expect(respData).eq(true)
                    done()
            })
        })
    })
})