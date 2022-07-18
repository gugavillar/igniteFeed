import { Fragment } from 'react'
import { useQuery } from '@apollo/client'

import { HeaderPost } from './HeaderPost'
import { PostContent } from './PostContent'
import { CommentForm } from '../CommentForm'
import { CommentBlock } from '../CommentBlock'

import { GET_POSTS_QUERY, PostsQuery } from '../../constants/postsQuery'

import styles from './style.module.css'

export const Post = () => {
  const { data } = useQuery<PostsQuery>(GET_POSTS_QUERY)
  return (
    <Fragment>
      {data?.posts?.map((post) => (
        <article className={styles.container} key={post?.id}>
          <HeaderPost author={post?.author} publishedAt={post?.publishedAt} />
          <PostContent content={post?.content?.raw} />
          <CommentForm authorId={post?.author?.id} postId={post?.id} />
          {post?.comments?.map((comment) => (
            <CommentBlock key={comment?.id} comment={comment} authorId={post?.author?.id} />
          ))}
        </article>
      ))}
    </Fragment>
  )
}
