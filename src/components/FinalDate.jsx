export const FinalDate = ({ updateFormData, value }) => {
  const dateInput = (e) => updateFormData("finalDate", e.target.value);


  return (
    <div>
      <p>Alright, and your final day is on…</p>
      <input className="Date"
                  type="date"
                  value={value}
                  onChange={dateInput}
               />
    </div>
  );
};

