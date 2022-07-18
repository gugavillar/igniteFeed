import { differenceInHours, format } from 'date-fns'

import { Avatar } from '../Avatar'
import { ButtonComment } from './ButtonComment'
import { HeaderComment } from './HeaderComment'

import { Comment } from '../../types/database'

import styles from './style.module.css'

interface CommentProps {
  comment: Comment
  authorId: string
}

export const CommentBlock = ({
  comment: { id, author, publishedAt, text, likes },
  authorId
}: CommentProps) => {
  const hours = differenceInHours(new Date(), new Date(publishedAt))
  const dateTime = format(new Date(publishedAt), 'yyyy-MM-dd HH:mm:ss')
  const isAuthorFromComment = author.id === authorId

  return (
    <section className={styles.comment} key={id}>
      <Avatar hasBorder={false} src={author.imgURL} />
      <div className={styles.commentDiv}>
        <div className={styles.commentBlock}>
          <HeaderComment commentId={id} name={author.name} time={{ hours, dateTime }} />
          <p className={styles.textComment}>{text}</p>
        </div>
        {/* <ButtonComment commentId={id} isAuthorFromComment={isAuthorFromComment} likes={likes} /> */}
      </div>
    </section>
  )
}
