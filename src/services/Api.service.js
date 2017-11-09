import {address} from '@/constants/address.js'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

class ApiConnect {
  constructor (route) {
    this.resource = Vue.resource(address.api + route)
    // this.resource = Vue.resource(address.api + route, {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbG9naW4iLCJpYXQiOjE1MTAyMDM4NDUsImV4cCI6MTUxMDIwNzQ0NSwibmJmIjoxNTEwMjAzODQ1LCJqdGkiOiJtSk5ZWDAzYnZuSkFVZlhuIn0.8X5ZpgV0axZbLWpLLlC4IMel1WzblADSgCSghJAhjzs'})
  }
  getResource () {
    return this.resource
  }
  query () {
    return this.resource.query()
  }
  getById (id) {
    return this.resource.get({id})
  }
  save (model) {
    return this.resource.save(model)
  }
  update (id, model) {
    return this.resource.update({id}, model)
  }
  destroy (id) {
    return this.resource.delete({id})
  }
}

export default ApiConnect
