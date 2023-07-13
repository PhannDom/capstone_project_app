import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  none: ""
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: keyof typeof BUTTON_TYPE_CLASSES;
}

const Button = (props: ButtonProps) => {
  const { children, buttonType, ...otherProps } = props;

  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
