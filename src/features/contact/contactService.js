import axios from 'axios'

const contactList = async (token) => {
    const config = {
        headers:{
            Authorization : `Bearer ${token}`,
        }
    }
  const response = await axios.get('/api/contactList', config)

  return response.data
}

const createContact = async (contactData, token) => {
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
  const response = await axios.post('/api/contactCreate', contactData, config)

  return response.data
}

const contactService = {
    contactList,
    createContact
}

export default contactService
