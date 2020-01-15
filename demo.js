const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server')

// Don't modify the schema on the fly. Spend time and define the schema with your team.
// You must have typeDef, a query, and a resolver. This is everything you need to run a server.
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
	// These must match the typeDefs exactly, otherwise they won't run.
	// These can actually do anything you'd like. For instance, you can have these return information from an API, or run a database query. You could have custom things happening in the resolver... As long as they are returned in the proper shape of the typeDefs.
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

The query that is requested by the client is executed by the resolvers.

{
	I'm executing the me query, and firing off the me resolver. This could then grab the information from whichever database you're using.
	me {
		email
	}
}

*/