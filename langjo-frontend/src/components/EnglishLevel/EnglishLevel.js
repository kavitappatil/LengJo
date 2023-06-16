import React from "react";
import "./EnglishLevelCard.css";
import iconGif from "./english-level-icon.gif";


const EnglishLevel = () => {

  return (
    <div
      className={`card-container`}
      
    >
      <img src={iconGif} alt="English Level Icon" className="icon" />
      <h2>Understand Your English Level</h2>
      {/* {expanded && ( */}
        <>
          <p>
            Understanding your English proficiency level is crucial for making
            informed decisions about your language learning journey. By knowing
            where you stand in terms of English skills, you can set realistic
            goals, choose appropriate learning materials, and effectively track
            your progress. Let's explore the benefits of understanding your
            English proficiency level:
          </p>
          <h3>1. Setting Realistic Goals</h3>
          <p>
            When you have a clear understanding of your English proficiency
            level, you can set realistic and achievable goals. Whether you're a
            beginner, intermediate, or advanced learner, knowing your starting
            point helps you establish targets that are challenging yet
            attainable. This approach enables you to stay motivated and focused
            on your language learning journey.
          </p>
          <h3>2. Choosing Appropriate Learning Materials</h3>
          <p>
            Every English learner has unique needs and preferences when it comes
            to learning materials. By understanding your English proficiency
            level, you can select resources and materials that match your
            current abilities. This ensures that you are neither overwhelmed by
            complex content nor bored with overly simple materials. Tailoring
            your learning materials to your proficiency level enhances
            comprehension and accelerates your progress.
          </p>
          <h3>3. Tracking Your Progress</h3>
          <p>
            One of the keys to successful language learning is tracking your
            progress. When you know your English proficiency level, you can
            measure your advancements accurately. This allows you to celebrate
            milestones, identify areas for improvement, and adjust your learning
            strategies accordingly. Tracking progress provides a sense of
            achievement and motivation, as you witness your language skills
            improving over time.
          </p>
          <h3>Conclusion</h3>
          <p>
            Understanding your English proficiency level provides numerous
            benefits on your language learning journey. It helps you set
            realistic goals, choose appropriate learning materials, and
            effectively track your progress. Remember that language learning is
            a gradual process, and embracing your current proficiency level is
            the first step towards reaching your desired fluency.
          </p>
        </>
    </div>
  );
};

export default EnglishLevel;
