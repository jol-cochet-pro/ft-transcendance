import { FastifyPluginAsync } from 'fastify'
import { findAll } from './users.service';


const users: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async (request, reply) => {
    return findAll();
  })
  
}

export default users
