import { SignUpController } from './signup'

describe('SigUp Controller', () => {
  test('should return 400 if no name is provider', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        email: 'email@mail.com',
        password: 'pass',
        passwordConfirmation: 'pass'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })

  test('should return 400 if no email is provider', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        name: 'name',
        password: 'pass',
        passwordConfirmation: 'pass'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: email'))
  })
})
