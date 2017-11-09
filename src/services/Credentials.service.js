class CredentialsService {
  setCurrentUser (user) {
    localStorage.setItem('user', user)
  }
  getCurrentUser () {
    let user = JSON.parse(localStorage.getItem('user'))
    return user
  }
  setToken (token) {
    localStorage.setItem('token_test', token)
  }
  getToken () {
    let token = localStorage.getItem('token_test')
    console.log('---TOKEN---')
    console.log(localStorage.getItem('token_test'))
    return token
  }
  clearCredentials () {
    localStorage.clear('user')
    localStorage.clear('token_test')
  }
}

export default CredentialsService
