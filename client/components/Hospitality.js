import React, { PropTypes} from 'react';
import '../styles/hospitality.css';

class Hospitality {
  render() {
    return (
      <div>
       <Contents />
      </div>
    );
  }
}

class Contents {
  render() {
    const question1 = (
      <Question>
        <div className="hospitality-question">
          How to reach IISc?
        </div>
        <div className="hospitality-answer">
          Bangalore is connected by air, rail and road to all the metropolises and most major cities of the country. The Institute is known as "Tata Institute" to the locals. It is better to use the name "Tata Institute" with the taxi, auto-rickshaw drivers, and bus conductors. The institute is located between Malleswaram and Yeswantpur.
        </div>
      </Question>
    );

    const question2 = (
       <Question>

         <div className="hospitality-question">
           Reaching IISc from the Airport:
         </div>
         <div className="hospitality-answer">
           IISc is about 35 kilometer (22 miles) from the airport (both domestic and international). Prepaid taxi service is available from the airport. The fare to IISc would be approximately INR 650. Shuttle bus services are available from the airport. The A/C bus fare is around INR 200. The more economical non A/C buses are also available. You can take buses to either Mekhri Circle or Malleshwaram. IISc is around 2 kilometer from these bus stops and you may take an auto to reach IISc. The fare for the auto would be around INR 25.
         </div>
       </Question>
      );

    const question3 = (
        <Question>
          <div className="hospitality-question">
            Reaching IISc from the City Railway Station/Majestic Bus Stand:
          </div>
          <div>
            <div className="hospitality-answer">
              The main railway station in Bangalore is called Bangalore City which is about 7 km from IISc. The railway station and the main bus stand (called as Majestic) are opposite to each other. Pre-paid taxi and auto-rickshaw facility is available at the Bangalore City Railway Station, near platform number 1. You could tell the person at the counter that you are travelling to Tata Institute. A trip to IISc may cost about INR 100 by auto. Travel by auto-rickshaws between 22:00 hours and 06:00 hours will cost 50% more.
              You can also use the bus services from platform Number 22 of Majestic bus station:
            </div>
            <div className="hospitality-bus-route-1">
             Bus Route nos. 252 E, 258 C, 271 E, 273 C, 275, 99 A and B.
            </div>
            <div className="hospitality-answer">
             Alight at Malleshwaram 18th cross Bus Stop or Yeshwantpur circle Bus Stop.
            </div>
          </div>
        </Question>
      );
    const question4 = (
      <Question>
       <div className="hospitality-question">
         Reaching IISc from Cantonment Railway Station:
       </div>
       <div className="hospitality-answer">
         Another important railway station in Bangalore is Cantonment Railway Station, also known as Bangalore Cantt. The distance from this station to IISc is almost same as the Bangalore City railway station and it also has prepaid auto-rickshaw facility. You can also use the bus services from the bus stop just opposite to the station.
       </div>
       <div className="hospitality-bus-route-2">
         Route Nos. 94 A and E, 252 A, 270 A, 272, 276 A.
       </div>
      </Question>
    );
    const question5 = (
      <Question>
       <div className="hospitality-question">
         Reaching IISc from Yeshwanthpur Railway Station:
       </div>
       <div className="hospitality-answer">
         Yeshwanthpur is another important railway station in Bangalore. Yeshwanthpur is very close to IISc. There are two entrances to this station (one through Yeswanthpur Market, and the other via Tumkur Road). The auto-rickshaw ride from Yeshwanthpur to IISc will cost around INR 25 from the Market entrance, and around INR 40 from the Tumkur Road entrance. Prepaid auto-rickshaw facility is available near the Tumkur Road entrance. One can also walk down in about 10 minutes from the market side entrance (Platform no. 1) to IISc.
       </div>
      </Question>
    );

    return (
      <div>
        <Hospitalityheader1/>
        <Hospitalityintro />
        <Hospitalityheader2 />
        {question1}
        {question2}
        {question3}
        {question4}
        {question5}
      </div>
    );
  }
}

class Hospitalityheader1 {
  render() {
    return (
      <div className="hospitality-header">
       <div className="hospitality-title-1">
         HOSPITALITY
       </div>
      </div>
    );
  }
}

class Hospitalityintro {
  render() {
    return (
      <div className="hospitality-intro">
        Your satisfaction is our topmost priority and the Hospitality Team will strive to ensure your comfort at Pravega.
        The IISc Campus is centrally located in the city and participants should have no problems in arriving at the venue. We have arranged for limited accommodation outside the campus on first-come-first-serve basis. We have also made a list of affordable lodges surrounding the institute where you will find it convenient to book rooms and stay for the duration of the fest. Food stalls located throughout the campus will make sure your stomach voices no protests during the fest.
     </div>
    );
  }
}

class Hospitalityheader2 {
  render() {
    return (
      <div className="hospitality-header2">
       <div className="hospitality-title2">
         REACHING IISc
       </div>
      </div>
    );
  }
}

class Question {
  static propTypes = {
    children: PropTypes.array.isRequired
  }
  render() {
      const q1 = this.props.children[0];
      const q2 = this.props.children[1];
      const qa1 = React.cloneElement(q1, {});
      const qa2 = React.cloneElement(q2, {});
      return (
       <div>
         {qa1}
         {qa2}
      </div>

    );
    }
}


export default Hospitality;
