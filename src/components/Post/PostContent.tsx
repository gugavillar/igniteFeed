import { RichText } from '@graphcms/rich-text-react-renderer'
import { RichTextContent } from '@graphcms/rich-text-types'

import styles from './PostContentStyle.module.css'

interface PostContentProps {
  content: RichTextContent
}

export const PostContent = ({ content }: PostContentProps) => {
  return (
    <div className={styles.content}>
      <RichText content={content} />
    </div>
  )
}
