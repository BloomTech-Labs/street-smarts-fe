import React from "react";
import ArticleStyled from "./styles";

const EcoDriving = () => {

  return (
    <ArticleStyled>
      <section className='hero'>
        <div className='hero-text'>
          <h1>Eco-Driving</h1>
          <h3>Fuel-efficient driving techniques</h3>
        </div>
      </section>

      <section className='article-text'>
        <p>Fuel-efficient driving can save you hundreds of dollars in fuel each year, improve road safety and prevent wear on your vehicle. Adopt these 5 fuel-efficient driving techniques to lower your vehicle’s fuel consumption and carbon dioxide emissions by as much as 25%.</p>
        
        <h2>1 | Accelerate gently</h2>
        <p>The harder you accelerate, the more fuel you use. In the city, you can use less fuel by easing onto the accelerator pedal gently. To be as fuel-efficient as possible, take about 5 seconds to accelerate your vehicle up to 20 kilometers/15 miles per hour from a stop. Imagine an open cup of coffee on the dashboard. Don’t spill it!</p>
        
        <h2>2 | Maintain a steady speed</h2>
        <p>When your speed dips and bursts, you use more fuel—and spend more money—than you need to. Tests have shown that varying your speed up and down between 75 and 85 km (46 and 52 miles) per hour every 18 seconds can increase your fuel use by 20%.</p>
        <p>Consider using cruise control for highway driving, where conditions permit. Be mindful, however, that little variations in speed can actually be good when gravity does the work. Where traffic patterns permit, allow your speed to drop when you travel uphill, then regain your momentum as you roll downhill.</p>
        
        <h2>3 | Anticipate traffic</h2>
        <p>Look ahead while you’re driving to see what is coming up. And keep a comfortable distance between your vehicle and the one in front of you. By looking closely at what pedestrians and other cars are doing, and imagining what they’ll do next, you can keep your speed as steady as possible and use less fuel. It’s also safer to drive this way.</p>
        
        <h2>4 | Avoid high speeds</h2>
        <p>Keep to the speed limit and save on fuel! Most cars, vans, pickup trucks and SUVs are most fuel-efficient when they’re traveling between 50 and 80 km (30 and 50 miles) per hour. Above this speed zone, vehicles use increasingly more fuel the faster they go.</p>
        <p>For example, at 120 km per hour, a vehicle uses about 20% more fuel than at 100 km per hour. On a 25-km trip, this spike in speed—and fuel consumption—would cut just two minutes from your travel time.</p>
        
        <p>5 | Coast to decelerate</p>
        <p>Every time you use your brakes, you waste your forward momentum. By looking ahead at how traffic is behaving, you can often see well in advance when it’s time to slow down. You will conserve fuel and save money by taking your foot off the accelerator and coasting to slow down instead of using your brakes.</p>
        
        <h2>For more ways to use less fuel, <a href="/articles/less-fuel">click here.</a></h2>
      </section>
    </ArticleStyled>
  );
};

export default EcoDriving;