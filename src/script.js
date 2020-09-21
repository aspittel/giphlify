import Amplify, { API, graphqlOperation } from '@aws-amplify/api'
import awsConfig from './aws-exports'

import { createGif, deleteGif, updateGif } from './graphql/mutations'
import { listGifs } from './graphql/queries'

Amplify.configure(awsConfig)

let currentGifId = ''

const createNewGif = async e => {
  e.preventDefault()

  const gif = {
    altText: document.getElementById('altText').value,
    url: document.getElementById('url').value
  }

  try {
    const newGif = await API.graphql(graphqlOperation(createGif, { input: gif }))
    getGifs()
    document.getElementById('create-form').reset()
  } catch (err) {
    console.error(err)
  }
}

const getGifs = async () => {
  // select the container element
  const container = document.querySelector('.container')
  // reset its current contents
  container.innerHTML = ''
  // make a request to get all our gifs
  const gifs = await API.graphql(graphqlOperation(listGifs))
  // loop through our gifs and display them on the page
  gifs.data.listGifs.items.map(gif => {
    // create a new image element
    const img = document.createElement('img')
    // add the src attribute to the img
    img.setAttribute('src', gif.url)
    // add the alt attribute to the img
    img.setAttribute('alt', gif.altText)
    img.addEventListener('click', e => {
      currentGifId = gif.id
      document.getElementById('edit-altText').value = gif.altText
      document.getElementById('edit-url').value = gif.url
      document.getElementById('edit-title').innerText = `Update ${gif.altText}`
    })
    // add the image to the container
    document.querySelector('.container').appendChild(img)
  })
}

const editGif = async e => {
  e.preventDefault()

  try {
    await API.graphql(graphqlOperation(updateGif, {
      input: {
        id: currentGifId,
        altText: document.getElementById('edit-altText').value,
        url: document.getElementById('edit-url').value
      }
    }))
    getGifs()
  } catch (err) {
    console.error(err)
  }
}

const removeGif = async () => {
  await API.graphql(graphqlOperation(deleteGif, {
    input: { id: currentGifId }
  }))
  getGifs()
}

document.getElementById('delete-button').addEventListener('click', removeGif)
document.getElementById('edit-form').addEventListener('submit', editGif)
document.getElementById('create-form').addEventListener('submit', createNewGif)

// run this function on page load
getGifs()
