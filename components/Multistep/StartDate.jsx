export const StartDate = ({ updateFormData, value }) => {
  const dateInput = (e) => updateFormData("date", e.target.value);


  return (
    <div>
      <p>When did you start working here?</p>
      <input className="Date"
                  type="date"
                  value={value}
                  onChange={dateInput}
               />
    </div>
  );
};

