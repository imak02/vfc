import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import DietList from "./DietList";
import DietDetails from "./DietDetails";

const DietAccordion = ({ dietData }) => {
  console.log(dietData);
  return (
    <Box>
      <Typography variant="h5" component="h3" fontWeight="bold" sx={{ my: 2 }}>
        Breakfast
      </Typography>
      {dietData?.breakfast?.map((diet) => (
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
