import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import arrow from "../../assets/next-arrow.png"

const Testimonials = () => {
  const reviews = [
    {
      reviewTitle: "Great Experience",
      reviewText:
        "Best barbers in the city! Atmosphere is amazing and both barbers are very skillful and take their time with your haircut. I was also provided with shampooing and conditioning after my haircut. It was my first time coming here and they treated me very warmly.",
      name: "Donald Huckbled",
    },
    {
      reviewTitle: "Wonderful Service",
      reviewText:
        "Been here twice. Good cut, fair prices, great conversation. It has that 'local barbershop' feel, but the guys are super friendly towards first timers. Definitely going back!!",
      name: "Mary Jameson",
    },
    {
      reviewTitle: "Excellent Product",
      reviewText:
        "These guys are skilled and courteous barbers who provide high-quality haircuts at a fair price. I have been to many barbers in Toronto but this is the best shop by far. The customer service is excellent and you can book your appointment easily online.",
      name: "John Smith",
    },
    {
      reviewTitle: "I love this product",
      reviewText:
        "Best haircut that I’ve had in a long time, they're very professional and very educated on different hair styles. Honestly 10/10 haircut I will be coming back here from now on.",
      name: "Sarah Miller",
    },
    {
      reviewTitle: "Best purchase ever",
      reviewText:
        "I tried so many other places but their haircuts and focus on every detail of a haircut and beard is topnotch and outstanding. I would absolutely recommend their services to everyone out there",
      name: "Bob Anderson",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    if (currentReviewIndex >= reviews.length) {
      setCurrentReviewIndex(0);
    } else if (currentReviewIndex < 0) {
      setCurrentReviewIndex(reviews.length - 1);
    }
  }, [currentReviewIndex, reviews.length]);

  const handleNext = () => {
    setCurrentReviewIndex(currentReviewIndex + 1);
  };

  const handlePrev = () => {
    setCurrentReviewIndex(currentReviewIndex - 1);
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <section id="testimonials">
      <header className="testimonials-header">
        <h1>Word On The Block</h1>
      </header>
      <div className="carousel-container">
        <TransitionGroup>
          <CSSTransition
            key={currentReviewIndex}
            timeout={500}
            classNames="fade"
          >
            {currentReview ? (
              <div className="review-container">
                <div className="review-text">
                  <h2>{currentReview.reviewTitle}</h2>
                  <q>{currentReview.reviewText}</q>
                </div>
                <cite>~ {currentReview.name} ~</cite>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </CSSTransition>
        </TransitionGroup>
        <div className="review-btn-container">
          <button onClick={handlePrev}><img className="arrow arrow-left flip" src={arrow} alt="previous"></img></button>
          <button onClick={handleNext}><img className="arrow arrow-right" src={arrow} alt="next"></img></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
