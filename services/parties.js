import fetch from 'isomorphic-fetch'

const rootUrl = 'http://localhost:3000/'

class Parties {
  create (name, size) {
    return fetch(rootUrl + 'api/v1/parties', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name: name,
        size: size
      })
    }).then(response => {
      return response.json()
    })
  }
}

export default new Parties()
