const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    userFavorites: [Show]
    comments: [Comment]
  }

  type Show {
    _id: ID!
    title: String!
    description: String!
    currSeason: String!
    nextSeason: String!
    newEpisodes: String!
    tags: [String]!
    thumbnailImg: String!
    headerImg: String!
    seasons: [Season]!
    comments: [Comment]
  }

  type Season {
    _id: ID!
    seasonNumber: Int!
    nextSeason: String!
    headerImg: String!
    episodes: [Episode]!
    castMembers: [CastMember]!
    comments: [Comment]
  }

  type Episode {
    _id: ID!
    episodeNumber: Int!
    title: String!
    description: String!
    thumbnailImg: String
    headerImg: String
    comments: [Comment]
  }

  type CastMember {
    _id: ID!
    name: String!
    description: String!
    thumbnailImg: String!
    headerImg: String
    comments: [Comment]
  }

  type Comment {
    _id: ID!
    commentText: String!
    createdAt: String!
    username: String!
  }

#   type Response {
#     _id: ID!
#     responseText: String!
#     createdAt: String!
#     username: String!
#   }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    shows: [Show]
    show(_id: ID!): Show
    seasons: [Season]
    season(_id: ID!): Season
    episodes: [Episode]
    episode(_id: ID!): Episode
    castMembers: [CastMember]
    castMember(_id: ID!): CastMember
    comments: [Comment]
    comment(_id: ID!): Comment
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addShow(
      title: String!
      description: String!
      currSeason: String!
      nextSeason: String!
      newEpisodes: String!
      tags: [String]!
      thumbnailImg: String!
      headerImg: String!
    ): Show
    addSeason(
      seasonNumber: Int!
      nextSeason: String!
      headerImg: String!
    ): Season
    addEpisode(
      episodeNumber: Int!
      title: String!
      description: String!
      thumbnailImg: String
      headerImg: String
    ): Episode
    addCastMember(
      name: String!
      description: String!
      thumbnailImg: String!
      headerImg: String
    ): CastMember
    addComment(commentText: String!): Comment
    addFavorite(showId: ID!): User
    removeFavorite(showId: ID!): User
  }
`;

module.exports = typeDefs;
