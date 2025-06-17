import { Redirect, Stack } from 'expo-router';
/*
export default function AuthLayout() { 
const isAuthenticated = check for valid auth token/session

  if (!isAuthenticated) {
    return <Redirect href="../login/login" />;
  }

  return <Stack />;

}
  */

export default function RootLayout() {
  return <Stack />;
}
