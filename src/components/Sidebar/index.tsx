import { AuthorInfo } from '../AuthorInfo'
import { Avatar } from '../Avatar'
import { Link } from '../Link'

import styles from './style.module.css'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
      />
      <div className={styles.profile}>
        <div>
          <Avatar src='https://github.com/gugavillar.png' />
        </div>
        <AuthorInfo name='Gustavo Villar' role='Web Developer' />
      </div>
      <footer>
        <Link />
      </footer>
    </aside>
  )
}
