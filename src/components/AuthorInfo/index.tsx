import { memo } from 'react'
import styles from './style.module.css'

interface AuthorInfoProps {
  name: string
  role: string
}

export const AuthorInfo = memo(({ name, role }: AuthorInfoProps) => {
  return (
    <div className={styles.author}>
      <strong>{name}</strong>
      <span>{role}</span>
    </div>
  )
})
