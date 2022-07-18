import { memo, useState } from 'react'
import { Trash } from 'phosphor-react'

import { ModalDelete } from '../ModalDelete'

import { ISODateString } from '../../types/date'

import styles from './HeaderCommentStyle.module.css'

interface HeaderCommentProps {
  commentId: string
  name: string
  time: {
    hours: number
    dateTime: ISODateString
  }
}

export const HeaderComment = memo(({ commentId, name, time: { hours, dateTime } }: HeaderCommentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCloseModal = () => setIsModalOpen(false)

  const handleOpenModal = () => setIsModalOpen(true)

  return (
    <header className={styles.headerComment}>
      <div>
        <strong>{name}</strong>
        <time dateTime={dateTime}>{`Cerca de ${hours}h`}</time>
      </div>
      <button title='Deletar comentário' onClick={handleOpenModal}>
        <Trash size={24} />
      </button>
      <ModalDelete modalIsOpen={isModalOpen} closeModal={handleCloseModal} commentId={commentId} />
    </header>
  )
})
