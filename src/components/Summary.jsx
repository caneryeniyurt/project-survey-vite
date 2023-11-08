// It receives two props: `value` and `updateFormData`.
export const Summary = ({ value }) => {
    const jobtitle= value.jobtitle;
    const managerName= value.managerName;
    const startDate= value.date;
    const department= value.department;
    const reasonForLeave= value.reasonForLeave;
    const finalDate= value.finalDate;
    const rate= value.rate;
    const comment= value.comment;


  

    return (
      <div>
         
        <p>     Job Title: {jobtitle}         </p> 
        <p>     Manager: {managerName}       </p> 
        <p>     Start Date: {startDate}         </p> 
        <p>     Final Date: {finalDate}         </p> 
        <p>     Department: {department}         </p> 
        <p>     Reason for Leave: {reasonForLeave}         </p> 
        <p>     Overall Experience with the company :{rate}        </p> 
        <p>     Comment: {comment}      </p> 

        
        Thank you for attending this survey.



        
       
      </div>
    );
  };