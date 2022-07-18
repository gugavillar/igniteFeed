import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import style from './App.module.css'

export const App = () => {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}
