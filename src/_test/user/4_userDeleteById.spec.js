const { expect } = require('chai')
const { userCreateQ, userDeleteByIdq } = require('./queries')
const { gqlRequest } = require('../gqlRequest')
const { user } = require('./data')


let respData = null
let postData = null
let userID = null

describe('DELETE BY ID', () => {
    describe('delete by id test - positive', () => {
        before('user create ', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done (err)
                    userID = res.body.data.userCreate._id
                    done()
            })
        }),
        it('user delete by id', (done) => {
            postData = {
                query: userDeleteByIdq,
                variables: {
                    userId: userID
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