import { PrismaClient } from '@prisma/client'
import express from 'express'
import uuidv4 from 'uuid/v4'

const app = express()
const port = 3000

const client = new PrismaClient()

const clientWithFlag = new PrismaClient({
  forceTransactions: true,
})

app.get('/', async (req, res) => {
  const date = new Date().toISOString()
  const id = uuidv4()
  const data = await client.user.create({
    data: {
      id,
      email: `alice-${id}@prisma.io`,
      name: 'Alice',
      post: {
        create: {
          id: uuidv4(),
          date,
          data: 'post 1',
          title: 'Post 1',
          slug: `post-${uuidv4()}-1`,
        },
      },
    },
  })
  return res.send(JSON.stringify(data))
})

app.get('/with-flag', async (req, res) => {
  const date = new Date().toISOString()
  const id = uuidv4()
  const data = await clientWithFlag.user.create({
    data: {
      id,
      email: `alice-${id}@prisma.io`,
      name: 'Alice',
      post: {
        create: {
          id: uuidv4(),
          date,
          data: 'post 1',
          title: 'Post 1',
          slug: `post-${uuidv4()}-1`,
        },
      },
    },
  })
  return res.send(JSON.stringify(data))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
