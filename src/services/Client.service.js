import ApiService from './Api.service.js'

class ClientService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const clientService = new ClientService('usuarios')
