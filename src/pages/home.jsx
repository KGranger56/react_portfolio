import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="page home">
      <h1>Welcome</h1>
      <h3>
        I hope to hear from you soon.
        <br />
        I'm glad you are here.
      </h3>
      <div className="content">
        <p className="one">
          I have been been the student on many occassions and have enjoyed the
          opportunities to enhance my skills or the chance to move into new opportunities.
        </p>
        <div className="second">
          <p className="two">
            <br />I am a motivated and organized individual. I work well with a team, but
            I am fully capable and happy to work alone. Throughout my career, I have had
            the opportunity to expirience many types of jobs, tasks, assignments, and
            management stytles.
          </p>
          <p className="three">
            <br />
            On the other hand, I have found myelf in the role of the teacher throughout my
            career. I try to teach with a goal of helping someone to learn how to evaluate
            a problem so that not only are they capable of learning the task I am
            teaching, but hopefully they will be able to apply the evaluation process to
            other challenges they face.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
