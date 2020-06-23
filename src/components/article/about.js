import React from "react";
import ArticleStyled from "./styles";
import { Divider } from 'antd';
import { teamData } from '../common/team-data';

const About = () => {

  return (
    <ArticleStyled>
      <section className='hero'>
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
              <li>Gasoline costs $3.95 per gallon with an added <a href="https://www.epa.gov/fueleconomy/gas-guzzler-tax" rel="noopener noreferrer" target="_blank">Gas Guzzler Tax</a> </li>
            </ul>
          <br />
          <p>This puts every car on a level playing field. Obviously, individual results will vary based on actual cost of fuel, driving conditions, driving styles, actual maintenance of the vehicle, unforeseen events, and other factors.</p>
          <br />
          <p>You can learn more about this at the <a href="https://www.fueleconomy.gov/feg/Find.do?action=bt1" rel="noopener noreferrer" target="_blank">EPA’s Learn About the Label page</a>.</p>
      <Divider />
        <h1 className='team-title'>Meet the Team</h1>
        <div class="team">
          {teamData.map(cog => {
          return (
          <div class="teamMember">
              <img className='member-photo' src={cog.avatar} alt={cog.name} />
              <div class="content">
                <h3>{cog.name}</h3>
                <p>{cog.role}</p>
                <div className='icons'>
                  <a href={cog.github} rel="noopener noreferrer" target="_blank"><img className='github' src="https://github.com/favicon.ico" alt="GitHub icon" /></a>
                  <a href={cog.linkedin} rel="noopener noreferrer" target="_blank"><img className='linkedin' src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" alt="LinkedIn icon" /></a>
                </div>
              </div>
          </div>
          )})}
        </div>
      </section>
    </ArticleStyled>
  );
};

export default About;