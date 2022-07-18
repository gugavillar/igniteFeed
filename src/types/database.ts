import { RichTextContent } from '@graphcms/rich-text-types'
import { ISODateString } from './date'

export interface Author {
  id: string
  name: string
  role: string
  imgURL: string
}

export interface Comment {
  id: string
  publishedAt: ISODateString
  text: string
  author: Author
  likes: number
}

export interface Post {
  id: string
  publishedAt: ISODateString
  author: Author
  content: {
    raw: RichTextContent
  }
  comments: Array<Comment>
}
