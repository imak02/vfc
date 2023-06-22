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

const MyAccordion = ({ title, headers, content }) => {
  return (
    <Box>
      <Typography variant="h5" component="h3" fontWeight="bold" sx={{ my: 2 }}>
        {title}
      </Typography>
      {headers?.map((header) => (
        <Accordion key={header.id} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize="large" />}
            aria-controls={`${header.title}-content`}
            id={`${header.title}-header`}
          >
            <Typography variant="h6" sx={{ p: 1 }}>
              {header.title}
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
                  label={content}
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
                  label={content}
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
                  label={content}
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

export default MyAccordion;
