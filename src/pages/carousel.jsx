import React from "react";
import Carousel from "better-react-carousel";
import "./carousel.css";

const Gallery = () => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop>
      <Carousel.Item>
        <h5>
          First JavaScript Page
          <br />
          <h6>SheCodes Project</h6>
        </h5>
        <a
          href="https://wizardly-franklin-fb362f.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="100%"
            src="https://i.lensdump.com/i/RLLxs9.png"
            alt="First JavaScript Page"
            border="0"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <h5>
          Vanilla JavaScript Hobby App <br />
          <h6>SheCodes Project</h6>
        </h5>
        <a
          href="https://eager-kepler-1dfd2c.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="100%"
            src="https://i3.lensdump.com/i/RLvpCZ.png"
            alt="Rock Climbing App"
            border="0"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <h5>
          Vanilla Weather App <br />
          <h6>SheCodes Project</h6>
        </h5>
        <a
          href="https://loving-edison-0f1d03.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="100%"
            src="https://i1.lensdump.com/i/RLv7zP.png"
            alt="Vanilla Weather App"
            border="0"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <h5>
          Vanilla Portfolio <br />
          <h6>SheCodes Project</h6>
        </h5>
        <a
          href="https://gallant-blackwell-d5a495.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="100%"
            src="https://i3.lensdump.com/i/RLvOwm.png"
            alt="Vanilla Portfolio"
            border="0"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <h5>
          Presentaion Guide <br />
          <h6>Personal Project</h6>
        </h5>
        <a
          href="https://taupe-paprenjak-f4b400.netlify.app/safety"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="100%"
            src="https://i2.lensdump.com/i/RLvzKo.png"
            alt="Presentation Guide"
            border="0"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <h5>
          React Weather App <br />
          <h6>SheCodes Project</h6>
        </h5>
        <a
          href="https://dreamy-hoover-321d96.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="100%"
            src="https://i1.lensdump.com/i/RLv7zP.png"
            alt="React Weather App"
            border="0"
          />
        </a>
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  );
};

export default Gallery;
/*src="https://i1.lensdump.com/i/1nht5q.jpg"
  alt="1nht5q.jpg"
  border="0"
  className="activity whiskey"*/
