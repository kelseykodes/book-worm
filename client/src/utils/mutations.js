import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      _id
      username
      }
    }
  }
`;
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
      user {
          _id
          username
        }
    }
  }
`;
export const REMOVE_BOOK = gql`
mutation removeBook($bookId:String!) {
  removeBook(bookId: $bookId) {
  username
    savedBooks{
      authors
      description
      title
      bookId
      image
      link
      }
    }
 }
`;
export const SAVE_BOOK = gql`
mutation saveBook($bookId: String!, $authors: [String]!, $title: String!, $description: String, $image: String, $link: String ) {
    saveBook(bookId: $bookId, authors: $authors, title: $title, description: $description, image: $image, link: $link) {
        username
        savedBooks{
          authors
          description
          title
          bookId
          image
          link
        }
    }
  }
`;