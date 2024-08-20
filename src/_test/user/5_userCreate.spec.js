const { expect } = require('chai')
const { userCreateQ } = require('./queries')
const { user } = require('./data')
const { gqlRequest } = require('../gqlRequest')
const User = require('../../models/User')
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
                    respData = res.body.data.userCreate
                    expect(respData.firstName).eq(user.userInput.firstName),
                    expect(respData.lastName).eq(user.userInput.lastName)
                    done()
            })
        })
    })
})