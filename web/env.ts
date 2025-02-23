import './envConfig.ts'

const env = {
  apiUrl: process.env.API_URL || "http://localhost:3333/",
}

export default env