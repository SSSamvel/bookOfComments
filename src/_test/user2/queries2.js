const userCreateQ2 = `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`

module.exports = {userCreateQ2}