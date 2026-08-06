import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import background from "../../assets/plant bg.jpg";

function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(formData);

      console.log("Login Result:", result);

      // Save token
      localStorage.setItem("token", result.token);

      // Save user
      const user = {
  name: result.name,
  email: result.email,
  role: result.role,
  isApproved: result.isApproved,
};

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);

      toast({
        title: "Login Successful",
        description: `Welcome ${result.name}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

     switch (result.role.toLowerCase()) {
  case "admin":
    navigate("/admin");
    break;

  case "seller":
    navigate("/seller");
    break;

  
  case "customer":
    navigate("/home");
    break;

  default:
    navigate("/");
}
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message || "Invalid email or password/Waiting for admin approval";

      // Seller approval message
      if (
        message.toLowerCase().includes("approval") ||
        message.toLowerCase().includes("approved")
      ) {
        toast({
          title: "Approval Required",
          description:
            "Your seller account is pending admin approval. Please wait until the administrator approves your account.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      toast({
        title: "Login Failed",
        description: message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bgImage={`url(${background})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="420px"
        p={8}
        borderRadius="20px"
        bg="rgba(255,255,255,0.9)"
        border="1px solid rgba(255,255,255,0.3)"
      >
        <Heading
          size="lg"
          textAlign="center"
          color="green.700"
          mb={2}
        >
          🌿 LeafNode
        </Heading>

        <Text
          textAlign="center"
          mb={6}
          color="gray.600"
        >
          Nurturing your digital botanical garden
        </Text>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel color="gray.700">Email</FormLabel>
              <Input
                type="email"
                name="email"
                color="gray.700"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="gray.700">Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="green"
              width="100%"
            >
              Login
            </Button>

            <Text textAlign="center" color="gray.600">
              Don't have an account?{" "}
              <Link
                as={RouterLink}
                to="/register"
                color="green.500"
              >
                Register
              </Link>
            </Text>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default Login;