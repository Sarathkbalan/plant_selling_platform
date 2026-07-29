// import { Box, Heading, Text } from "@chakra-ui/react";
// import { useParams } from "react-router-dom";

// function PlantDetails() {
//   const { id } = useParams();

//   return (
//     <Box p={6}>
//       <Heading mb={4}>Plant Details</Heading>
//       <Text>Plant ID: {id}</Text>
//     </Box>
//   );
// }

// export default PlantDetails;
import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";

import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";

import Breadcrumbs from "../../components/customer/product/Breadcrumbs";
import ProductGallery from "../../components/customer/product/ProductGallery";
import ProductInfo from "../../components/customer/product/ProductInfo";

// import SellerCard from "../../components/customer/product/SellerCard";
// import CareGuide from "../../components/customer/product/CareGuide";
// import ReviewSection from "../../components/customer/product/ReviewSection";
// import RelatedProducts from "../../components/customer/product/RelatedProducts";

export default function ProductDetails() {
  return (
    <Box bg="#FAF9F4" minH="100vh">
      {/* <Navbar /> */}

      <Container maxW="7xl" py={8}>
        <Breadcrumbs />

        <Grid
          mt={6}
          templateColumns={{
            base: "1fr",
            lg: "1.2fr 1fr",
          }}
          gap={10}
        >
          <GridItem>
            <ProductGallery />
          </GridItem>

          <GridItem>
            <VStack spacing={6} align="stretch">
              <ProductInfo />

              {/* <SellerCard /> */}
            </VStack>
          </GridItem>
        </Grid>

        {/* <CareGuide /> */}

        {/* <ReviewSection /> */}

        {/* <RelatedProducts /> */}
      </Container>

      {/* <Footer /> */}
    </Box>
  );
}