export const Rate = ({ updateFormData, value }) => {
    const InputRate = (e) => updateFormData("rate", e.target.value);
    return (
      <div>
      <p>Next, you can rate your experience working here</p>
      <h2>1 means low agreement, 5 means high.</h2>
      <label>
      <input      type="radio"
                  value={"1"}
                  onChange={InputRate}
                  checked={value==="1"}
               />
               1
      </label>
      <label>
      <input      type="radio"
                  value={"2"}
                  onChange={InputRate}
                  checked={value==="2"}
               />
               2
      </label>
      <label>
      <input      type="radio"
                  value={"3"}
                  onChange={InputRate}
                  checked={value==="3"}
               />
               3
      </label>
      <label>
      <input      type="radio"
                  value={"4"}
                  onChange={InputRate}
                  checked={value==="4"}
               />
               4
      </label>
      <label>
      <input      type="radio"
                  value={"5"}
                  onChange={InputRate}
                  checked={value==="5"}
               />
               5
      </label>
      
    </div>
    );
  };