import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Team = props => {
  return (
    <div>
      <p className="oit">
        <h2>안녕하세요 여러분 </h2>
        <h1>Oit, this is Our Team !!</h1>
      </p>
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="overflow">
              <img
                src="https://pbs.twimg.com/media/DxAi6SMWoAYd6fb.jpg"
                alt="Okay"
                width="200px"
              />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Sutanto Adi Nugroho</h4>
              <h6>Front End Developer</h6>
              <p className="card-text text-secondary">
                As a Front End Developer, he's so smart and attractive. He says,
                the programming is his wife and really love his wife. And he
                also always excited to learn all about his wife. For him, the
                error is his son.
              </p>
              <a
                href="https://github.com/SutantoAdiNugroho"
                className="btn btn-outline-success"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sutanto-adi-nugroho-75b16218a/"
                className="btn btn-outline-success"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="overflow">
              <img
                src="https://i.pinimg.com/736x/f1/fb/17/f1fb17e308b7e3fcc053d4a849c692ba.jpg"
                alt="Okay"
                width="200px"
              />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Rizkianakbar</h4>
              <h6>Full Stack Developer</h6>
              <p className="card-text text-secondary">
                He's very smart. He always wants to know everything related to
                programming, that is the reason why he can become a full stack
                developer and have too much experience about programming.
              </p>
              <a
                href="https://github.com/rizkianakbar"
                className="btn btn-outline-success"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rizkian-akbar-2624a6154/"
                className="btn btn-outline-success"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="overflow">
              <img
                src="https://i.pinimg.com/236x/4d/8d/6c/4d8d6c22156bcc835603eb4662af3318.jpg"
                alt="Okay"
                width="200px"
              />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Donna Setiawan</h4>
              <h6>Back End Developer</h6>
              <p className="card-text text-secondary">
                Someone who doesn't talk much but has so much knowledge. He
                likes something that looks difficult, maybe that's the reason
                why he is a back end developer now.
              </p>
              <a
                href="https://github.com/dannasetia11"
                className="btn btn-outline-success"
              >
                GitHub
              </a>
              <a
                href="https://github.com/dannasetia11"
                className="btn btn-outline-success"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="overflow">
              <img
                src="https://i.pinimg.com/736x/0f/f4/8b/0ff48b6c8161635367d8fdcec2b42339.jpg"
                alt="Okay"
                width="200px"
              />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Mega Iriantika Kasmin</h4>
              <h6>UI / UX Designer</h6>
              <p className="card-text text-secondary">
                She is an ordinary girl but a little different from most girls.
                She spent his time to learning about UI / UX, and now she has
                become a reliable UI / UX Designer.
              </p>
              <a
                href="https://github.com/megakasmin"
                className="btn btn-outline-success"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mega-iriantika-398150197/"
                className="btn btn-outline-success"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
