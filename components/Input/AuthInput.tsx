import { Input, FormControl } from "native-base";

type inputProps = {
  placeholder?: string;
  onChangeText: (text: string) => void;
  error?: string | boolean;
  [rest: string]: any;
}

const AuthInput: React.FC<inputProps> = ({ onChangeText, error, placeholder, ...rest }) => {

  return (
    <FormControl isInvalid w="100%" my="3">
      <Input
        w="100%"
        color='##A2A2A2'
        onChangeText={(text) => onChangeText(text)}
        borderColor={error ? 'error.600' : '#A2A2A2'}
        size="xl" placeholder={placeholder}
        {...rest} />
      {error && <FormControl.ErrorMessage mt='0'>{error}</FormControl.ErrorMessage>}
    </FormControl>
  )
};

export default AuthInput;