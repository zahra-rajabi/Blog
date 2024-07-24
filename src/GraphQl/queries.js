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
export { getBlogsInfo, getAuthors, getAuthorData };
