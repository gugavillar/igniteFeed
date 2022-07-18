import { gql } from '@apollo/client'

import { Post } from '../types/database'

export interface PostsQuery {
  posts: Array<Post>
}

export const GET_POSTS_QUERY = gql`
  query GET_POSTS {
    posts(orderBy: publishedAt_DESC) {
      id
      publishedAt
      author {
        id
        name
        role
        imgURL
      }
      content {
        raw
      }
      comments(orderBy: publishedAt_DESC) {
        id
        publishedAt
        text
        author {
          id
          name
          role
          imgURL
        }
      }
    }
  }
`

export const LIKE_UPDATE = gql`
  mutation LikePost($likes: Int!, $id: ID!) {
    updateComment(data: { likes: $likes }, where: { id: $id }) {
      likes
    }
    publishComment(where: { id: $id }) {
      id
    }
  }
`
