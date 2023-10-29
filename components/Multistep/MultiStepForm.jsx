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

// Define the MultiStepForm component
export const MultiStepForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    jobtitle: "",
    managerName: "",
    date: new Date(),
    department: "",
    reasonForLeave: "",
    finalDate: "",
    rate:"",
    comment:"",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (field, value) => {

    setFormData((values) => ({ ...values, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 10) setCurrentStep(currentStep + 1);
  };

  // Function to move to the previous step in the form
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    console.log(formData);
    const formattedData = ` Please confirm the following information;
    Job Title: ${formData.jobtitle}
    Manager: ${formData.managerName}
    Start Date: ${formData.date}
    Department: ${formData.department}
    Reason for Leave: ${formData.reasonForLeave}
    Final Date: ${formData.finalDate}
    Overall Experience with the company :${formData.rate}
    Final Date: ${formData.comment}
    Thank you for attending this survey.
  `;

    alert(formattedData);
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
      {/* Render the Artist component if on step 9 */}

      {/* Navigation buttons */}
      <div className="multi-step-form">
        {/* Show the "Back" button if not on the first step */}
        {currentStep > 1 && <button className="NextBackButton" onClick={prevStep}>Back</button>}
        {/* Show the "Next" button if not on the last step, otherwise show the "Submit" button */}
        {currentStep < 10 ? (
          <button className="NextBackButton" onClick={nextStep}>Next</button>
        ) : (
          <button className="NextBackButton" onClick={submitForm}>Show my answers</button>
        )}
      </div>
    </div>
  );
};
