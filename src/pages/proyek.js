import React from "react";
import { withPrefix, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Proyek = ({ title, name, Business, Image, Link, children }) => {
  return (
    <div className="w-full sm:w-1/2 -mx-2 flex flex-col items-start">
      <div className="mx-2">
        <h2 className="text-3xl text-birumuda-800"><a href={Link} target="_blank">{title}</a></h2>
        <p>
          <strong className="mr-2">{name}</strong>
          <span>{Business}</span>
        </p>
      </div>
      <div className="w-full mt-6 mx-2 bg-white-400">
          <img alt={name} className="object-scale-down h-48 w-full" src={withPrefix(Image)} />
        </div>
      <div className="w-full mt-6 mx-2">
        <blockquote className="testimonial-quote">{children}</blockquote>
      </div>
    </div>
  );
};

const Proyeks = ({ data }) => {
  const proyeks = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Portofolio Proyek" />
      <div className="min-h-screen pt-24 mb-20 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-16 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-birumuda-700">Portofolio Proyek</h1>
        </div>
        <div className="w-full mt-16 flex flex-row flex-wrap justify-between">
          {proyeks.map(({ node }) => {
            const { title, path, name, image, business, link } = node.frontmatter;
            const html = node.html;
            return (
              <Proyek key={path} title={title} name={name} Business={business} Image={withPrefix(image)} Link={link}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </Proyek>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Proyeks {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/proyek/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            name
            image
            business
            link
          }
          html
        }
      }
    }
  }
`;

export default Proyeks;
