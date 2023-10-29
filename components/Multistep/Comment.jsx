// It receives two props: `value` and `updateFormData`.
export const Comment = ({ value, updateFormData }) => {
  
    const userComment = (e) => updateFormData("comment", e.target.value);
  
    return (
      <div>
        <p>We're sorry to hear you didn't really enjoy working here. Here's a chance to air your thoughts.</p>
        <input type="text" value={value} onChange={userComment} />
      </div>
    );
  };