import  {  gql  }  from  "apollo-server-micro"; 

export  const  typeDefs  =  gql`
type Channel {
    id: String
    name: String           
    image: String
}
type Query {
    channels: [Channel]
}
`;