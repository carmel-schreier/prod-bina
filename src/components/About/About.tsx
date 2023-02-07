import "./About.css";
import Typography from "@material-ui/core/Typography";
import { padding } from "@mui/system";
import Footer from "../Footer/Footer";
function About() {
  return (
    <>
      <div className="about-page-container">
        <div className="about-container container-fluid d-flex mt-5 ">
          <Typography variant="h4" color="primary" className="about-title">
            Financial Real-Time Automated Videos
          </Typography>

          <Typography
            variant="inherit"
            color="textSecondary"
            className="about-text"
          >
            <br />
            Vynopsis is a provider of white label, real time financial news
            broadcasts.
            <br /> The videos are marketed to brokers, trading platforms,
            financial websites, and other customers who wish to distribute
            visual, high-quality and accessible financial information to their
            clients or potential clients.
            <br />
            <br />
            Our production is completely automated, with new customized movies
            created on demand, 24/7, to contain real time data, news, and
            technical analysis for any requested financial instrument.
            <br />
            <br />
            Our research covers the main world stock-markets, U.S. and U.K.
            traded equities, the global bond market, currencies and commodities,
            as well as Bitcoin and other cryptocurrencies.
          </Typography>
        </div>
        <div className="about-bottom"></div>
      </div>
      <Footer />
    </>
  );
}

export default About;
