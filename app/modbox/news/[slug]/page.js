import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import Image from 'next/image';
import styles from "@/styles/pages/posts.module.scss";
import { Calendar } from "@carbon/icons-react";
import SocialShare from '@/components/misc/socialShare';
import Link from 'next/link';
import { ArrowLeft } from '@carbon/icons-react';
import Header from '@/components/global/header';

// Query to fetch a single post by slug
const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      date
        categories {
          nodes {
            name
          }
        }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

// Query to fetch all slugs
const GET_ALL_POST_SLUGS = gql`
  query GetAllPostSlugs {
    posts {
      nodes {
        slug
      }
    }
  }
`;

export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_ALL_POST_SLUGS,
  });

  return data.posts.nodes.map((post) => ({
    params: { slug: post.slug },
  }));
}

export default async function PostPage({ params }) {

  const { slug } = await params;

  let post = null;

  try {

    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { slug },
    });

    post = data.postBy;

  } catch (error) {

    console.error("Error fetching post:", error);

    return (

      <>

        <Header />

        <article className={`row banner ${styles.postsRow}`}>

          <div className={`wrapper ${styles.wrapper}`}>

            <div className={`heading centered ${styles.heading}`}>

              <h1>Error loading post. Please try again later.</h1>;

            </div>

          </div>

        </article>

      </>

    )
  }

  if (!post) {

    return (

      <>

        <Header />

        <article className={`row banner ${styles.postsRow}`}>

          <div className={`wrapper ${styles.wrapper}`}>

            <div className={`heading centered ${styles.heading}`}>

              <h1>Post not found</h1>;

            </div>

          </div>

        </article>

      </>

    )
  }

  const baseUrl = "https://growth3.co/modbox/news/";
  const fullUrl = `${baseUrl}${slug}`;

  return (

    <>

      <Header />

      <article className={`row banner ${styles.postsRow}`}>

        <div className={`wrapper ${styles.wrapper}`}>

          <div className={`heading centered ${styles.heading}`}>

            <h1>{post.title}</h1>

            <div className={styles.meta}>

              <div className={styles.date}>

                <Calendar />

                <span>Updated: {new Date(post.date).toLocaleDateString()}</span>

              </div> {/* .date */}

              <SocialShare url={fullUrl} title={post.title} />

            </div> {/* .meta */}

            <div className={styles.image}>

              {post.featuredImage && (

                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title || "Post item"}
                  fill
                  quality={80}
                />

              )}

            </div> {/* .image */}

          </div> {/* .heading */}

          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />

          <Link className="btn tLight" href="/modbox/news" style={{ width: "100" + "%" }}>

            <ArrowLeft />

            <span>Back to all posts</span>

          </Link>

        </div> {/* .wrapper */}

      </article>

    </>

  );

}
