const fs = require('fs');
const gqltools = require('graphql-tools');

module.exports = (schema, resolvers) => {
    let fdata = fs.readFileSync(schema, 'utf8');
    return gqltools.makeExecutableSchema(
        {
            typeDefs: fdata,
            resolvers: resolvers
        }
    );
}