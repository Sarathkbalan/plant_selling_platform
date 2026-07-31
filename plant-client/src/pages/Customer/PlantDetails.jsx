import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  Spinner,
} from "@chakra-ui/react";

import Breadcrumbs from "../../components/customer/Product/Breadcrumbs";
import ProductGallery from "../../components/customer/Product/ProductGallery";
import ProductInfo from "../../components/customer/Product/ProductInfo";
import SellerCard from "../../components/customer/product/SellerCard";
import CareGuide from "../../components/customer/product/CareGuide";
import ReviewSection from "../../components/customer/Product/ReviewSection";
import RelatedProducts from "../../components/customer/Product/RelatedProducts";

import { getPlantById } from "../../services/plantService";

export default function ProductDetails() {
  const { id } = useParams();

  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const loadPlant = async () => {
    console.log("Route ID:", id);

    try {
      const data = await getPlantById(id);
      console.log("API Response:", data);
      setPlant(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadPlant();
}, [id]);
  if (loading) {
    return (
      <Box textAlign="center" py={20}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!plant) {
    return (
      <Box textAlign="center" py={20}>
        Plant not found.
      </Box>
    );
  }

  return (
    <Box bg="#f8f6eb" minH="100vh">
      <Container maxW="7xl" py={8}>
        <Breadcrumbs plant={plant} />

        <Grid
          mt={6}
          templateColumns={{
            base: "1fr",
            lg: "1.2fr 1fr",
          }}
          gap={10}
        >
          <GridItem>
            <ProductGallery plant={plant} />
          </GridItem>

          <GridItem>
            <VStack spacing={6} align="stretch">
              <ProductInfo plant={plant} />
              <SellerCard plant={plant} />
            </VStack>
          </GridItem>
        </Grid>

        <CareGuide plant={plant} />
        <ReviewSection plant={plant} />
        <RelatedProducts currentPlantId={plant.id} />
      </Container>
    </Box>
  );
}