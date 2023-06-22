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

const dietsType = [
  { id: 1, title: "Breakfast" },
  { id: 2, title: "Brunch" },
  { id: 3, title: "Lunch" },
  { id: 4, title: "Supper" },
  { id: 5, title: "Dinner" },
];

const DietAccordion = () => {
  return (
    <Box>
      <Typography variant="h5" component="h3" fontWeight="bold" sx={{ my: 2 }}>
        Diet List
      </Typography>
      {dietsType.map((dietType) => (
        <Accordion key={dietType.id} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize="large" />}
            aria-controls={`${dietType.title}-content`}
            id={`${dietType.title}-header`}
          >
            <Typography variant="h6" sx={{ p: 1 }}>
              {dietType.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ mx: { md: 4 } }}>
            <FormControl
              sx={{ my: 3, width: "100%" }}
              component="fieldset"
              variant="standard"
            >
              <FormLabel component="legend">Select One</FormLabel>
              <FormGroup>
                <FormControlLabel
                  sx={{
                    width: "100%",
                    my: 2,
                    ".MuiFormControlLabel-label": {
                      width: "100%",
                      px: { xs: 1, md: 4 },
                    },
                  }}
                  control={
                    <Checkbox
                      checked={true}
                      name="checkbox"
                      color="success"
                      // onChange={handleChange}
                    />
                  }
                  label={<DietList />}
                />
                <FormControlLabel
                  sx={{
                    width: "100%",
                    my: 2,

                    ".MuiFormControlLabel-label": {
                      width: "100%",
                      px: { xs: 1, md: 4 },
                    },
                  }}
                  control={
                    <Checkbox
                      checked={false}
                      name="checkbox"
                      color="success"
                      // onChange={handleChange}
                    />
                  }
                  label={<DietList />}
                />
                <FormControlLabel
                  sx={{
                    width: "100%",
                    my: 2,

                    ".MuiFormControlLabel-label": {
                      width: "100%",
                      px: { xs: 1, md: 4 },
                    },
                  }}
                  control={
                    <Checkbox
                      checked={false}
                      name="checkbox"
                      color="success"
                      // onChange={handleChange}
                    />
                  }
                  label={<DietList />}
                />
              </FormGroup>
              <FormHelperText>Be careful</FormHelperText>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default DietAccordion;
