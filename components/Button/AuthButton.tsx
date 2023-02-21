import { Button } from "native-base";

type inputProps = {
  children: React.ReactNode;
  onPress: () => void;
  type?: string;
  [rest: string]: any;
}

const AuthButton: React.FC<inputProps> = ({ type, children, onPress, ...rest }) => {

  return (
    <Button w='100%' bg='primary.600' onPress={() => onPress()} {...rest}>
      {children}
    </Button>
  )
};

export default AuthButton;