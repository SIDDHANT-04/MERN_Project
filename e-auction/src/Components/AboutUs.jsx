import React from "react";
import NavigationBar from "./NavigationBar";
import FooterBar from "./FooterBar"

export function AboutUs(){
  return(  
    <>  
     <NavigationBar/> 
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="section-title">About Us</h1>
            <h2 className="section-subtitle">Team 29</h2>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="./images/Jayesh.jpg"
                className="team-img"
                alt="pic"
              />
              <h3>Jayesh Mahajan</h3>
              <div className="team-info">
                <p>Head of Team</p>
              </div>
              <p>
                Jayesh is our co-founder and has developed search strategies
                for a variety of clients from international brands to medium
                sized businesses for over five years.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="./images/Kiran.jpg"
                className="team-img"
                alt="pic"
              />
              <h3>Kiran Vadde</h3>
              <div className="team-info">
                <p>Team Member</p>
              </div>
              <p>
                Graduating with a degree in Electronics, Kiran has
                always loved writing and now he's lucky enough to do it as part
                of his new job inside our agency.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="./images/Sid2.jpg"
                className="team-img"
                alt="pic"
              />
              <h3>Siddhant Deshmukh</h3>
              <div className="team-info">
                <p>Team Member</p>
              </div>
              <p>
                Siddhant first fell in love with digital marketing at the
                university. He loves to learn, and looks forward to being part
                of this new exciting industry for years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterBar/>
    </>
  )
}

export default AboutUs;