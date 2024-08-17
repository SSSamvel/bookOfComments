const { expect } = require('chai')
const { userCreateQ, userUpdateByIdq } = require('./queries')
const { gqlRequest } = require('../gqlRequest')
const { user } = require('./data')


let respData = null
let postData = null
let userID = null

describe('UPDATE BY ID', () => {
    describe('update by id test - positive', () => {
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
                    respData = res.body.data.userCreate
                    //console.log('created user looks like this', respData)
                    done()
            })
        }),
        it('update by id', (done) => {
            postData = {
                query: userUpdateByIdq,
                variables: {
                    userInput: {
                      firstName: 'Samvel',
                      lastName: 'Test',
                      userId: userID,
                    }
                  }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done (err)
                    respData = res.body.data.userUpdateById
                    //console.log('updated user looks like this', respData)
                    expect(respData.firstName).eq('Samvel')
                    expect(respData.lastName).eq('Test')
                    done()
            })
        })
    })
})