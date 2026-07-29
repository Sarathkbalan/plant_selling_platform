import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Badge,
  useToast,
  Flex,
} from "@chakra-ui/react";

import { useAuth } from "../../context/AuthContext";
import { updateProfile } from "../../services/authService";

export default function Profile() {
  const { user, setUser } = useAuth();
  const toast = useToast();

  if (!user) {
    return (
      <Box p={6}>
        <Heading size="md">Loading...</Heading>
      </Box>
    );
  }

  const [name, setName] = useState(user.fullName || user.name || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isSavingName, setIsSavingName] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);

  const handleSaveName = async (e) => {
    e.preventDefault();

    setIsSavingName(true);

    try {
      const updatedUser = await updateProfile({
        fullName: name,
      });

      setUser(updatedUser);

      toast({
        title: "Profile updated successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Failed to update profile.",
        description:
          err.response?.data?.message || "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSavingName(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    setIsSavingPassword(true);

    try {
      await updateProfile({
        currentPassword,
        newPassword,
      });

      setCurrentPassword("");
      setNewPassword("");

      toast({
        title: "Password updated successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Password update failed.",
        description:
          err.response?.data?.message || "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSavingPassword(false);
    }
  };

  return (
  <Box minH="100vh" p={8}>
    <Heading color="#1B4332">
      Seller Profile
    </Heading>

    <Text color="gray.600" mb={2}>
      Manage your profile information and password.
    </Text>

    <Box
      bg="white"
      maxW="1550px"
      p={8}
      borderRadius="2xl"
      border="1px solid"
      borderColor="green.100"
      boxShadow="0 10px 30px rgba(0,0,0,.05)"
    >
      {/* Email */}
   <Box
  bg="green.50"
  p={5}
  borderRadius="lg"
  border="1px solid"
  borderColor="green.100"
  mb={2}
>
  <Flex
    justify="space-between"
    align="center"
    mb={2}
  >
    <Text
      color="gray.600"
      fontWeight="600"
    >
      Email
    </Text>

    <Text fontWeight="600">
      {user.email}
    </Text>
  

  <Divider my={3} />


  
    <Badge
      colorScheme="green"
      px={3}
      py={1}
      borderRadius="full"
      color="gray.600"
      border="1px solid"
      borderColor="green.600"
    >
      {user.role}
    </Badge>
  </Flex>
</Box>

      {/* <Divider mb={8} />   */}

      {/* Profile Form */}
      <Box
        as="form"
        onSubmit={handleSaveName}
      >
        <Heading
          size="md"
          color="#1B4332"
          mb={5}
        >
          Personal Information
        </Heading>

        <FormControl>
          <FormLabel color="#1B4332">Full Name</FormLabel>

          <Input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            bg="white"
            borderColor="green.300"
            _hover={{
              borderColor: "green.500",
            }}
            _focus={{
              borderColor: "green.500",
              boxShadow:
                "0 0 0 1px var(--chakra-colors-green-500)",
            }}
            _placeholder={{
              color: "gray.500",
            }}
          />
        </FormControl>

        <Button
          mt={6}
          colorScheme="green"
          isLoading={isSavingName}
          type="submit"
          w="200px"
          mb={2}
        >
          Save Profile
        </Button>
      </Box>

      {/* <Divider my={10} /> */}

      {/* Password */}
      <Box
        as="form"
        onSubmit={handleChangePassword}
      >
        <Heading
          size="md"
          color="#1B4332"
          mb={5}
        >
          Change Password
        </Heading>

        <VStack spacing={5}>
          <FormControl>
            <FormLabel color="#1B4332">
              Current Password
            </FormLabel>

            <Input
              type="password"
              value={currentPassword}
              onChange={(e) =>
                setCurrentPassword(
                  e.target.value
                )
              }
              borderColor="green.300"
              _hover={{
                borderColor: "green.500",
              }}
              _focus={{
                borderColor: "green.500",
              }}
              _placeholder={{
                color: "gray.500",
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel color="#1B4332">
              New Password
            </FormLabel>

            <Input
              type="password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(
                  e.target.value
                )
              }
              borderColor="green.300"
              _hover={{
                borderColor: "green.500",
              }}
              _focus={{
                borderColor: "green.500",
              }}
            />
          </FormControl>
        </VStack>

        <Button
          mt={6}
          colorScheme="green"
          type="submit"
          isLoading={isSavingPassword}
          w="220px"
        >
          Update Password
        </Button>
      </Box>
    </Box>
  </Box>
);
}