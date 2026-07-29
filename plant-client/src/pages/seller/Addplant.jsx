import { Box, Heading, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PlantForm from "../../components/seller/PlantForm";
import { createPlant } from "../../services/sellerPlantService";

export default function AddPlant() {
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    console.log("Submitting plant...");

    // View FormData contents
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const result = await createPlant(formData);

      console.log("API Response:", result);

      toast({
        title: "Plant added successfully 🌱",
        description: "The plant has been added.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });

      navigate("/seller/plants");
    } catch (error) {
      console.error("Error:", error);

      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);

      toast({
        title: "Failed to add plant",
        description:
          error.response?.data?.message ||
          error.response?.data ||
          error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Heading color="green.500" mb={6}>
        Add Plant
      </Heading>

      <Box maxW="600px">
        <PlantForm onSubmit={handleSubmit} />
      </Box>
    </>
  );
}