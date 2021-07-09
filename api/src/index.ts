import { Neo4jGraphQL } from '@neo4j/graphql'
import neo4j from 'neo4j-driver'
import { ApolloServer } from 'apollo-server'
import dotenv from 'dotenv'
import { typeDefs } from './schema'

dotenv.config()

const driver = neo4j.driver(
  process.env.NEO4J_DB_HOST,
  neo4j.auth.basic(process.env.NEO4J_DB_USER, process.env.NEO4J_DB_PASS),
)

const neoSchema = new Neo4jGraphQL({ typeDefs, driver })

const server = new ApolloServer({
  schema: neoSchema.schema,
  context: ({ req }) => ({ req }),
})

server.listen(4000).then(() => console.log('running localhost:4000'))
