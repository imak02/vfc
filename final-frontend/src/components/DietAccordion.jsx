import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import DietDetails from "./DietDetails";

const DietAccordion = ({ title, dietData }) => {
  return (
    <Box>
      <Typography variant="h5" component="h3" fontWeight="bold" sx={{ my: 2 }}>
        {title}
      </Typography>
      {dietData?.map((diet) => (
        <Accordion key={diet.RecipeId} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize="large" />}
            aria-controls={`${diet.Name}-content`}
            id={`${diet.Name}-header`}
          >
            <Typography variant="h6" sx={{ p: 1 }}>
              {diet.Name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ mx: { md: 4 } }}>
            <DietDetails diet={diet} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default DietAccordion;
