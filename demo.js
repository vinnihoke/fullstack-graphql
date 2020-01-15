const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server')


const typeDefs = gql`
	type User {
		email: String!
		avatar: String
		friends: [User]!
	}

	type Query {
		me: User!
	}
`

const resolvers = {
	Query: {
		me() {
			return {
				email: 'you@me.com',
				avatar: 'http://you.png',
				friends: []
			}
		}
	}
}

const server = new ApolloServer({
	typeDefs, resolvers
})

server.listen(4000).then(() => console.log('Server listening on port 4000'))

/*
The query doesn't care how you get the data, as long as the data is in the shape that is provided by the resolver. This way you can only query data using any database tool, like knex. But that would be added into the resolver. The information must be the same because of the strong typed nature of GraphQL.

What is a resolver?
Functions that are responsible for returning values for fields that exist on Types in a Schoma. resolvers execution is dependent on the incoming client Query.

*/