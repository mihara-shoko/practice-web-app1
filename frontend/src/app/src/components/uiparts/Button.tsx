interface Props {
    /** The text to display inside the button */
    text: string;
    /** Whether the button can be interacted with */
    onClick?: any
  }
  
  function Button({ text, onClick }: Props) {
    return (
      <button onClick={onClick}>{text}</button>
    );
  }

  export default Button;