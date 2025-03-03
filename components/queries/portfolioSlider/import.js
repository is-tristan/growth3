// components/portfolioSlider/import.js

import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import PortfolioMarkup from "@/components/queries/portfolioSlider/markup";

// GraphQL query to fetch portfolio data
const PortfolioQuery = gql`
  query PortfolioQuery {
    allPortfolio {
      nodes {
        id
        title
        slug
        portfolioFields {
          websiteLink
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

// PortfolioSlider component
export default async function PortfolioSlider() {
  try {
    // Fetch data from GraphQL
    const { data } = await client.query({
      query: PortfolioQuery,
    });

    // Ensure data is correctly passed to PortfolioMarkup
    return <PortfolioMarkup portfolioItems={data.allPortfolio.nodes} />;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return <div>Error loading portfolio</div>;
  }
}
