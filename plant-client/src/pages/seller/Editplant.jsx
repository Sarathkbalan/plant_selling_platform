import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import PlantForm from "../../components/seller/PlantForm";
import {
  getMyListingById,
  updatePlant,
} from "../../services/sellerPlantService";

export default function EditPlant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPlant();
  }, []);

  const loadPlant = async () => {
    try {
      const data = await getMyListingById(id);
      setPlant(data);
    } catch (error) {
      console.error(error);

      toast({
        title: "Failed to load plant",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      await updatePlant(id, formData);

      toast({
        title: "Plant updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/seller/plants");
    } catch (error) {
      console.error(error);

      toast({
        title: "Failed to update plant",
        description: error.response?.data || error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return (
      <Heading color="white" size="md">
        Loading...
      </Heading>
    );
  }

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        mb={6}
      >
        <Button
          leftIcon={<ArrowLeft size={18} />}
          colorScheme="green"
          variant="outline"
          onClick={() => navigate("/seller/plants")}
        >
          Back
        </Button>

        <Heading color="green.500">
          Edit Plant
        </Heading>

        <Box w="80px" />
      </Flex>

      <Box maxW="700px">
        <PlantForm
          onSubmit={handleSubmit}
          initialData={plant}
        />
      </Box>
    </>
  );
}