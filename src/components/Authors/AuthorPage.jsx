import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { getAuthorData } from "../../GraphQl/queries";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(getAuthorData, {
    variables: { slug: slug },
  });
  console.log(data);
  return <div>AuthorPage</div>;
}

export default AuthorPage;
