import { gql } from '@apollo/client'

export const CREATE_COMMENT = gql`
  mutation CreateComment($text: String!, $author: ID!, $post: ID!) {
    createComment(
      data: { text: $text, author: { connect: { id: $author } }, post: { connect: { id: $post } } }
    ) {
      id
    }
  }
`

export const PUBLISH_COMMENT = gql`
  mutation PublishComment($id: ID!) {
    publishComment(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`

export const DELETE_COMMENT = gql`
  mutation DeleteComment($id: ID!) {
    deleteComment(where: { id: $id }) {
      id
    }
  }
`
