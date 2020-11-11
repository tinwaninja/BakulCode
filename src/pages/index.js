import React from "react";
import cx from "classnames";
import home from "../images/home.svg";
import branding from "../images/noun_branding_1885335.svg";
import processing from "../images/noun_The Process_1885341.svg";
import modeling from "../images/noun_3d modeling_1885342.svg";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const StyledButton = ({ className, children, ...props }) => {
  className = cx(
    "py-2 px-4 bg-birumuda-700 hover:bg-birumuda-600 text-base text-white font-bold uppercase rounded shadow-md hover:-translate-1",
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Service = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        to={url}
        className="text-2xl text-birumuda-700 hover:text-indogo-600 hover:underline"
      >
        {title}
      </Link>
      <p>{children}</p>
    </div>
  );
};

function Index({ data }) {
  const layanan = data.layanan.edges;

  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
      <div
        className="min-h-screen pt-24 sm:pt-32 md:pt-64 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="w-4/5 md:w-3/4 lg:w-7/12 mt-20 font-serif font-hairline self-start">
          <h1 className="text-3xl md:text-5xl text-birumuda-700 leading-tight">
            BakulCode
          </h1>
          <p className="text-base">
            BakulCode merupakan layanan pembuatan dan pengembangan perangkat<br />
            lunak pada platform website, mobile dan desktop dengan harga<br />
            yang terjangkau sesuai dengan alur bisnis perusahaan.<br />
          </p>
        </div>

        <div className="container w-3/4 sm:w-7/12 lg:w-5/12 xl:1/4 mt-10 self-start">
          <div
            className="bg-white rounded flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
            style={{
              boxShadow:
                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
            }}
          >
            <div className="flex-1">
              <p>
                <strong>Phone: </strong>
                +62852 9045 3769
              </p>
              <p>
                <strong>Email: </strong>
                support@bakulcode.com
              </p>
            </div>
            <div className="flex-initial mt-6 sm:mt-0">
              <Link to="/tentang">
                <StyledButton>Hubungi</StyledButton>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-16">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Layanan Kami
          </p>

          <div className="flex flex-wrap">
            {layanan.map(({ node }) => (
              <Service
                title={node.frontmatter.title}
                url={node.frontmatter.path}
                key={node.frontmatter.path}
              >
                {node.excerpt}
              </Service>
            ))}
          </div>

          <div className="self-center mt-8">
            <Link to="/layanan">
              <StyledButton>Lihat Semua Layanan</StyledButton>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-16">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Fitur Kami
          </p>

          <div className="flex flex-wrap justify-center items-stretch -mx-2">
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="branding" src={branding} />
                </div>
                <p className="text-2xl w-full">Konsultasi Gratis</p>
                <p>Anda dapat melakukan konsultasi secara gratis tanpa harus membeli layanan kami terlebih dahulu.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="processing" src={processing} />
                </div>
                <p className="text-2xl w-full">Tim Berkualitas</p>
                <p>Anggota tim kami memiliki pengalaman yang baik pada bidangnya.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={modeling} />
                </div>
                <p className="text-2xl w-full">Harga Flexibel</p>
                <p>Layanan yang kami tawarkan memiliki harga yang flexibel sesuai dengan kebutuhan bisnis anda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    layanan: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/layanan/" } }
      sort: { fields: [frontmatter___date], order: DESC }
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

export default Index;