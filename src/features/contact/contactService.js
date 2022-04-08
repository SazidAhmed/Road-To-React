import axios from 'axios'

// Register user
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
    createContact
}

export default contactService
