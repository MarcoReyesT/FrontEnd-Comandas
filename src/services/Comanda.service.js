import ApiService from './Api.service.js'

class ComandaService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const comandaService = new ComandaService('comandast')
