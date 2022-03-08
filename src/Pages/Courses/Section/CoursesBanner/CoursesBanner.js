import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./CoursesBanner.css";
import { Carousel } from 'react-bootstrap';
import UseAuth from "../../../hooks/UseAuth";
import moneyProblem from "../../../../images/courses/money-problem.png"
import SGHelp from "../../../../images/courses/SG-k-help-korchi.png"
import learning from "../../../../images/courses/learning.svg"
import success from "../../../../images/courses/success.svg"

const CoursesBanner = () => {
  // UseAuth
  const { userInfo } = UseAuth();

  const payed = userInfo.userPay;

  const startNow = <FontAwesomeIcon icon={faPlayCircle} className="courses-startNow-icon" />;
  const collectNow = <FontAwesomeIcon icon={faCartArrowDown} className="courses-startNow-icon" />;

    return (
        <div className="CoursesBanner">

        <div className="problem-solving-div"></div>

            {/* f */}

            <Carousel fade>

              {/* 1 */}
              <Carousel.Item>
                <div className="d-flex">
                  <div className="carousel-text">
                    
                    <h1>
                      Money problems are a common problem for us
                    </h1>
                    
                    <br />

                    <h4 class="carousel-textH4">
                    অর্থ সমস্যা আমাদের জন্য একটি সাধারণ সমস্যা। তাই সবার কথা বিবেচনা করে এই কোর্সটি এমনভাবে সাজানো হয়েছে যাতে সবাই তা গ্রহণ করতে পারে, এবং নিজেকে প্রতিষ্ঠিত করতে পারে।
                    </h4>

                    <br />
{
                      (payed == true)?

                <a href="/coursesCardPage" className="Course-SL-btn-a">
                    <button id="startNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Start Now {startNow}
                      </div>
                    </button>
                </a>
                :
                <a href="/paymentPage" className="Course-SL-btn-a">
                    <button id="collectNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Enroll Now {collectNow}
                      </div>
                    </button>
                </a>
}
                  </div>
                  
                  <img src={moneyProblem} className="png-images carousel-img carousel-1-img" />
                </div>
              </Carousel.Item>

              {/* 2  */}

              <Carousel.Item>
              <div className="d-flex ">
                  <div className="carousel-text">
                    
                    <h1>
                      We want to extend a helping hand to everyone
                    </h1>
                    
                    <br />

                    <h4 class="carousel-textH4">
                      আমরা আমাদের এত বড়ো করতে চাই, যেন আমরা একদিন, একজন দিনমজুর এর জীবন কে ও সুন্দর করে গুছিয়ে দেওয়ার কারণ হতে পারি.
                    </h4>
                    
                    <br />
{
                      (payed == true)?

                <a href="/coursesCardPage" className="Course-SL-btn-a">
                    <button id="startNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Start Now {startNow}
                      </div>
                    </button>
                </a>
                :
                <a href="/paymentPage" className="Course-SL-btn-a">
                    <button id="collectNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Enroll Now {collectNow}
                      </div>
                    </button>
                </a>
}
                  </div>
                  
                  <img src={SGHelp} className="png-images carousel-img carousel-2-img" />
                </div>
              </Carousel.Item>

              {/* 3 */}

              <Carousel.Item>
              <div className=" Carousel-Item-3 d-flex">
                  <div className="carousel-text carousel-3-text">
                    
                    <h1>
                      Master everything you need to become a web developer.
                    </h1>

                    <br />

                    <h4 class="carousel-textH4">
                      ফ্রন্টএন্ড (HTML, CSS, JavaScript, ES6, bootstrap, React, charting), ব্যাকএন্ড (node, express, API), ডাটাবেজ (mongodb), ক্রোম ডেভ টুল, হোস্টিং, গিটহাব, ইন্টারভিউ প্রবলেম সলভিং - সবকিছু!
                    </h4>
                    
                    <br />
{
                      (payed == true)?

                <a href="/coursesCardPage" className="Course-SL-btn-a">
                    <button id="startNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Start Now {startNow}
                      </div>
                    </button>
                </a>
                :
                <a href="/paymentPage" className="Course-SL-btn-a">
                    <button id="collectNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Enroll Now {collectNow}
                      </div>
                    </button>
                </a>
}
                  </div>
                  
                  <img src={learning} className=" carousel-img carousel-3-img" />
                </div>
              </Carousel.Item>

              {/* 4 */}

              <Carousel.Item>
              <div className="d-flex">
                  <div className="carousel-text">
                    
                    <h1>
                      Complete Web Development Course with Fardul Digonto
                    </h1>

                    <br />

                    <h4 class="carousel-textH4">
                      একদম জিরো থেকে, কোন প্রকার পূর্ব অভিজ্ঞতা ছাড়াই একজন প্রফেশনাল ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগবে তার সবকিছুই সহজ করে গিলিয়ে খাওয়ানো হবে এই কোর্সে।
                    </h4>
                    
                    <br />
{
                      (payed == true)?

                <a href="/coursesCardPage" className="Course-SL-btn-a">
                    <button id="startNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Start Now {startNow}
                      </div>
                    </button>
                </a>
                :
                <a href="/paymentPage" className="Course-SL-btn-a">
                    <button id="collectNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Enroll Now {collectNow}
                      </div>
                    </button>
                </a>
}
                  </div>
                  
                  <img src={success} className=" carousel-img carousel-4-img" />
                </div>
              </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default CoursesBanner;