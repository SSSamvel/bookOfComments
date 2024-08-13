const {expect} = require('chai')
const { url } = require('../gqlRequest')
const { userCreateQ2 } = require('./queries2')
const { user2 } = require('./data2')
let respData = null
let postData = null

describe('userCreate', () => {
    describe('userCreatePos', () => {
        it('user create', (done) => {
            postData = {
                query: userCreateQ2,
                variables: user2
            }
            request(url)
            .post('/')
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) return done (err)
                respData = res.body
                console.log(respData)
                done()
            })
        })
    })
})