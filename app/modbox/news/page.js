import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from "@carbon/icons-react";
import { ArrowRight } from "@carbon/icons-react";
import styles from "@/styles/pages/modbox/modboxNews.module.scss";

export const metadata = {
    metadataBase: new URL('https://growth3.co/modbox/news/'),
    title: "ModBox | Growth3",
    description: "Catch all the latest news At ModBox.",
    keywords: "web3, crypto, consultancy, modbox, news",
    openGraph: {
      title: "ModBox | Growth3",
      description: "Catch all the latest news At ModBox.",
      images: [
        {
          url: "/og.jpg",
          width: 800,
          height: 600,
          alt: "News Image",
        },
      ],
    },
  };

// GraphQL query to fetch post data
const ModBoxQuery = gql`
  query ModBoxQuery {
    posts(where: { categoryName: "Modbox" }) {
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
export default async function ModboxPosts() {
    try {
        // Fetch data from GraphQL API
        const { data } = await client.query({
            query: ModBoxQuery,
        });

        // Extract posts data
        const modboxItems = data?.posts?.nodes || [];

        return (

            <div className={`row smallBanner centered ${styles.postsRow}`}>

                <div className="wrapper">

                    <div className="heading">

                        <h1> Modbox News<span className="green">.</span> </h1>

                        <p>Catch the latest from Growth3 and modbox.</p>

                    </div> {/* .heading */}

                    <div className={styles.postsGrid}>

                        {modboxItems.map((item) => (

                            <div key={item.id} className={styles.item}>

                                <div className={styles.image}>

                                    {item.featuredImage?.node?.mediaItemUrl && (
                                        <Image
                                            src={item.featuredImage.node.mediaItemUrl}
                                            alt={item.title || "Portfolio item"}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={80}
                                        />
                                    )}

                                </div> {/* .image */}

                                <div className={styles.content}>

                                    <div className={styles.meta}>

                                        <div className={styles.date}>

                                            <Calendar />

                                            <span>{new Date(item.date).toLocaleDateString()}</span>

                                        </div> {/* .date */}

                                    </div> {/* .meta */}

                                    <h4>{item.title}</h4>

                                    <Link className="btn tLight" href={`/modbox/news/${item.slug}`}>

                                        <span>Read More</span>

                                        <ArrowRight />

                                    </Link> {/* .btn */}

                                </div> {/* .content */}

                            </div>

                        ))}

                    </div> {/* .postsGrid */}

                </div> {/* .wrapper */}

            </div>

        );
    } catch (error) {

        console.error("Error fetching posts data:", error);

        return (

            <div className="row">

                <div className="wrapper">

                    <div className="heading centered">

                        <h1>Error fetching posts<span className="green">...</span> </h1>

                    </div> {/* .heading */}

                </div> {/* .wrapper */}

            </div>
        );
    }
}
