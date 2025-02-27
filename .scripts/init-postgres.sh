#!/bin/sh

set -e

# This scripts initializes the postgres database
initdb /var/lib/postgresql/data
pg_ctl start -D /var/lib/postgresql/data
npx prisma@4.16.2 migrate deploy --schema=/service/schema.prisma
pg_ctl stop -D /var/lib/postgresql/data