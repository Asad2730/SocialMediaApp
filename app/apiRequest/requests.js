import axios from 'axios';

export const CreateUser = async (email, password, name, imageUrl) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };
        let data = new FormData()
        data.append('name', name)
        data.append('email', email)
        data.append('password', password)
        data.append('imageUrl', imageUrl)

        let res = await axios.post('My_Api_EndPoint', data, config)
        return res.data
    } catch (ex) {
       return ex
    }
} 