export const Reason = ({ updateFormData, value }) => {
  const reasonForLeave = (e) => updateFormData("reasonForLeave", e.target.value);
  return (
    <div>
      <p>And what are the most important reasons you for you leaving?:</p>
      <select value={value} onChange={reasonForLeave}>
      <option value="">Please select an option</option>
        <option value="not-satisfied-supervisor">Not satisfied with supervisor</option>
        <option value="office-politics">Office politics</option>
        <option value="pay">Pay</option>
        <option value="relocate">Need to relocate</option>
        <option value="career-change">Wanted a career change</option>
        <option value="family-personal">Family circumstances/personal reasons</option>
        <option value="health">Health reasons</option>
        <option value="benefits">Working conditions and/or benefits</option>
        <option value="retirement">Retirement</option>
        <option value="workload">Workload</option>
        <option value="back-to-education">Going back to education</option>
        <option value="other">Going back to education</option>
      </select>
    </div>
  );
};