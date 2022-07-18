import { useCallback } from 'react'
import { useMutation } from '@apollo/client'
import { ThumbsUp } from 'phosphor-react'

import { LIKE_UPDATE } from '../../constants/postsQuery'

import styles from './ButtonCommentStyle.module.css'

interface ButtonCommentProps {
  commentId: string
  isAuthorFromComment: boolean
  likes: number
}

export const ButtonComment = ({ commentId, isAuthorFromComment, likes }: ButtonCommentProps) => {
  const [likePost, { loading }] = useMutation(LIKE_UPDATE)

  const handleLike = useCallback(async () => {
    try {
      await likePost({
        variables: {
          id: commentId,
          likes: likes + 1
        }
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <button className={styles.likeButton} disabled={isAuthorFromComment} onClick={handleLike}>
      <ThumbsUp size={20} />
      Aplaudir <span>{likes}</span>
    </button>
  )
}
