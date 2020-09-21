import Amplify, { API, graphqlOperation } from '@aws-amplify/api'
import awsConfig from './aws-exports'

import { createGif } from './graphql/mutations'

Amplify.configure(awsConfig)

const createNewGif = async e => {
  e.preventDefault() // don't refresh the page after form submit

  const gif = {
    // grab the value of the `altText` field
    altText: document.getElementById('altText').value,
    // grab the value of the `url` field
    url: document.getElementById('url').value
  }

  try {
    // Make the API request: provide the createGif operation, provide the user's gif data
    const newGif = await API.graphql(graphqlOperation(createGif, { input: gif }))
    // Print the data to the console once it comes back
    console.log(newGif)
    // Reset the form (make the fields blank again)
    document.getElementById('create-form').reset()
  } catch (err) {
    // If the request fails, print the error message to the console
    console.error(err)
  }
}

// run our createNewGif function when the form is submitted
document.getElementById('create-form').addEventListener('submit', createNewGif)
