const { expect } = require('chai')
const { userGetByIdQ } = require('./queries')
const { gqlRequest } = require('../gqlRequest')
const { user } = require('./data')


let respData = null
let postData = null

describe('getByID test', () => {
    describe('getByID test - positive', () => {
        it('user get by id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    userId: process.env.USER_ID
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done (err)
                    respData = res.body.data.userGetById
                    expect(respData.firstName).eq(user.userInput.firstName)
                    //user.userInput._id = process.env.USER_ID
                    //expect(respData).to.deep.equal(user.userInput)
                    done()
            })
        })
    })
})