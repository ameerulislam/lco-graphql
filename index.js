import express from 'express'
import resolvers from './resolvers'
import schema from './schema'

import {graphqlHTTP} from 'express-graphql'


const app = express()

    app.get("/", (req, res) => {
        res.send("up and running ameer")
    })

const root = resolvers;//{lco: () => console.log('Learn graqphql ')}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8082, () => console.log("Running at http://localhost:8082"))