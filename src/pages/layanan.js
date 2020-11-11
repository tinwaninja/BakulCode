import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import service_img from "../images/layanan.svg";
import SEO from "../components/seo";

const Layanan = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        to={url}
        className="text-2xl text-birumuda-700 hover:text-kuningmuda-600 hover:underline"
      >
        {title}
      </Link>
      <p className="text-justify">{children}</p>
    </div>
  );
};

const Layanans = ({ data }) => {
  const layanan = data.allMarkdownRemark.edges;

  return (
    <Layout headerClass="bg-white relative">
      <SEO title="Layanan" />

      <div
        className="min-h-screen pt-24 sm:pt-32 md:pt-64 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${service_img})` }}
      >
        <div className="container w-3/4 md:w-1/2 mt-20 font-serif font-hairline self-start">
          <h1 className="text-4xl md:text-5xl text-birumuda-700 px-2">
            Layanan
          </h1>
        </div>

        <div className="flex flex-wrap mt-10 md:mt-20">
          {layanan.map(({ node }) => (
            <Layanan
              title={node.frontmatter.title}
              url={node.frontmatter.path}
              key={node.frontmatter.path}
            >
              {node.excerpt}
            </Layanan>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ServicesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/layanan/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Layanans;
