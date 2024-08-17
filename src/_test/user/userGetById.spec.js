const { expect } = require('chai')
const { userGetByIdQ, userCreateQ } = require('./queries')
const { gqlRequest } = require('../gqlRequest')
const { user } = require('./data')


let respData = null
let postData = null
let userID = null

describe('getByID test', () => {
    describe('getByID test - positive', () => {
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
        it('user get by id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    userId: userID
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done (err)
                    respData = res.body.data.userGetById
                    expect(respData._id).eq(userID)
                    done()
            })
        })
    })
})