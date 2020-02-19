# Introduction

This repository exposes two endpoints.

`/` - Prisma client without `forcedTransactions` flag
`/with-flag` - Prisma client with `forcedTransactions` flag

To reproduce:

1. Set `DATABASE_URL` in `prisma/.env`
2. Use `ts-node index.js` to test.
