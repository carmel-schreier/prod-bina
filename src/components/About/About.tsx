import "./About.css";
import Typography from "@material-ui/core/Typography";
function About() {
  return (
    <>
      <div className="about-page-container">
        <div className="about-container container-fluid d-flex mt-5 ">
          <Typography variant="h4" color="primary">
            Financial Real-Time Automated Videos
          </Typography>
          <Typography variant="inherit" color="textSecondary" className="mb-1">
            Vynopsis is a provider of white label, real time financial news
            broadcasts.
            <br /> The videos are marketed to brokers, trading platforms,
            financial websites, and other customers who wish to distribute
            visual, high-quality and accessible financial information to their
            clients or potential clients.
          </Typography>
          <p className="mt-3"></p>
          <p>
            Our production is completely automated, with new customized movies
            created on demand, 24/7, to contain real time data, news, and
            technical analysis for any requested financial instrument.
          </p>
          <p>
            Our research covers the main world stock-markets, U.S. and U.K.
            traded equities, the global bond market, currencies and commodities,
            as well as Bitcoin and other cryptocurrencies.
          </p>
        </div>
        <div className="about-bottom"></div>
      </div>
    </>
  );
}

export default About;
