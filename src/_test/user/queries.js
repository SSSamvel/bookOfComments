const userCreateQ = `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`

const userGetByIdQ = `query UserGetById($userId: ID!) {
  userGetById(userId: $userId) {
    firstName
    lastName
    _id
  }
}`

const userDeleteByIdq = `mutation UserDeleteById($userId: ID) {
  userDeleteById(userId: $userId)
}`

const userUpdateByIdq = `mutation UserUpdateById($userInput: UserFields) {
  userUpdateById(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`

module.exports = {userUpdateByIdq, userCreateQ, userGetByIdQ, userDeleteByIdq}