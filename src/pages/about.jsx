import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="page about">
      <h1>Some facts about me</h1>
      <div className="container">
        <div className="row-1">
          <div className="col-1">
            <img
              src="https://i.lensdump.com/i/1nhrnD.jpg"
              alt="1nhrnD.jpg"
              border="0"
              className=" activity gorge"
            />
            <div className="gorgeText">
              <div className="text">
                <h5>
                  I love to explore!
                  <br /> I enjoy hinking a new area. <br /> I enjoy seeing new views or
                  <br /> experiencing new things.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img
              src="https://i3.lensdump.com/i/1nhTOM.jpg"
              alt="1nhTOM.jpg"
              border="0"
              className="activity tucker"
            />
            <div className="tuckerText">
              <div className="text">
                <h5>
                  Horseback riding is one of <br /> my biggest passions <br /> I have been
                  riding most of my life <br /> and hope to continue riding <br />
                  in the future.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="col-1">
            <img
              src="https://i1.lensdump.com/i/1nht5q.jpg"
              alt="1nht5q.jpg"
              border="0"
              className="activity whiskey"
            />
            <div className="whiskeyText">
              <div className="text">
                <h5>
                  While at home, I am overjoyed to spend
                  <br /> some quality time with my cat Whiskey. Whiskey is a large part of
                  my life. <br />
                  We often refer to him as <br />a dog in cat form.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
