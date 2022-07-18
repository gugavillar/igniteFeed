import { memo } from 'react'
import { IgniteLogo } from '../Icons/IgniteLogo'

import styles from './style.module.css'

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <IgniteLogo />
      <h1>Ignite Feed</h1>
    </header>
  )
})
