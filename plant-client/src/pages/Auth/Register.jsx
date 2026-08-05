import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  VStack,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import background from "../../../src/assets/plant bg.jpg";

function Register() {
  const navigate = useNavigate();
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
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
      await register(formData);

      toast({
        title: "Registration Successful",
        description: "Please login to continue.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/");
    } catch (error) {
      toast({
        title:
          error.response?.data?.message || "Registration Failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bgImage={`url(${background})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="420px"
        p={8}
        borderRadius="20px"
        bg="rgb(255, 255, 255)"
        backdropFilter="blur(20px)"
        border="1px solid rgba(255,255,255,0.3)"
        boxShadow="dark-lg"
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
          color="gray.700"
          mb={6}
        >
          Create your account
        </Text>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>

            <FormControl>
              <FormLabel color="gray.700">Name</FormLabel>
              <Input
                bg="gray.100"
                color="black"
                border="1px solid rgba(123, 99, 99, 0.3)"
                placeholder="Enter your name"
                _placeholder={{ color: "gray.400" }}
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel color="gray.700">Email</FormLabel>
              <Input
                bg="gray.100"
                type="email"
                color="black"
                _placeholder={{ color: "gray.400" }}
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel color="gray.700">Password</FormLabel>
              <Input
                bg="gray.100"
                type="password"
                color="black"
                placeholder="Enter password"
                _placeholder={{ color: "gray.400" }}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
  <FormLabel color="gray.700">Role</FormLabel>

 <Select
  bg="gray.100"
  color="black"
  name="role"
  value={formData.role}
  onChange={handleChange}
>
  <option value="Customer" style={{ backgroundColor: "#ffffff", color: "#000" }}>
    Customer
  </option>
  <option value="Seller" style={{ backgroundColor: "#ffffff", color: "#000" }}>
    Seller
  </option>
 
</Select>
</FormControl>

            <Button
              colorScheme="green"
              w="100%"
              size="lg"
              type="submit"
            >
              Create Account
            </Button>

            <Text fontSize="sm" color="gray.600">
              Already have an account?{" "}
              <Link
                as={RouterLink}
                to="/"
                color="green.600"
                fontWeight="bold"
              >
                Login
              </Link>
            </Text>

          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default Register;