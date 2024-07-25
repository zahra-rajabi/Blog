import { gql } from "@apollo/client";

const getBlogsInfo = gql`
  query {
    posts {
      id
      slug
      title
      coverPhoto {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

const getAuthors = gql`
  query {
    authors {
      name
      id
      slug
      avatar {
        url
      }
      post {
        title
      }
    }
  }
`;

const getAuthorData = gql`
  query GetAuthorData($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      post {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const getPost = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        field
        name
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
    }
  }
`;

const getComments = gql`
  query getComments($slug: String!) {
    post(where: { slug: $slug }) {
      comment {
        name
        id
        text
      }
    }
  }
`;
export { getBlogsInfo, getAuthors, getAuthorData, getPost, getComments };
