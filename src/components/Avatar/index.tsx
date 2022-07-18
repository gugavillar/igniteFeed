import { memo, ImgHTMLAttributes } from 'react'
import styles from './style.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export const Avatar = memo(({ hasBorder = true, ...props }: AvatarProps) => {
  return <img {...props} className={hasBorder ? styles.avatarWithBorder : styles.avatar} />
})
