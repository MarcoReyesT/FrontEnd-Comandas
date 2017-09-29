import {address} from '@/constants/address.js'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

class ApiConnect {
  constructor (route) {
    this.resource = Vue.resource(address.api + route)
  }
  getResource () {
    return this.resource
  }
}

export default ApiConnect
