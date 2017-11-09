import ApiService from './Api.service.js'

class EmpleadoService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const empleadoService = new EmpleadoService('empleadost')
