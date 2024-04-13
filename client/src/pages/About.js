import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Vishu Copy House"}>
      <div className="row contactus mb-9">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <div className="text-justify mt-2 ">
          <p>We are Bareilly's premier brand, renowned for crafting exquisite notebooks, registers, and related essentials.</p>
          <p>With a legacy of expertise, we pride ourselves on delivering unparalleled quality and craftsmanship to our esteemed clientele.</p>
          <p>At our core, excellence is not just a standard—it's our obsession. From sourcing the finest materials to meticulous production, we ensure perfection in every detail.</p>
          <p>Choose us as your trusted partner, and experience the unmatched dedication and finesse that sets us apart in the realm of premium stationery.</p>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default About;