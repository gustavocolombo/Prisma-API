import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

prisma.user.create({
  data: {
    id: 'user-1',
    name: 'john doe',
    email: 'john@example.com',
    groups:{
      connectOrCreate:{
        where: {
          id: 'group-1'
        },
        create: {
          id: 'group-1',
          title: 'Grupo - 01',
        }
      }
    }
  }
})