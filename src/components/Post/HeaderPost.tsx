import { memo } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { AuthorInfo } from '../AuthorInfo'
import { Avatar } from '../Avatar'

import { ISODateString } from '../../types/date'
import { Author } from '../../types/database'

import styles from './HeaderPostStyle.module.css'

interface HeaderPostProps {
  author: Author
  publishedAt: ISODateString
}

export const HeaderPost = memo(({ author: { imgURL, name, role }, publishedAt }: HeaderPostProps) => {
  const publishedDateFormatted = format(new Date(publishedAt), "dd ' de ' MMMM ' de ' yyyy ' às ' HH:mm", {
    locale: ptBR
  })

  const publishedFormattedAsISOString = format(new Date(publishedAt), 'yyyy-MM-dd HH:mm:ss', {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(new Date(publishedAt), {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <header className={styles.header}>
      <div className={styles.authorInfo}>
        <Avatar src={imgURL} />
        <AuthorInfo name={name} role={role} />
      </div>
      <time title={publishedDateFormatted} dateTime={publishedFormattedAsISOString}>
        {publishedDateRelativeToNow}
      </time>
    </header>
  )
})
