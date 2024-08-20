const { expect } = require('chai')
const { userUpdateByIdq } = require('./queries')
const { gqlRequest } = require('../gqlRequest')


let respData = null
let postData = null

describe('UPDATE BY ID', () => {
    describe('update by id test - positive', () => {
        it('update by id', (done) => {
            postData = {
                query: userUpdateByIdq,
                variables: {
                    userInput: {
                      firstName: 'Samvel',
                      lastName: 'Test',
                      userId: process.env.USER_ID,
                    }
                  }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done (err)
                    respData = res.body.data.userUpdateById
                    expect(respData.firstName).eq('Samvel')
                    expect(respData.lastName).eq('Test')
                    done()
            })
        })
    })
})