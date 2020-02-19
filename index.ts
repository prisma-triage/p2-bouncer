import { PrismaClient } from '@prisma/client'
import express from 'express'

const app = express()
const port = 3000

const client = new PrismaClient()

const clientWithFlag = new PrismaClient({
  forceTransactions: true,
})

app.get('/', async (req, res) => {
  const data = await client.user.findMany()
  return res.send(JSON.stringify(data))
})

app.get('/with-flag', async (req, res) => {
  const data = await clientWithFlag.user.findMany()
  return res.send(JSON.stringify(data))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
