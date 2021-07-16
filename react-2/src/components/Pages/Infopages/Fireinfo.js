import React, { Component } from "react";
import fire from "../../images/firesafty11.jpg";
import smokefire from "../../images/firepull.jpg";
import firesigns from "../../images/firesign1.jpg";
import step1 from "../../images/Step1.jpg";
import step2 from "../../images/Step2.jpg";
import step3 from "../../images/Step3.jpg";
import step4 from "../../images/Step4.jpg";
import step5 from "../../images/Step5.jpg";
import step6 from "../../images/Step6.jpg";
import step7 from "../../images/Step7.jpg";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import "./Earthquakeinfo.css";

class Fireinfo extends React.Component {
  state = {
    istogleOn: false,
  };
  toglepersonhandler = () => {
    this.setState((state) => ({
      istogleOn: !state.istogleOn,
    }));
  };
  render() {
    return (
      <>
        <div className="container ">
          <h1 className="title-3">Fire : Fire Safety Awareness<br/>Preparedness</h1>

          <p className='paragraph1'>
            <strong>safety precautions</strong>  you should follow
            regardless of where you live. Taking time to review tip s about the
            following fire safety issues can help you create a safer and
            more secure living environment for you, your friends, and family..{" "}
          </p>
          

          <h2 className="title-4">
            Under what conditions does Fire spread easily?
          </h2>
          
            <p className='paragraph1'>
              Any situation in which people are in close proximity to one
              another for long periods of time increases the risk of
              transmission. Indoor locations, especially settings where there is
              poor or no ventilation, are riskier than outdoor locations.
              Transmission can occur more easily in the “Three C’s”: • Crowded
              places with many people nearby; • Close-contact settings,
              especially where people have conversations very near each other; •
              Confined and enclosed spaces with poor ventilation. The risk of
              Fire spreading is higher in places where these “3Cs” overlap.
            </p>
          
          <h3 className="title-4">
            Can Fire be transmitted through feces or urine?
          </h3>

          <ul className="paragraph">
            <li>Include two ways out of every room in all escape plans</li>
            <li>Designate a location to meet outside the building</li>
            <li>
              Verify that smoke alarms are installed to provide early detection
              and warning so you’ll have enough time to execute your escape plan
            </li>
            <li>
              Make sure doors located in your path of travel can be opened from
              the inside under all lighting conditions
            </li>
            <li>
              Verify that doors located in your path of travel{" "}
              <strong>Do not</strong> require a key to open from the inside
            </li>
            <li>
              Take note of whether any disabled or elderly residents will
              require evacuation assistance
            </li>
            <li>
              Conduct a roll call to verify everyone has escaped the building
            </li>
            <li>
              Remain outside until notified by the fire department that it is
              safe to re-enter the building
            </li>
            <li>Practice, practice, practice your plan!</li>
          </ul>
          <h3 className="title-4">Fire Safety Signs…</h3>
          <img src={firesigns} className="img"></img>
          <ul className="paragraph">
            <li>Make sure the window can be opened from the inside</li>
            <li>
              Assure the window is large enough for you to pass through the
              opening
            </li>
            <li>
              Verify the windowsill is low enough to allow you to crawl through
              the opening
            </li>
            <li>
              Make sure any security bars can be opened from the inside without
              the use of a key, and that you can open them under all lighting
              conditions
            </li>
            <li>
              Determine how you will escape if the window is above the first
              floor: will you purchase a rope ladder or other emergency escape
              device, or will you wait for the fire department to arrive and
              evacuate you?
            </li>
            <li>
              Make sure sloping terrain, the location of the window, or other
              factors will not prevent the window from being used as a secondary
              escape route
            </li>
          </ul>
          <h2 className="title-4">Smoke Alarms</h2>
          <p className="paragraph">
            There are thousands of home fires in the U.S. every year, which
            result in roughly 3,000 deaths annually. Almost half of these deaths
            resulted from fires that were reported between the hours of 11:00
            p.m. and 7:00 a.m., the time period in which most people sleep. For
            this reason, providing smoke alarms in bedrooms may be the single
            most important step toward preventing fire-related casualties in
            residential buildings.
          </p>

          <h3 className="title-4">Smoke Alarm Basics</h3>
          <ul className="paragraph">
            <li>Install at least one smoke alarm in every bedroom</li>
            <li>
              Install additional smoke alarms in hallways and common areas in
              the vicinity of bedrooms
            </li>
            <li>
              Install at least one smoke alarm on every level of your home
            </li>
            <li>
              Make sure the smoke alarms within your home are interconnected so
              the activation of one alarm will activate all alarms within the
              home
            </li>
            <li>
              Try to use smoke alarms powered by the building electrical system,
              which have a battery for backup power … However, if this type of
              smoke alarm is not available, battery-powered units are certainly
              better than not having smoke alarms
            </li>
          </ul>
          <h3 className="title-4">Smoke Alarm Installation</h3>
          <ul className="paragraph">
            <li>Install smoke alarms on ceilings whenever possible</li>
            <li>
              Locate any smoke alarms installed on walls at least four inches
              below the ceiling
            </li>
            <li>
              Locate any smoke alarms installed on walls no more than 12 inches
              below the ceiling
            </li>
            <li>
              <strong>Do not</strong> install smoke alarms in the corners of
              rooms
            </li>
            <li>
              <strong>Do not</strong> install smoke alarms next to
              air-conditioning vents, heating vents, or ceiling fans, to ensure
              proper functioning of the unit
            </li>
            <li>
              <strong>Do not</strong> install smoke alarms in kitchens or
              bathrooms, to prevent false alarms
            </li>
          </ul>
          <h3 className="title-4">Smoke Alarm Maintenance</h3>
          <ul className="paragraph">
            <li>
              Test smoke alarms at least once a month, by pressing the button on
              the alarm that allows you to test the unit
            </li>
            <li>
              Smoke alarms with non-replaceable 10-year batteries are designed
              to remain effective for up to 10 years. If the alarm chirps,
              warning that the battery is low, replace the entire smoke alarm
              right away
            </li>
            <li>
              Smoke alarms with any other type of battery need a new battery at
              least once a year. If the alarm chirps, warning the battery is
              low, replace the battery right away
            </li>
            <li>Replace smoke alarms every 10 years</li>
          </ul>
          <h2 className="title-4">Candles and Incense</h2>
          <p className="paragraph">
            Candles and incense are often used to create ambiance or help
            celebrate a special event, but they are open flames that pose a
            threat of fire. Most candle fires take place in the bedroom, and
            many occur when candles are left unattended. In addition, the winter
            holidays and New Year’s Eve are peak times for candle fires, so be
            sure to exercise caution when celebrating with open flames.
          </p>
          <h3 className="title-4">Candle and Incense Basics</h3>
          <ul className="paragraph">
            <li>
              Remember: candles and burning incense are open flames, and the
              safest option is not to have them in your home
            </li>
            <li>
              <strong>Never</strong> leave candles or incense unattended, and
              always extinguish them before leaving the room or going to sleep
            </li>
            <li>
              Keep candles and incense away from curtains, clothing, books and
              newspapers, and other combustible items
            </li>
            <li>
              Keep candles and incense away from flammable liquids (i.e.,
              alcohol, oil, etc.)
            </li>
            <li>
              Use durable candle holders, which are made of non-combustible
              materials, are big enough to collect wax drippings, and don’t tip
              over easily
            </li>
            <li>
              Trim candle wicks to one-quarter inch, and maintain this wick
              length throughout the candle’s life
            </li>
            <li>
              Extinguish taper and pillar candles when their wax melts down to
              within two inches of the holder, and extinguish votives and other
              encased candles before the last half inch of wax starts to melt
            </li>
            <li>
              Use flashlights during blackouts instead of candles, and always
              avoid carrying lit candles whenever possible
            </li>
          </ul>
          <h2 className="title-4">Cooking</h2>
          <p className="paragraph">
            Cooking fires are the leading cause of home fires and household fire
            injuries. Unattended cooking is the leading cause of these fires,
            most of which start with the ignition of common household items
            including grease, paper, cabinets and curtains.
          </p>
          <h3 className="title-4">Cooking Safety Basics</h3>
          <ul className="paragraph">
            <li>
              <strong>Never</strong> leave food unattended while it’s cooking on
              the stove, and closely monitor food cooking in the oven
            </li>
            <li>
              Maintain a clean and tidy cooking area that is free of items that
              catch on fire easily, such as cloth (curtains, potholders, towels,
              etc.), paper (cook books, food packaging, newspapers, etc.), and
              plastic (food packaging, storage containers, etc.)
            </li>
            <li>
              Roll up your shirtsleeves, or wear short, tight sleeves while
              cooking, so your clothes don’t accidentally hang onto stove
              burners and catch fire
            </li>
            <li>Always keep a potholder, oven mitt, and lid on hand</li>
            <li>
              <strong>Never</strong> use a wet potholder or oven mitt, in order
              to avoid scalding when the moisture in the cloth heats up
            </li>
            <li>
              <strong>Never</strong> plug microwaves into extension cords, and{" "}
              <strong>never</strong> microwave metal containers or tinfoil
            </li>
            <li>Keep children and pets away from cooking areas</li>
          </ul>
         
          <h3 className="title-4">In the Event of Stovetop Fire:</h3>
          <ul className="paragraph">
            <li>
              If the fire is small and contained in a pan, put on an oven mitt
              and smother the flames by carefully sliding the lid over the pan
            </li>
            <li>Turn off the burner</li>
            <li>Don't remove the lid until it is completely cool</li>
            <li>
              <strong>Never</strong> pour water on a grease fire
            </li>
            <li>
              <strong>Never</strong> discharge a fire extinguisher onto a pan
              fire since it can splatter burning grease out of the pan and
              spread the fire
            </li>
          </ul>
          <h3 className="title-4">In the Event of Oven Fire:</h3>
          <ul className="paragraph">
            <li>Turn off the heat</li>
            <li>
              Keep the oven door closed to prevent you and your clothes from
              catching fire
            </li>
            <li>Notify other occupants, and evacuate the building</li>
            <li>Call the fire department</li>
          </ul>
          <h3 className="title-4">In the Event of Microwave Fire:</h3>
          <ul className="paragraph">
            <li>Keep the microwave door closed</li>
            <li>Unplug the microwave to remove the source of heat</li>
            <li>Notify other occupants, and evacuate the building</li>
            <li>Call the fire department</li>
          </ul>
          <h2 className="title-4">Smoking</h2>
          <p className="paragraph">
            The respiratory health hazards of smoking are well-publicized, but a
            lesser-known fact is that smoking materials are the leading cause of
            fire-related deaths in the U.S. The most commonly ignited items in
            these fatal fires are mattresses and bedding, upholstered furniture,
            and floor coverings.
          </p>
          <h3 className="title-4">Smoking Fire Safety</h3>
          <ul className="paragraph">
            <li>
              Smoke outside, so you <strong>Do not</strong> put others at risk
            </li>
            <li>
              <strong>Never</strong> smoke in bed
            </li>
            <li>
              <strong>Never</strong> smoke in an area where oxygen tanks are
              being used
            </li>
            <li>
              Don’t smoke if you are sleepy, have been drinking, or have taken
              medicine or other drugs that impair your ability to handle smoking
              materials correctly
            </li>
            <li>Use deep, wide ashtrays on a sturdy surface</li>
            <li>
              Make sure butts and ashes are extinguished by soaking them in
              water before discarding them
            </li>
            <li>
              Check under furniture cushions, and in other places people smoke,
              for butts and ashes that may have fallen out of sight
            </li>
            <li>Keep matches and lighters out of children's sight and reach</li>
            <li>
              Consider using fire-safe cigarettes, which are less likely to
              cause fires
            </li>
          </ul>
          <h3 className="title-4">Vaping and Electronic Cigarette</h3>
          <p className="paragraph">
            On April 9, 2012 UT Austin became a tobacoo-free campus and the ban
            extends to electronic cigarettes and vapes. Even though
            statistically there is a less of a chance of a fire than a
            traditional fire there is still a
            <a href="https://www.nfpa.org/-/media/Files/News-and-Research/Fire-statistics-and-reports/US-Fire-Problem/Fire-causes/osecigarettes.ashx?la=en">
              {" "}
              risk of a fire and/or explosion
            </a>
            .{" "}
          </p>
          <p className="paragraph">
            To learn more about fires and explosions caused by different smoking
            materials{" "}
            <a href="https://www.nfpa.org/News-and-Research/Data-research-and-tools/US-Fire-Problem/Smoking-Materials">
              NFPA has research data on the subject.
            </a>
          </p>
          <h2 className="title-4">Electricity</h2>
          <p className="paragraph">
            Electrical distribution equipment poses serious fire safety threats
            that can even be fatal, especially when equipment is used
            incorrectly.
          </p>
          <h3 className="title-4">Electrical Safety Basics</h3>
          <ul className="paragraph">
            <li>
              Protect electrical outlets with plastic safety covers if small
              children are present in your home
            </li>
            <li>
              <strong>Never</strong> operate electrical appliances around
              bathtubs, showers, or puddles of standing water
            </li>
            <li>
              Use ground fault circuit interrupter (GFCI) protection when
              working where water is near electricity, to protect against
              electric shock … This means you should use GFCIs in your kitchen,
              laundry room, bathroom, and outdoor locations
            </li>
            
            <li>
              Replace or repair frayed, loose, or otherwise damaged cords on all
              electronics
            </li>
            <li>
              Shut off the circuit and have it checked by an electrician if any
              switches feel warm
            </li>
            <li>
              Take note of any discolored switch plates, because discoloration
              could indicate that the electrical wiring behind the switch plate
              is overheating
            </li>
            <li>
              Remember: symptoms of potential wiring problems include household
              lights that dim or flicker, a TV picture that shrinks in size,
              frequent blown fuses, or circuit breakers that trip frequently
            </li>
            <li>
              Place lamps on level surfaces, away from flammable items, and use
              light bulbs that match the lamps’ recommended wattages
            </li>
            <li>
              Multi USB charger are not allowed on campus and should generally
              be avoided. They are prone to overheating and a multitide of these
              devices have been recalled by the Consumer Product Safety
              Commission over safety concerns.{" "}
            </li>
          </ul>
          <img src={fire} className="img"></img>
          <h2 className="title-4">Extension Cords and Surge Suppressers</h2>
          <img src={smokefire} className="img"></img>
          <ul className="paragraph">
            <li>
              <strong>Never</strong> use an extension cord as a replacement for
              permanent wiring
            </li>
            <li>
              Avoid running extension cords across doorways or under carpets
            </li>
            <li>
              Make sure power strips and surge suppressors are designed to
              handle the loads you will be using them for
            </li>
            <li>
              Connect power strips and surge protectors directly into a wall
              outlet. <strong>Do not</strong> connect multiple power strips or
              surge protectors together
            </li>
            <li>
              Avoid overloading circuits by plugging too many items into the
              same outlet
            </li>
            <li>
              Avoid the use of "cube taps" and other devices that allow the
              connection of multiple appliances into a single receptacle, and
              try to only plug one high-wattage item into each outlet
            </li>
          </ul>
          <h3 className="title-4">Halogen Lighting</h3>
          <ul className="paragraph">
            <li>
              Avoid using halogen lamps whenever possible since they operate at
              much higher temperatures than normal light bulbs
            </li>
            <li>
              If you use halogen lamps, make sure the lamp is placed in a
              location where it cannot come into contact with drapes, clothing,
              or other combustible materials
            </li>
            <li>
              Keep halogen lamps and cords away from high-traffic areas and turn
              lamps off when leaving the room for an extended period of time
            </li>
          </ul>
          <h2 className="title-4">Heating Safety</h2>
          <p className="paragraph">
            Heating equipment is the leading cause of home fires during the
            winter months, and the second leading cause of home fires annually.
            Heating equipment includes fireplaces, wood stoves, portable space
            heaters, and fixed space heaters. Nearly half of all deaths
            attributed to home heating equipment fires involve portable space
            heaters. Follow the below tips, and{" "}
            <a href="https://www.nfpa.org/Public-Education/Fire-causes-and-risks/Top-fire-causes/Heating">
              read more about heating safety
            </a>
            .
          </p>
          <h3 className="title-4">Heating Basics</h3>
          <ul className="paragraph">
            <li>
              Have all heating equipment in your home inspected annually by a
              licensed professional
            </li>
            <li>
              Make sure all gas-fueled and wood-burning heating devices are
              vented to the exterior of the building
            </li>
            <li>
              Consider installing a carbon monoxide alarm in a central location
              outside of each bedroom if gas-fueled or wood-burning appliances
              are used in your home
            </li>
          </ul>
          <h3 className="title-4">Fireplaces and Wood-burning Stoves</h3>
          <ul className="paragraph">
            <li>
              Have wood-burning stoves, fireplaces and chimneys inspected and
              cleaned on a periodic basis
            </li>
            <li>
              Use properly seasoned wood to reduce creosote build-up in
              fireplaces and stoves
            </li>
            <li>
              Protect fireplaces with a sturdy screen to prevent sparks from
              flying into the room
            </li>
            <li>
              Allow ashes to cool before removing them from a fireplace or stove
            </li>
            <li>Dispose of ashes in a metal container</li>
          </ul>
          <h3 className="title-4">Space Heaters</h3>
          <ul className="paragraph">
            <li>
              Maintain a 36 inch clearance between space heaters and combustible
              items
            </li>
            <li>
              Turn off portable space heaters every time you leave the room or
              go to sleep
            </li>
          </ul>
          <h2 className="title-4">Laundry</h2>
          <p className="paragraph">
            Laundry equipment is often overlooked when addressing the issue of
            home fire safety. However, laundry appliances pose a serious fire
            risk because they involve electricity, and the combination of
            combustible clothing and extremely hot temperatures. The vast
            majority of laundry fires are caused by dryers that are not cleaned
            properly.
          </p>
          <h3 className="title-4">Dryer Safety Basics</h3>
          <ul className="paragraph">
            <li>
              Have dryers installed and serviced by a competent professional
            </li>
            <li>
              Have gas-powered washers and dryers inspected periodically by a
              professional to ensure the gas line and its connection are intact
            </li>
            <li>
              Make sure that the dryer is plugged into an outlet that meets its
              electrical needs, so it doesn’t overload the outlet and trip
              circuit breakers or blow fuses
            </li>
            <li>
              Keep the area around the dryer clear of boxes, clothing, and other
              combustibles
            </li>
            <li>Turn the dryer off when leaving home</li>
          </ul>
          <h3 className="title-4">Lint Filters</h3>
          <ul className="paragraph">
            <li>
              <strong>Do not</strong> operate the dryer without a lint filter
            </li>
            <li>
              Clean lint filters before or after each use, and remove any lint
              from around the dryer drum
            </li>
            <li>
              Make sure the dryer exhausts into the exterior or into a listed
              water trap
            </li>
            <li>
              Inspect the area around the dryer for accumulations of lint,
              paying special attention to the area behind the dryer, and remove
              any lint you notice
            </li>
            <li>
              Inspect the flexible exhaust duct (if your dryer has one), and
              remove lint accumulations on a periodic basis
            </li>
          </ul>
          <h2 className="title-4">Gasoline</h2>
          <p className="paragraph">
            Each year gasoline causes several thousand household fires, many of
            which result in injury and even death. It is helpful to remember
            gasoline is a volatile liquid that is constantly releasing flammable
            vapors, which are heavier than air and accumulate at the lowest
            point in an area. If released inside a building, these vapors sink
            to floor level and spread out across the room, and if these vapors
            make contact with an ignition source a flash-fire will likely
            result.
          </p>
          <h3 className="title-4">Gasoline Safety Basics</h3>
          <ul className="paragraph">
            <li>
              Keep gasoline out of children's reach and sight, and{" "}
              <strong>never</strong> allow children to handle gas
            </li>
            <li>
              <strong>Never</strong> use gasoline inside the home or as a
              cleaning agent
            </li>
            <li>
              <strong>Never</strong> use gasoline to wash mechanical parts
            </li>
            <li>
              <strong>Never</strong> use gasoline to start a fire in barbecue
              pits or cooking grills
            </li>
            <li>
              <strong>Never</strong> use gasoline as a replacement for kerosene
              or diesel
            </li>
            <li>
              <strong>Do not</strong> use or store gasoline near potential
              ignition sources, including gas-fired water heaters that contain a
              pilot flame
            </li>
            <li>
              Follow all manufacturers’ instructions when using electronics
              (including all devices with batteries or connections to electrical
              outlets) near gasoline
            </li>
            <li>
              Clean up spills immediately and discard clean-up materials
              properly
            </li>
          </ul>
          <h3 className="title-4">In the Event of Gasoline Fire</h3>
          <ul className="paragraph">
            <li>Leave the area immediately, and call the fire department</li>
            <li>
              <strong>Do not</strong> attempt to extinguish the fire
            </li>
            <li>
              <strong>Do not</strong> attempt to stop the flow of gasoline
            </li>
          </ul>
          <h3 className="title-4">Gasoline Storage</h3>
          <ul className="paragraph">
            <li>Store gasoline outside in a garage or shed</li>
            <li>
              <strong>Never</strong> store gasoline in glass, or in plastic milk
              jugs and other non-reusable plastic containers
            </li>
            <li>
              Store gasoline in a tightly closed metal or plastic container
              designed, manufactured, and approved specifically for gasoline
              storage
            </li>
            <li>
              Store only the amount of gasoline necessary to power equipment and
              machinery
            </li>
          </ul>
          <h3 className="title-4">Fueling and Handling Gasoline</h3>
          <ul className="paragraph">
            <li>
              <strong>Do not</strong> smoke while handling gasoline
            </li>
            <li>Use caution when fueling machinery and automobile equipment</li>
            <li>
              <strong>Never</strong> fuel machinery or equipment indoors, and
              always let it cool before refueling
            </li>
            <li>
              Place portable gasoline containers on the ground before filling,
              and only fill them outdoors
            </li>
            <li>
              <strong>Never</strong> fill portable containers inside a vehicle
              or in the bed of a pick-up truck, to prevent a static charge from
              developing
            </li>
            <li>
              <strong>Do not</strong> get in and out of automobiles while
              fueling … Although rare, this movement creates an electrical
              charge on your body that could spark a fire, especially during dry
              weather conditions
            </li>
          </ul>
          <h2 className="title-4">Propane</h2>
          <p className="paragraph">
            Over 1,000 home fires are caused by liquid propane annually, and
            these fires cause hundreds of injuries and deaths. Propane is a
            flammable gas that is converted to a liquid before being stored
            within a cylinder or tank. When released from its container, propane
            converts back to a gas and expands significantly; if this expanding
            gas comes in contact with an ignition source an explosion can
            result. When first released, the gas is cold and heavier than the
            surrounding air, which creates a “cloud” of heavy gas that will stay
            close to the ground and collect in low areas.
          </p>
          <h3 className="title-4">Propane Safety Basics</h3>
          <ul className="paragraph">
            <li>
              <strong>Never</strong> store or use propane gas cylinders larger
              than one pound inside your home
            </li>
            <li>
              <strong>Never</strong> store or operate a propane-powered gas
              grill indoors
            </li>
            <li>
              Always handle propane-powered equipment cautiously, according to
              the manufacturers’ instructions
            </li>
            <li>
              Have propane gas equipment inspected by a professional for leaks
              and faulty parts on a regular basis
            </li>
            <li>
              Follow the manufacturers’ instructions carefully when lighting
              pilots
            </li>
            <li>
              Leave the area immediately and call the fire department from
              outside the home if you smell a strong odor of gas
            </li>
          </ul>
          <p className="paragraph">
            These fire safety statistics and tips refer to fact sheets on the{" "}
            <a href="https://www.nfpa.org/Public-Education">
              National Fire Protection Association Web site
            </a>
            , the authoritative resource for fire prevention information online.
          </p>
          <br />
        </div>
        <div className="side-div-earthquake">
          <h3 className="h4-earthquake"> Fire Precautions</h3>

          <ul className="side-div-p">
            <div className="earth">
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ shows: !this.state.shows });
                }}
              >
                {this.state.shows ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              Fire alarms and detectors
            </div>

            <div>
              {this.state.shows ? (
                <div>
                  <img src={step1}></img>
                  <p>
                    Step 1: You need to provide a method for detecting a fire quickly and raising the alarm. The warning system, when it has been set off from any point, should be clearly heard throughout the premises. It should provide enough warning for people to evacuate the building safely..
                  </p>
                </div>
              ) : null}
            </div>
            <div className="earth">
              {" "}
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ show2: !this.state.show2 });
                }}
              >
                {this.state.show2 ? <FaAngleDown /> : <FaAngleRight />}
              </button>{" "}
              Escape routes
            </div>
            <div>
              {this.state.show2 ? (
                <div>
                  <img src={step2}></img>
                  <p>
                    Step 2: You need to ensure that there are enough exits through the building, and that they are in the right places. This will allow you to guarantee that, in the event of a fire anywhere in the building, there is at least one free route available..
                  </p>
                </div>
              ) : null}
            </div>
            <div className="earth">
              {" "}
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ show3: !this.state.show3 });
                }}
              >
                {this.state.show3 ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              ​Evacuation of disabled people
            </div>
            <div>
              {this.state.show3 ? (
                <div>
                 
                  <p>
                    Step 3: You need to make arrangements to ensure the safe evacuation of everybody in your premises.

Your fire risk assessment​ should identify groups of people at risk, taking particular care of vulnerable groups or individuals. For example children, the elderly and people with disabilities..
                  </p>
                </div>
              ) : null}
            </div>
            <div className="earth">
              {" "}
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ show4: !this.state.show4 });
                }}
              >
                {this.state.show4 ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              Fire extinguishers 
            </div>
            <div>
              {this.state.show4 ? (
                <div>
                  <img src={step4}></img>
                  <p>
                    Step 4:Always corporate with Fire extinguishers   People that are likely to use fire extinguishers should receive training on how to use them. You need to ensure that fire extinguishers are serviced annually..
                  </p>
                </div>
              ) : null}
            </div>
            <div className="earth">
              {" "}
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ show5: !this.state.show5 });
                }}
              >
                {this.state.show5 ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              Drop, Cover, and Hold On
            </div>
            <div>
              {this.state.show5 ? (
                <div>
                  <img src={step5}></img>
                  <p>
                    Step 5: Drop, cover, and hold on when the earth shakes..
                  </p>
                </div>
              ) : null}
            </div>
            <div className="earth">
              {" "}
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ show6: !this.state.show6 });
                }}
              >
                {this.state.show6 ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              Improve Safety
            </div>
            <div>
              {this.state.show6 ? (
                <div>
                  
                  <p>
                    Step 6: Improve safety after fire Attack by evacuating if
                    necessary, helping the injured, and preventing further
                    damage.
                  </p>
                </div>
              ) : null}
            </div>
            <div className="earth">
              {" "}
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ show7: !this.state.show7 });
                }}
              >
                {this.state.show7 ? <FaAngleDown /> : <FaAngleRight />}
              </button>{" "}
              Reconnect and Restore
            </div>
            <div>
              {this.state.show7 ? (
                <div>
                  
                  <p >
                    Step 7: Restore daily life by reconnecting with others,
                    repairing damage, and rebuilding community.
                  </p>
                </div>
              ) : null}
            </div>
          </ul>
         
        </div>
      </>
    );
  }
}

export default Fireinfo;
