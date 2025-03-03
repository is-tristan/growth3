// components/testimonialSlider/import.js

import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import TestimonialMarkup from "@/components/queries/testimonialSlider/markup";

// GraphQL query to fetch portfolio data
const TestimonialQuery = gql`
query TestimonialQuery {
  testimonials {
    nodes {
      id
      title
      testimonialFields {
        testimonialText
        name
        position
        companyLogo {
          node {
            mediaItemUrl
          }
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

// PortfolioSlider component
export default async function TestimonialSlider() {
  try {
    // Fetch data from GraphQL
    const { data } = await client.query({
      query: TestimonialQuery,
    });

    // Ensure data is correctly passed to PortfolioMarkup
    return <TestimonialMarkup testimonialItems={data.testimonials.nodes} />;
  } catch (error) {
    console.error("Error fetching testimonial data:", error);
    return <div>Error loading testimonials</div>;
  }
}
