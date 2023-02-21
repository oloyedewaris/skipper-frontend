import { Input, Pressable, Icon, FormControl } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type inputProps = {
  show: boolean;
  error?: string | boolean;
  onChangeText: (text: string) => void;
  setShow: (show: boolean) => void;
  placeholder?: string;
  [rest: string]: any;
}

const AuthPasswordInput: React.FC<inputProps> = ({ onChangeText, error, show, setShow, placeholder, ...rest }) => {

  return (
    <FormControl isInvalid w="100%" my="3">
      <Input
        w="100%"
        color='##A2A2A2'
        type="password"
        size="xl"
        onChangeText={(text) => onChangeText(text)}
        borderColor={error ? 'error.600' : '#A2A2A2'}
        placeholder={placeholder}
        InputRightElement={(
          <Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>
        )}
        {...rest} />
      {error && <FormControl.ErrorMessage mt='0'>{error}</FormControl.ErrorMessage>}
    </FormControl>
  )
};

export default AuthPasswordInput;