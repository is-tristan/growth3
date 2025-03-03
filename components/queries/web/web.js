import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import styles from "@/components/queries/web/web.module.scss";
import { Launch } from "@carbon/icons-react";

const web = gql`
    query web {
        allWeb {
            nodes {
            id
            title
            webFields {
                link
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

export default async function Web() {

    try {

        const { data } = await client.query({

            query: web,

        });

        return (

            <>

                <div className="row">

                    <div className={`${styles.wrapper} wrapper`}>

                        <div className={styles.webItems}>

                            {data.allWeb.nodes.map((web) => (

                                <article key={web.id} className={styles.webItem}>

                                    <div className={styles.Image} style={{ backgroundImage: `url(${web.featuredImage.node.mediaItemUrl})` }}>

                                    <a className={styles.imageLink} href={web.webFields.link} target="_blank" rel="noreferrer"></a>

                                    </div> {/* .ImageWrapper */}

                                    <div className={styles.content}>

                                        <h3>{web.title}</h3>

                                        <a className={styles.link} href={web.webFields.link} target="_blank" rel="noreferrer">

                                            <span>View website</span>

                                            <Launch />

                                        </a> {/* .link */}

                                    </div> {/* .content */}

                                </article> /* .webItem */

                            ))}

                        </div> {/* .webItems */}

                    </div>

                </div>

            </>

        );

    } catch (error) {

        console.error("Error fetching web data:", error);

        return <div>Error fetching data...</div>;

    }

};