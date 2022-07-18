import Modal from 'react-modal'
import { useMutation } from '@apollo/client'

import { DELETE_COMMENT } from '../../constants/commentsQuery'
import { GET_POSTS_QUERY } from '../../constants/postsQuery'

import styles from './style.module.css'

interface ModalDeleteProps {
  modalIsOpen: boolean
  closeModal: () => void
  commentId: string
}

export const ModalDelete = ({ modalIsOpen, closeModal, commentId }: ModalDeleteProps) => {
  const [deleteComment, { error: errorDelete, loading }] = useMutation(DELETE_COMMENT, {
    refetchQueries: [{ query: GET_POSTS_QUERY }, 'GET_POSTS']
  })

  const handleDeleteComment = () => {
    try {
      deleteComment({
        variables: {
          id: commentId
        }
      })
    } catch (error) {
      console.log(errorDelete)
    }
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel='Delete comment modal'
      overlayClassName={styles.overlay}
      className={styles.content}
    >
      <h2>Excluir comentário</h2>
      <p>Você tem certeza que gostaria de excluir este comentário?</p>
      <div className={styles.buttons}>
        <button className={styles.cancelButton} onClick={closeModal} disabled={loading}>
          Cancelar
        </button>
        <button className={styles.confirmButton} onClick={handleDeleteComment} disabled={loading}>
          Sim, excluir
        </button>
      </div>
    </Modal>
  )
}

Modal.setAppElement('#root')
