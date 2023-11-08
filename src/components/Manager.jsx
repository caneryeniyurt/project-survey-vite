export const Manager = ({ updateFormData, value }) => {
  const managerInput = (e) => updateFormData("managerName", e.target.value);
  return (
    <div>
      <p>Who was your manager?</p>
      <input type="text"  value={value} onChange={managerInput} />
    </div>
  );
};


