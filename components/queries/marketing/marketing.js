import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/components/queries/marketing/marketing.module.scss";
import { ArrowRight } from '@carbon/icons-react';

const marketing = gql`
query marketing {
  allMarketing {
    nodes {
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      id
      title
      slug
      marketingFields {
        introduction {
          logo {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
}
`;

export default async function Marketing() {

    try {

        const { data } = await client.query({

            query: marketing,

        });

        return (

            <>

                <section className="row">

                    <div className={`${styles.wrapper} wrapper`}>

                        <div className={styles.marketingItems}>

                            {data.allMarketing.nodes.map((marketing) => (

                                <article key={marketing.id} className={styles.marketingItem} style={{ backgroundImage: `url(${marketing.featuredImage.node.mediaItemUrl})` }}>

                                    <div className={styles.content}>

                                        <div className={styles.imageWrapper}>

                                            <Image
                                                src={marketing.marketingFields.introduction.logo.node.mediaItemUrl}
                                                alt={marketing.title}
                                                fill={true}
                                            />

                                        </div> {/* .imageWrapper */}

                                        <Link className={`${styles.btn} btn tLight`} href={`/marketing/${marketing.slug}`}>

                                            <span>Learn More</span>

                                            <ArrowRight />

                                        </Link>

                                    </div> {/* .content */}

                                </article> /* .marketingItem */

                            ))}

                        </div> {/* .marketingItems */}

                    </div> {/* .wrapper */}

                </section> {/* .row */}

            </>

        )

    } catch (error) {

        console.error("Error fetching marketing data:", error);

        return <div>Error loading marketing...</div>;

    }
}