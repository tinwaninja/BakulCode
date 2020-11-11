import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/markdown-github.css";

const svg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(226,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2382ddea'/%3E%3Cstop offset='1' stop-color='%2333c2d6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2336fff5' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2336fff5' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2336fff5' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2336fff5' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E")`;
const StyledButton = ({ className, children, ...props }) => {
  className = cx(
    "py-2 px-4 bg-kuningmuda-700 hover:bg-birumuda-600 text-base text-white font-bold uppercase rounded shadow-md hover:-translate-1",
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
const switchpilihan = ({ id }) => {
  switch(id) {
    case 'website':
      return (
        <React.Fragment>
              <div class="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 mt-2">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center text-birumuda-700">PAKET 1<br></br>Personal Blog</div>
                    <hr></hr>
                    <p class="text-gray-700 text-base p-3">
                      - Berbasis Wordpress<br></br>
                      - Menerima Pilihan Themes<br></br>
                      - Menerima Pemasangan Plugin<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base font-bold">
                    Include / Exclude
                    </p>
                    <p class="text-gray-700 text-base p-3">
                      - Domain TLD perTahun<br></br>
                      - Hosting perTahun<br></br>
                      - Pembuatan Plugin<br></br>
                      - Theme Premium<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base">
                    Misalnya : Blog Pribadi dan Blog Personal Hobi.
                     </p>
                  <hr></hr>
                  </div>
                  <p class="text-gray-700 text-xl font-bold text-center">
                      Rp. 100.000,00
                    </p>
                  <div className="text-center p-3">
                  <a href="/tentang">
                    <StyledButton>PILIH</StyledButton>
                  </a>
                 </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 mt-2">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center text-birumuda-700">PAKET 2<br></br>Personal PHP</div>
                    <hr></hr>
                    <p class="text-gray-700 text-base p-3">
                      - Berbasis PHP, JQuery dan HTML 5<br></br>
                      - Database MySQL<br></br>
                      - Konsultasi Tujuan Bisnis<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base font-bold">
                    Include / Exclude
                    </p>
                    <p class="text-gray-700 text-base p-3">
                      - Domain TLD perTahun<br></br>
                      - Hosting perTahun / Server perBulan<br></br>
                      - Keamanan Website<br></br>
                      - Pembuatan API<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base">
                    Misalnya : Website portofolio, komunitas, galeri dan profil personal.
                     </p>
                  <hr></hr>
                  </div>
                  <p class="text-gray-700 text-xl font-bold text-center">
                      Rp. 500.000,00
                    </p>
                  <div className="text-center p-3">
                  <a href="/tentang">
                    <StyledButton>PILIH</StyledButton>
                  </a>
                 </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 mt-2">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center text-birumuda-700">PAKET 3<br></br>Personal Javascript</div>
                    <hr></hr>
                    <p class="text-gray-700 text-base p-3">
                      - Berbasis Node JS<br></br>
                      - Database MySQL / MongoDB<br></br>
                      - Konsultasi Tujuan Bisnis<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base font-bold">
                    Include / Exclude
                    </p>
                    <p class="text-gray-700 text-base p-3">
                      - Domain TLD perTahun<br></br>
                      - Hosting perTahun / Server perBulan<br></br>
                      - Keamanan Website<br></br>
                      - Pembuatan API<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base">
                    Misalnya : Website portofolio, komunitas, galeri dan profil personal.
                     </p>
                  <hr></hr>
                  </div>
                  <p class="text-gray-700 text-xl font-bold text-center">
                      Rp. 1.500.000,00
                    </p>
                  <div className="text-center p-3">
                  <a href="/tentang">
                    <StyledButton>PILIH</StyledButton>
                  </a>
                 </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 mt-2">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center text-birumuda-700">PAKET 4<br></br>Perusahaan Blog</div>
                    <hr></hr>
                    <p class="text-gray-700 text-base p-3">
                      - Berbasis Wordpress<br></br>
                      - Menerima Pilihan Themes Premium<br></br>
                      - Menerima Pembuatan Plugin<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base font-bold">
                    Include / Exclude
                    </p>
                    <p class="text-gray-700 text-base p-3">
                      - Domain TLD perTahun<br></br>
                      - Hosting perTahun / Server perBulan<br></br>
                      - Keamanan Website<br></br>
                      - Pembuatan API<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base">
                    Misalnya : Portal Berita dan Blog Perusahaan.
                     </p>
                  <hr></hr>
                  </div>
                  <p class="text-gray-700 text-xl font-bold text-center">
                      Rp. 7.500.000,00
                    </p>
                  <div className="text-center p-3">
                  <a href="/tentang">
                    <StyledButton>PILIH</StyledButton>
                  </a>
                 </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 mt-2">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center text-birumuda-700">PAKET 5<br></br>Perusahaan PHP</div>
                    <hr></hr>
                    <p class="text-gray-700 text-base p-3">
                      - Berbasis PHP, JQuery dan HTML 5<br></br>
                      - Database MySQL<br></br>
                      - Konsultasi Tujuan Bisnis<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base font-bold">
                    Include / Exclude
                    </p>
                    <p class="text-gray-700 text-base p-3">
                      - Domain TLD perTahun<br></br>
                      - Hosting perTahun / Server perBulan<br></br>
                      - Keamanan Website<br></br>
                      - Pembuatan API<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base">
                    Misalnya : Company Profile, Sistem Informasi Perusahaan dan Marketplace.
                     </p>
                  <hr></hr>
                  </div>
                  <p class="text-gray-700 text-xl font-bold text-center">
                      Rp. 25.000.000,00
                    </p>
                  <div className="text-center p-3">
                  <a href="/tentang">
                    <StyledButton>PILIH</StyledButton>
                  </a>
                 </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 mt-2">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center text-birumuda-700">PAKET 6<br></br>Perusahaan Javascript</div>
                    <hr></hr>
                    <p class="text-gray-700 text-base p-3">
                      - Berbasis Node JS<br></br>
                      - Database MySQL / MongoDB<br></br>
                      - Konsultasi Tujuan Bisnis<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base font-bold">
                    Include / Exclude
                    </p>
                    <p class="text-gray-700 text-base p-3">
                      - Domain TLD perTahun<br></br>
                      - Hosting perTahun / Server perBulan<br></br>
                      - Keamanan Website<br></br>
                      - Pembuatan API<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base">
                    Misalnya : Company Profile, Sistem Informasi Perusahaan dan Marketplace.
                     </p>
                  <hr></hr>
                  </div>
                  <p class="text-gray-700 text-xl font-bold text-center">
                      Rp. 50.000.000,00
                    </p>
                  <div className="text-center p-3">
                  <a href="/tentang">
                    <StyledButton>PILIH</StyledButton>
                  </a>
                 </div>
              </div>
              </React.Fragment>
              
      );
      case 'tools-cli':
      return (
        <React.Fragment>
               <div class="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 mt-2">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center text-birumuda-700">PAKET 7<br></br>Tools</div>
                    <hr></hr>
                    <p class="text-gray-700 text-base p-3">
                      - Berbasis PHP / Node JS<br></br>
                      - Interface CLI<br></br>
                      - Konsultasi Tujuan Tools<br></br>
                      - Dokumentasi<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base">
                    Misalnya : Scraping dan refactoring  API.
                     </p>
                  <hr></hr>
                  </div>
                  <p class="text-gray-700 text-xl font-bold text-center">
                      Rp. 1.000.000,00
                    </p>
                  <div className="text-center p-3">
                  <a href="/tentang">
                    <StyledButton>PILIH</StyledButton>
                  </a>
                 </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 mt-2">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center text-birumuda-700">PAKET 8<br></br>Artificial Intelligence</div>
                    <hr></hr>
                    <p class="text-gray-700 text-base p-3">
                      - Berbasis PHP / Python<br></br>
                      - Interface CLI / Jupyter Notebook<br></br>
                      - Konsultasi Tujuan AI<br></br>
                      - Dokumentasi<br></br>
                    </p>
                    <hr></hr>
                    <p class="text-gray-700 text-base">
                    Misalnya : Pengujian Algoritma.
                     </p>
                  <hr></hr>
                  </div>
                  <p class="text-gray-700 text-xl font-bold text-center">
                      Rp. 10.000.000,00
                    </p>
                  <div className="text-center p-3">
                  <a href="/tentang">
                    <StyledButton>PILIH</StyledButton>
                  </a>
                 </div>
              </div>
              </React.Fragment>
        );
        default:
          return (
            <React.Fragment>
              <p class="text-gray-700 text-base">
                    Tidak ada pilihan paket layanan yang tersedia.
                     </p>
              </React.Fragment>
          );
  }
};

export default ({ data }) => {
  const { layanan } = data;
  const title = layanan.frontmatter.title;
  const id = layanan.frontmatter.id;
 
  return (
    <Layout headerClass="relative bg-white" bodyClass="px-0 md:px-0 lg:px-0">
      <SEO title={title} />

      <div
        className="min-h-screen flex flex-col items-start bg-no-repeat bg-fixed bg-cover"
        style={{ backgroundImage: svg }}
      >
        <div className="mt-56 bg-white w-full pb-16 mb-20 skew-y-5">
          <div className="container mx-auto px-6 md:px-10 lg:px-24 pt-16 -skew-y-5">
            <h2 className="text-5xl text-birumuda-700">
              {title}
            </h2>
            <div className="markdown-body text-justify">
              <div dangerouslySetInnerHTML={{ __html: layanan.html }}></div>
            </div>
            <div className="flex flex-wrap justify-center p-2">
            {switchpilihan({id})}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    layanan: markdownRemark(id: { eq: $id }) {
      frontmatter {
        id
        path
        image
        title
      }
      html
    }
  }
`;
