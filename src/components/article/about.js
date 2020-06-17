import React from "react";
import ArticleStyled from "./styles";
import { Divider } from 'antd';

const About = () => {

  return (
    <ArticleStyled>
      <section className='hero' style={{ backgroundImage: `url(require("src/assets/images/deva-darshan-2XUfjLp7HYY-unsplash.jpg"))` }}>
        <div className='hero-text'>
          <h1>About</h1>
          <h3>The What, Why and How of Streetsmarts</h3>
        </div>
      </section>

      <section className='article-text'>
        <p>Streetsmarts lets you compare vehicles (over 10,000!) by, not only their purchase value, but what you can expect to pay each year of ownership up to 5 years and its estimated environmental impact. Sure, you can go to a bunch of different sources to find this out on your own, but why not just do it all in one place?</p>
        <br />
        <p>Here at Streetsmarts, we want to empower the consumer to find the right car for them. No bias. No gimmicks. We understand buying a car is, more often than not, about convenience and cost than performance. So we break it down for you, quickly and easily, so you can get what you really need—and what you want, too.</p>
        <br />
        <h3>So where are we getting our data?</h3>
          <p>We use industry standard practices to calculate an estimated individual vehicle’s future cost and emissions.</p>

          <h3>How do we know it’s reliable?</h3>
          <p>The Environmental Protection Agency (EPA) has a catalogue of every car driven within the United States, even foreign-made and lesser-known makes. The EPA calculations are based on these assumptions:</p>
          <br />
            <ul>
              <li>The vehicle will be driven 15,000 miles per year</li>
              <li>Gasoline costs $3.70 per gallon</li>
              <li>Diesel costs $3.90 per gallon</li>
              <li>Electricity costs $0.12 kW/hr</li>
              <li>Compressed natural gas costs $2.05 per gasoline gallon equivalent</li>
              <li>Hydrogen costs $5.55 per kg</li>
              <li>Gasoline costs $3.95 per gallon with an added <a href="https://www.epa.gov/fueleconomy/gas-guzzler-tax">Gas Guzzler Tax</a> </li>
            </ul>
          <br />
          <p>This puts every car on a level playing field. Obviously, individual results will vary based on actual cost of fuel, driving conditions, driving styles, actual maintenance of the vehicle, unforeseen events, and other factors.</p>
          <br />
          <p>You can learn more about this at the <a href="https://www.fueleconomy.gov/feg/Find.do?action=bt1">EPA’s Learn About the Label page</a>.</p>
<Divider />
        <h1 className='team-title'>Meet the Team</h1>
        <div class="team">
          <div class="teamMember">
              <img
                className='member-photo'
                src="https://ca.slack-edge.com/ESZCHB482-W0138D6R6Q0-3da4fdff22bd-512" 
                alt="Wes Moody" />
              <div class="content">
                <h3>Wes Moody</h3>
                <p>Project Lead</p>
                <div className='icons'>
                  <a href="">
                    <img src="https://github.com/favicon.ico"
                      alt="GitHub icon" /></a>
                  <a href="https://www.linkedin.com/in/wesley-moody">
                    <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" 
                      alt="LinkedIn icon" /></a>
                </div>
              </div>
          </div>

          <div class="teamMember">
            <img
              className='member-photo'
              src="https://ca.slack-edge.com/ESZCHB482-W012X6VGP5X-f41e79b2f18c-512"
              alt="Cornelius Hardy" />
            <div class="content">
              <h3>Cornelius Hardy</h3>
              <p>UX Designer</p>
              <div className='icons'>
                <a href="https://www.linkedin.com/in/corneliushardy">
                  <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn icon" /></a>
              </div>
            </div>
          </div>

          <div class="teamMember">
            <img
              className='member-photo'
              src="https://avatars3.githubusercontent.com/u/49764112?s=460&u=8ab39b1438191f5f94f11f1fb042154c3e54716a&v=4"
              alt="Mikio Harman" />
            <div class="content">
              <h3>Mikio Harman</h3>
              <p>Data Scientist</p>
              <div className='icons'>
                <a href="https://github.com/mpHarm88">
                  <img src="https://github.com/favicon.ico"
                    alt="GitHub icon" /></a>
                <a href="https://www.linkedin.com/in/mikio-harman">
                  <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn icon" /></a>
              </div>
            </div>
          </div>

          <div class="teamMember">
            <img 
              className='member-photo'
              src="https://avatars2.githubusercontent.com/u/59704644?s=460&u=63f5db90b599e70770504e2b86047dd91dc441e2&v=4"
              alt="Jonathan Nguyen-Dang" />
            <div class="content">
              <h3>Jonathan Nguyen-Dang</h3>
              <p>Data Scientist</p>
              <div className='icons'>
                <a href="https://github.com/JonNData">
                  <img src="https://github.com/favicon.ico"
                    alt="GitHub icon" /></a>
                <a href="https://www.linkedin.com/in/jonathan-nguyen">
                  <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn icon" /></a>
              </div>
            </div>
          </div>

          <div class="teamMember">
            <img
              className='member-photo'
              src="https://avatars3.githubusercontent.com/u/30095633?s=460&u=394f507349eee136ae1beec2112436b13de9609a&v=4"
              alt="Will Stauffer-Norris" />
            <div class="content">
              <h3>Will Stauffer-Norris</h3>
              <p>Data Scientist</p>
              <div className='icons'>
                <a href="https://github.com/willstauffernorris">
                  <img src="https://github.com/favicon.ico"
                    alt="GitHub icon" /></a>
                <a href="https://www.linkedin.com/in/willsn">
                  <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn icon" /></a>
              </div>
            </div>
          </div>

          <div class="teamMember">
            <img
              className='member-photo'
              src="https://ca.slack-edge.com/ESZCHB482-W012JQ3C81H-4a18f12203a6-512" 
              alt="Gunnar Arnporsson" />
            <div class="content">
              <h3>Gunnar Arnporsson</h3>
              <p>Web Developer:<br />Back End</p>
              <div className='icons'>
                <a href="https://github.com/gunnarthorson">
                  <img src="https://github.com/favicon.ico" 
                    alt="GitHub icon" /></a>
                <a href="https://www.linkedin.com/in/gunnar-thorson">
                  <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn icon" /></a>
              </div>
            </div>
          </div>

          <div class="teamMember">
            <img
              className='member-photo'
              src="https://ca.slack-edge.com/ESZCHB482-W012BRSJU5C-48385005a92c-512"
              alt="Steven Wang" />
            <div class="content">
              <h3>Steven Wang</h3>
              <p>Web Developer:<br />Back End</p>
              <div className='icons'>
                <a href="https://github.com/stevenwang2060">
                  <img src="https://github.com/favicon.ico" 
                    alt="GitHub icon" /></a>
                <a href="https://www.linkedin.com/in/steven-wang">
                  <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn icon" /></a>
              </div>
            </div>
          </div>

          <div class="teamMember">
            <img
              className='member-photo'
              src="https://avatars2.githubusercontent.com/u/2229184?s=460&u=7f43cd85a4da972dacc5b0fcb4f62816b96d771d&v=4"
              alt="LeRoyce Pearson" />
            <div class="content">
              <h3>LeRoyce Pearson</h3>
              <p>Web Developer:<br />Back End & Front End</p>
              <div className='icons'>
                <a href="https://github.com/leroycep">
                  <img src="https://github.com/favicon.ico"
                    alt="GitHub icon" /></a>
                <a href="https://www.linkedin.com/in/leroyce-pearson">
                  <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn icon" /></a>
              </div>
            </div>
          </div>

          <div class="teamMember">
            <img
              className='member-photo'
              src="https://avatars1.githubusercontent.com/u/55899345?s=460&u=6a13a00a824fb58a2e48478e9988a195f1bf5d07&v=4" 
              alt="Issac Moreno" />
            <div class="content">
              <h3>Issac Moreno</h3>
              <p>Web Developer:<br />Front End</p>
              <div className='icons'>
                <a href="https://github.com/issac909">
                  <img src="https://github.com/favicon.ico"
                    alt="GitHub icon" /></a>
                <a href="https://www.linkedin.com/in/issac-moreno">
                  <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn icon" /></a>
              </div>
            </div>
          </div>
          
          <div class="teamMember">
            <img
              className='member-photo'
              src="https://avatars1.githubusercontent.com/u/53796411?s=460&u=e79e83f36867f4ed187d711ab1b9eb6f89dda91a&v=4"
              alt="Hysen Sisco" />
            <div class="content">
              <h3>Hysen Sisco</h3>
              <p>Web Developer:<br />Front End</p>
              <div className='icons'>
                <a href="ttps://github.com/hsisco">
                  <img src="https://github.com/favicon.ico"
                    alt="GitHub icon" /></a>
                <a href="https://www.linkedin.com/in/hysensisco">
                  <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn icon" /></a>
              </div>
            </div>
          </div>
          
          <div class="teamMember">
            <img
              className='member-photo'
              src="https://ca.slack-edge.com/ESZCHB482-W0138D8NFJL-e114f1c5d1c3-512"
              alt="Brian Wardwell" />
            <div class="content">
              <h3>Brian Wardwell</h3>
              <p>Web Developer:<br />Front End</p>
              <div className='icons'>
                <a href="https://github.com/b-dubz79">
                  <img src="https://github.com/favicon.ico"
                    alt="GitHub icon" /></a>
                <a href="https://www.linkedin.com/in/brianwardwell">
                  <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="LinkedIn icon" /></a>
              </div>
            </div>
          </div>

        </div>
      </section>

        <figcaption> Cover photo by <a href="https://unsplash.com/@jwimmerli?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Deva Darshan</a> on <a href="applewebdata://1F1C6055-8A4E-4A91-9236-A907079C721A/collections/10738520/streetsmarts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> </figcaption>
    </ArticleStyled>
  );
};

export default About;