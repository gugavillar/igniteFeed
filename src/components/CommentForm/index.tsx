import { FormEvent, ChangeEvent, useState } from 'react'
import { useMutation } from '@apollo/client'

import { GET_POSTS_QUERY } from '../../constants/postsQuery'
import { PUBLISH_COMMENT, CREATE_COMMENT } from '../../constants/commentsQuery'

import styles from './style.module.css'

interface CommentForm {
  authorId: string
  postId: string
}

export const CommentForm = ({ authorId, postId }: CommentForm) => {
  const [commentText, setCommentText] = useState('')
  const [loading, setLoading] = useState(false)

  const [createComment, { error: errorCreating }] = useMutation(CREATE_COMMENT)

  const [publishComment, { error: errorPublishing }] = useMutation(PUBLISH_COMMENT, {
    refetchQueries: [{ query: GET_POSTS_QUERY }, 'GET_POSTS']
  })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    const commentTextValue = commentText
    setCommentText('')
    try {
      const response = await createComment({
        variables: {
          author: authorId,
          post: postId,
          text: commentTextValue
        }
      })
      await publishComment({
        variables: {
          id: response?.data?.createComment?.id
        }
      })
    } catch (error) {
      console.log(errorCreating ?? errorPublishing)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => setCommentText(event.target.value)

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <strong>Deixe seu feedback</strong>
      <textarea
        placeholder={loading ? 'Enviando...' : 'Escreva um comentário...'}
        value={commentText}
        onChange={handleChange}
      />
      <footer>
        <button type='submit' disabled={!commentText?.length || loading}>
          Publicar
        </button>
      </footer>
    </form>
  )
}
