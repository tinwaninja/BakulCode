import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Hubungi" />

      <div className="min-h-screen mb-6 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-24 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-birumuda-700">Hubungi Kami</h1>
        </div>
        <div
          className="w-full sm:w-3/4 lg:w-1/2 mt-10 px-6 py-4"
          style={{
            boxShadow:
              "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
          }}
        >
          <p>
            <strong>Whatsapp:</strong> 
            <a target="_blank" href="https://api.whatsapp.com/send?phone=6285290453769&text=Hai%2C%0A%0ASaya%20ingin%20melakukan%20konsultasi%20terkait%20dengan%20layanan%20yang%20diberikan%20oleh%20BakulCode.%0A%0ATerimakasih">+6285290453769</a>
          </p>
          <p>
            <strong>Email: </strong><a href="mailto:support@bakulcode.com">support@bakulcode.com</a>
          </p>
        </div>
        <div className="w-full">
          <h3 className="mt-10 text-2xl">Jam kerja</h3>
          <table className="w-full md:w-3/4 text-left w-full border-collapse">
            <tbody>
              <tr className="border-t h-10">
                <td className="font-semibold">Senin</td>
                <td>08:00</td>
                <td>-</td>
                <td>16:00</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Selasa</td>
                <td>08:00</td>
                <td>-</td>
                <td>16:00</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Rabu</td>
                <td>08:00</td>
                <td>-</td>
                <td>16:00</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Kamis</td>
                <td>08:00</td>
                <td>-</td>
                <td>16:00</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Jumat</td>
                <td>Tutup</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Sabtu</td>
                <td>10:00</td>
                <td>-</td>
                <td>14:00</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Minggu</td>
                <td>10:00</td>
                <td>-</td>
                <td>14:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
