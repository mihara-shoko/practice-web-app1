interface Props {
    /** The text to display inside the button */
    label: string;
    /** Whether the button can be interacted with */
    type: string;
    value: string;
    onChange: any;
    name: string;
  }
  
  function InputForm({ label, type, value, onChange, name }: Props) {
    return (
      <>
        <label>
        {label}:
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
      </>
      
    );
  }

  export default InputForm;