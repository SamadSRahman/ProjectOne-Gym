import React from "react";
import Style from "./AboutUs.module.css";
import YouTube from "react-youtube";

export function AboutUs() {
  return (
    <>
      <div className={Style.background}>
        <div className={Style.heading}>
          ABOUT <strong>FITNESS POWER GYM</strong>
        </div>
        <div className={Style.sectionFlex}>
          <div className={Style.section1}>
            <div className={Style.aboutUs}>
              <div>
                <img
                  className={Style.sideBarImg}
                  src="https://goldsgym.in/uploads/home_icons/gyms.jpg"
                />
                <h3>150 Gyms</h3>
              </div>

              <div>
                <img
                  className={Style.sideBarImg}
                  src="https://goldsgym.in/uploads/home_icons/cities.jpg"
                />
                <h3>95 Cities</h3>
              </div>

              <div>
                <img
                  className={Style.sideBarImg}
                  src="https://goldsgym.in/uploads/home_icons/states.jpg"
                />
                <h3>25 States</h3>
              </div>

              <div>
                <img
                  className={Style.sideBarImg}
                  src="https://goldsgym.in/uploads/home_icons/Website_Personal.jpg"
                />{" "}
                <h3>Personal Traning</h3>
                <h3>Program</h3>
              </div>

              <div>
                <img
                  className={Style.sideBarImg}
                  src="https://goldsgym.in/uploads/home_icons/Corporate.jpg"
                />
                <h3>Corporate Wellness </h3>
                <h3> Program</h3>
              </div>

              <div>
                <img
                  className={Style.sideBarImg}
                  src="https://goldsgym.in/uploads/home_icons/Group_Exercise.jpg"
                />
                <h3>Group Program</h3>
              </div>
            </div>
          </div>

          <div className={Style.section2}>
            <div class={Style.mainDiscription}>
              <div class={Style.discription}>
                <div class={Style.image}>
                  <img
                    className={Style.imagelady}
                    src="https://goldsgym.in/assets/images/work.jpg"
                  />
                </div>
                <h3 className={Style.discriptionHeading}>What Do We Do</h3>
                <p className={Style.para1}>
                  Gold's Gym Has Been The Authority In Fitness Since 1965 Dating
                  Back To The Original Gold's Gym In Venice, California. It Was
                  The Place For Serious Fitness. Opened Long Before The
                  Modern-Day Health Club Existed, The Original Gold's Gym
                  Featured Homemade Equipment And A Dedication To Getting
                  Results. It Was An Instant Hit. Gold's Gym Quickly Became
                  Known As “The Mecca Of Bodybuilding.''
                </p>

                <p className={Style.para1}>
                  In 1977, Gold's Gym Received International Attention When It
                  Was Featured In The Movie Pumping Iron That Starred Arnold
                  Schwarzenegger And Lou Ferrigno. From That First Gym In
                  Venice, Gold's Gym Has Become The Largest Co-Ed Gym Chain In
                  The World With Over 700+ Clubs In 27 Countries. Today, Gold's
                  Gym Has Expanded Its Fitness Profile To Offer All Of The
                  Latest Equipment And Services, Including Group Exercise,
                  Personal Training, Cardiovascular Equipment, Spinning, And
                  Yoga, While Maintaining Its Core Weight Lifting Tradition.
                </p>

                <p className={Style.para1}>
                  Gold's Gym Has Become The Preferred Gym Of Celebrities,
                  Athletes, Bodybuilders, The Military, And Fitness Enthusiasts
                  All Over The World. Most Importantly, Gold's Gym Continues To
                  Change Lives By Helping People Achieve Their Individual
                  Potential.
                </p>
              </div>
            </div>
          </div>

          <div className={Style.section3}></div>
        </div>
      </div>
      <div className={Style.background2}></div>

      <div className={Style.vidPlayer}>
        <YouTube videoId="https://www.youtube.com/results?search_query=gym+traning+video" />
      </div>
    </>
  );
}
