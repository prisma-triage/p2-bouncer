# Introduction

This repository exposes two endpoints.

`/` - Prisma client without `forcedTransactions` flag
`/with-flag` - Prisma client with `forcedTransactions` flag

To reproduce:

1. Set `DATABASE_URL` in `prisma/.env`
2. Run `prisma2 generate`
3. Use `ts-node index.js` to test.
