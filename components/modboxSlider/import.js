// components/modboxSlider/import.js

import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import ModBoxMarkup from "@/components/modboxSlider/markup";

// GraphQL query to fetch post data
const ModBoxQuery = gql`
  query ModBoxQuery {
    posts(where: {categoryName: "Modbox"}) {
      nodes {
        id
        title
        slug
        date
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

// Modbox Slider component
export default async function ModboxSlider() {
  try {
    // Fetch data from GraphQL
    const { data } = await client.query({
      query: ModBoxQuery,
    });

    // Pass the data to Modbox Markup
    return <ModBoxMarkup modboxItems={data.posts.nodes} />;
  } catch (error) {
    console.error("Error fetching posts data:", error);
    return <div>Error loading posts...</div>;
  }
}
