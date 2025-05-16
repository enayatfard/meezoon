import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ThemeProvider, useTheme } from "./components/theme-provider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme.name === "light" ? "dark" : "light")}
    >
      Toggle {theme.name === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}

function AppContent() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <Card variant="primary">
        <CardHeader>
          <CardTitle>Login Form</CardTitle>
          <CardDescription>Enter your credentials to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Email" inputSize="md" variant="default" />
          <Input
            placeholder="Password"
            type="password"
            inputSize="md"
            variant="default"
          />
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="default" size="md">
            Login
          </Button>
          <Button variant="outline" size="md">
            Cancel
          </Button>
        </CardFooter>
      </Card>

      <Card variant="success">
        <CardHeader>
          <CardTitle>Registration Form</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Username" inputSize="lg" variant="success" />
          <Input placeholder="Email" inputSize="lg" variant="default" />
          <Input
            placeholder="Password"
            type="password"
            inputSize="lg"
            variant="default"
          />
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="default" size="lg">
            Register
          </Button>
          <Button variant="outline" size="lg">
            Cancel
          </Button>
        </CardFooter>
      </Card>

      <Card variant="error">
        <CardHeader>
          <CardTitle>Error Form</CardTitle>
          <CardDescription>Example of error states</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Username"
            inputSize="sm"
            error="Username is required"
          />
          <Input
            placeholder="Email"
            inputSize="sm"
            error="Invalid email format"
          />
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="default" size="sm">
            Submit
          </Button>
          <Button variant="outline" size="sm">
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
