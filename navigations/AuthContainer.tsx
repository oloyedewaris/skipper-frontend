import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SignUp/SignUp";
import EmailVerification from "../screens/EmailVerification/EmailVerification";
import CreatePin from "../screens/CreatePin/CreatePin";
import { HomeNavigationList } from "../types/navigation.type";

const AuthContainer = () => {
    const Stack = createStackNavigator<HomeNavigationList>();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Sign Up' component={SignUp} />
            <Stack.Screen name='Email Verification' component={EmailVerification} />
            <Stack.Screen name='Create pin' component={CreatePin} />
        </Stack.Navigator>
    )
}

export default AuthContainer;