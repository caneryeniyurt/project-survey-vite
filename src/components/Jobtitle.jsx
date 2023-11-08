// It receives two props: `value` and `updateFormData`.
export const Jobtitle = ({ value, updateFormData }) => {
  
  const userName = (e) => updateFormData("jobtitle", e.target.value);

  return (
    <div>
      <p>So, what was your job title? </p>

      <input type="text" value={value} onChange={userName} />
    </div>
  );
};

