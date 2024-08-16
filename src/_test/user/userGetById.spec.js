const { expect } = require('chai')
const { userGetByIdQ } = require('./queries')
const { gqlRequest } = require('../gqlRequest')
const { userId } = require('./data')
userId.userId = '66bad48621f088dc0cfb345f'

let respData = null
let postData = null

describe('getByID test', () => {
    describe('getByID test - positive', () => {
        it('user get by id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: userId
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done (err)
                    respData = res.body.data.userGetById
                    console.log(respData)
                    expect(respData._id).eq('66bad48621f088dc0cfb345f')
                    done()
            })
        })
    })
})