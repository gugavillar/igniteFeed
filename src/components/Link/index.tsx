import { memo } from 'react'
import { PencilSimpleLine } from 'phosphor-react'

import styles from './style.module.css'

export const Link = memo(() => {
  return (
    <a href='#' className={styles.link}>
      <PencilSimpleLine size={20} />
      Editar seu perfil
    </a>
  )
})
