// Importing necessary hooks and components
import { useState } from "react";
import { Manager } from "./Manager";
import { Reason } from "./Reason";
import { FinalDate } from "./FinalDate";
import { Department } from "./Department";
import { StartDate } from "./StartDate";
import { Jobtitle } from "./Jobtitle";
import { Greeting } from "./Greeting";
import { Rate } from "./Rate";
import { Comment } from "./Comment";
import { Farewell } from "./Farewell";
import { Summary } from "./Summary";

// Define the MultiStepForm component
export const MultiStepForm = () => {
 
  // State to store form data
  const [formData, setFormData] = useState({
    jobtitle: "",
    managerName: "",
    date: "2023-11-08",
    department: "",
    reasonForLeave: "",
    finalDate: "2023-11-08",
    rate:"",
    comment:"",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (field, value) => {

    setFormData((values) => ({ ...values, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 11) setCurrentStep(currentStep + 1);
  };

  // Function to move to the previous step in the form
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

    // Function to move to the previous step in the form
  const firstStep = () => {
      if (currentStep == 11) setCurrentStep(1);
    };

  

  // Render the component
  return (
    <div >
      {/* Render the Greeting component if on step 1 */}
      {currentStep === 1 && (
        <Greeting/>
      )}
      {/* Render the Department component if on step 2 */}
      {currentStep === 2 && (
        <Jobtitle value={formData.jobtitle} updateFormData={updateFormData} />
      )}
      {/* Render the Age component if on step 3 */}
      {currentStep === 3 && (
        <Manager value={formData.managerName} updateFormData={updateFormData} />
      )}
      {/*Render the Email component if on step 4 */}
      {currentStep === 4 && (
        <StartDate value={formData.date} updateFormData={updateFormData} />
      )}
      {currentStep === 5 && (
        <FinalDate
          value={formData.finalDate} updateFormData={updateFormData}/>
      )}  
      {/* Render the Band component if on step 5 */}
      {currentStep === 6 && (
        <Department value={formData.department} updateFormData={updateFormData} />
      )}
      {/* Render the Album component if on step 6 */}
      {currentStep === 7 && (
        <Reason value={formData.reasonForLeave} updateFormData={updateFormData} />
      )}
      {/* Render the Artist component if on step 7 */}
      {currentStep === 8 && (
        <Rate value={formData.rate} updateFormData={updateFormData} />
      )}
      {/* Render the Artist component if on step 8 */}
      {currentStep === 9 && (
        <Comment value={formData.comment} updateFormData={updateFormData} />
      )}
      {/* Render the Artist component if on step 9 */}
      {currentStep === 10 && (
        <Farewell/>
      )}
      {/* Render the Artist component if on step 10 */}
      {currentStep === 11 && (
        <Summary value={formData}/>
      )}
      {/* Render the Artist component if on step 11 */}

      {/* Navigation buttons */}
      <div className="multi-step-form">
        {/* Show the "Back" button if not on the first step */}
        {currentStep < 11 && currentStep > 1 && <button className="NextBackButton" onClick={prevStep}>Back</button>}
        {/* Show the "Next" button if not on the last step, otherwise show the "Submit" button */}
        {currentStep < 10 && <button className="NextBackButton" onClick={nextStep}>Next</button>}
        {currentStep == 10 && <button className="NextBackButton" onClick={nextStep}>Submit</button>}
        {currentStep == 11 && <button className="NextBackButton" onClick={firstStep}>Create a New Survey</button>}


        {/* {currentStep < 10 ? (
          <button className="NextBackButton" onClick={nextStep}>Next</button>
        ) : (
          <button className="NextBackButton" onClick={nextStep}>Submit</button>
        )} */}
      
      </div>
    </div>
  );
};
