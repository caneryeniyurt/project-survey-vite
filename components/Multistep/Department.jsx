export const Department = ({ updateFormData, value }) => {
  const InputDepartment = (e) => updateFormData("department", e.target.value);
  return (
    <div>
      <p>And which department were you working in?:</p>
      <select value={value} onChange={InputDepartment}>
        <option value="">Please select an option</option>
        <option value="customer-supports">Customer Support</option>
        <option value="sales">Sales</option>
        <option value="hr">Human Resources</option>
        <option value="creative">Creative</option>
        <option value="marketing">Marketing</option>
        <option value="management">Management</option>
      </select>
    </div>
  );
};
