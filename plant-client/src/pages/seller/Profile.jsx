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
    <Box p={6}>
      <Heading size="lg" color="green.700" mb={6}>
        Seller Profile
      </Heading>

      <Box
        bg="gray.800"
        p={6}
        rounded="lg"
        shadow="md"
        maxW="700px"
      >
        <Text fontWeight="bold">Email</Text>
        <Text mb={4}>{user.email}</Text>
        

        <Text fontWeight="bold">Role</Text>
        <Badge colorScheme="green" mb={4}>
          {user.role}
        </Badge>

        <Divider my={6} />

        <Box as="form" onSubmit={handleSaveName}>
          <FormControl>
            <FormLabel>Full Name</FormLabel>

            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <Button
            mt={4}
            colorScheme="green"
            type="submit"
            isLoading={isSavingName}
          >
            Save Profile
          </Button>
        </Box>

        <Divider my={8} />

        <Box as="form" onSubmit={handleChangePassword}>
          <Heading size="md" mb={4}>
            Change Password
          </Heading>

          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Current Password</FormLabel>

              <Input
                type="password"
                value={currentPassword}
                onChange={(e) =>
                  setCurrentPassword(e.target.value)
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>New Password</FormLabel>

              <Input
                type="password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(e.target.value)
                }
              />
            </FormControl>
          </VStack>

          <Button
            mt={5}
            colorScheme="blue"
            type="submit"
            isLoading={isSavingPassword}
          >
            Update Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
}