import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "76f4483dafbb4e1cbf0cc4e2bfe84624"
  } 
})