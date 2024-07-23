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

export { getBlogsInfo };
