import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="about time here" />
        <meta property="og:title" content="about" />
        <meta property="og:description" content="about time here" />
      </Helmet>
      About
    </div>
  );
};

export default Contact;
