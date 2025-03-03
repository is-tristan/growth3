import Header from '@/components/global/header';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import Image from 'next/image';
import styles from "@/styles/pages/marketing-inner.module.scss"
import ContactCTA from '@/components/global/contactCTA';

const marketingInner = gql`
query marketingInner($slug: String!) {
  marketingBy(slug: $slug) {
    title
    featuredImage {
      node {
        sourceUrl
      }
    }
    marketingFields {
      introduction {
        projectOverview
        roleAndTeam
        tools
        clientdateduration
      }
      context {
        heading
        contextDescription
        contextImage {
          node {
            mediaItemUrl
          }
        }
      }
      goals {
        goalsDescription
      }
      researchAndAnalysis {
        rnaHeading
        rnaDescription
        image1 {
          node {
            mediaItemUrl
          }
        }
      }
      visualDesignBranding {
        visualDesignBrandingImage {
          node {
            mediaItemUrl
          }
        }
      }
      conclusion {
        conclusionHeading
        conclusionDescription
        conclusionImage1 {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`;

console.log(marketingInner);

export default async function MarketingInner({ params }) {

    const { slug } = await params;

    try {

        const { data } = await client.query({
            query: marketingInner,
            variables: { slug },
        });

        return (

            <>

                <Header />

                <article className={styles.row}>

                    <div className={styles.header} style={{
                        backgroundImage: `url(${data.marketingBy.featuredImage.node.sourceUrl})`,
                    }}>

                        <div className={`${styles.wrapper} wrapper`}>

                            <h1>{data.marketingBy.title}</h1>

                        </div> {/* .wrapper */}

                    </div> {/* .header */}

                    <div className={`${styles.wrapper} wrapper`}>

                        <div className={styles.introduction}>

                            <div className={`${styles.heading} heading`}>

                                <h2>Project Overview</h2>

                                <p>{data.marketingBy.marketingFields.introduction.projectOverview}</p>

                            </div> {/* .heading */}

                            <div className={styles.cols}>

                                {data.marketingBy.marketingFields.introduction.roleAndTeam && (

                                    <div className={styles.col}>

                                        <h3>Role & Team</h3>

                                        <p>{data.marketingBy.marketingFields.introduction.roleAndTeam}</p>

                                    </div> /* .col */

                                )} {/* role & team */}

                                {data.marketingBy.marketingFields.introduction.tools && (

                                    <div className={styles.col}>

                                        <h3>Tools</h3>

                                        <p>{data.marketingBy.marketingFields.introduction.tools}</p>

                                    </div> /* .col */

                                )} {/* tools */}

                                {data.marketingBy.marketingFields.introduction.clientdateduration && (

                                    <div className={styles.col}>

                                        <h3>Duration</h3>

                                        <p>{data.marketingBy.marketingFields.introduction.clientdateduration}</p>

                                    </div> /* .col */

                                )} {/* .client/date/duration */}

                            </div> {/* .cols */}

                        </div> {/* .introduction */}

                        {data.marketingBy.marketingFields.context.contextDescription && (

                            <div className={styles.context}>

                                <div className={styles.dualCols}>

                                    <div className={styles.col}>

                                        <div className={`${styles.heading} heading`}>

                                            <h2>{data.marketingBy.marketingFields.context.heading}</h2>

                                            <div dangerouslySetInnerHTML={{ __html: data.marketingBy.marketingFields.context.contextDescription }} />

                                        </div> {/* .heading */}

                                    </div> {/* .col */}

                                    <div className={`${styles.col} ${styles.imageCol}`} style={{ backgroundImage: `url(${data.marketingBy.marketingFields.context.contextImage.node.mediaItemUrl})` }}>

                                    </div> {/* .imageCol */}

                                </div> {/* .dualCols */}

                            </div>

                        )} {/* .context */}

                        {data.marketingBy.marketingFields.goals.goalsDescription && (

                            <div className={styles.goals}>

                                <div className={styles.heading}>

                                    <h2>Goals</h2>

                                    <div style={{ marginTop: "1rem", marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: data.marketingBy.marketingFields.goals.goalsDescription }} />

                                </div> {/* .heading */}

                            </div>

                        )} {/* .goals */}

                        {data.marketingBy.marketingFields.researchAndAnalysis.rnaHeading && (

                            <div className={styles.researchAndAnalysis}>

                                <div className={`${styles.dualCols} ${styles.reversed}`}>

                                    <div className={styles.col}>

                                        <div className={`${styles.heading} heading`}>

                                            <h2>{data.marketingBy.marketingFields.researchAndAnalysis.rnaHeading}</h2>

                                            <div dangerouslySetInnerHTML={{ __html: data.marketingBy.marketingFields.researchAndAnalysis.rnaDescription }} />

                                        </div> {/* .heading */}

                                    </div> {/* .col */}

                                    <div className={`${styles.col} ${styles.imageCol}`} style={{ backgroundImage: `url(${data.marketingBy.marketingFields.researchAndAnalysis.image1.node.mediaItemUrl})` }}>

                                    </div> {/* .imageCol */}

                                </div> {/* .dualCols */}

                            </div>

                        )} {/* .researchAndAnalysis */}

                        {data.marketingBy.marketingFields.visualDesignBranding.visualDesignBrandingImage && (

                            <div className={styles.visualDesignBranding}>

                                <h2>Design & Branding</h2>

                                <div className={styles.image}>

                                    <Image
                                        src={data.marketingBy.marketingFields.visualDesignBranding.visualDesignBrandingImage.node.mediaItemUrl}
                                        alt="Visual design and branding"
                                        fill
                                        style={{objectFit: "contain"}}
                                    />

                                </div> {/* .image */}

                            </div> 

                        )} {/* .visualDesignBranding */}

                        {data.marketingBy.marketingFields.conclusion.conclusionHeading && (

                            <div className={styles.conclusion}>

                                <div className={`${styles.heading} ${styles.headingCentered}`}>

                                    <h2>{data.marketingBy.marketingFields.conclusion.conclusionHeading}</h2>

                                    <div dangerouslySetInnerHTML={{ __html: data.marketingBy.marketingFields.conclusion.conclusionDescription }} />

                                </div> {/* .heading */}

                                <div className={styles.lastImage}>

                                    <Image
                                    src={data.marketingBy.marketingFields.conclusion.conclusionImage1.node.mediaItemUrl}
                                    alt="Conclusion"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    />

                                </div> {/* .paralax */}

                            </div> 

                        )} {/* .conclusion */}

                    </div> {/* .wrapper */}

                </article> {/* .row */}

                <ContactCTA />

            </>
        )


    } catch (error) {

        console.error("Error fetching marketing data:", error);

        return <div>Error loading marketing...</div>;

    }
}