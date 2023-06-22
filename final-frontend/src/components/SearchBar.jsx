import { Search } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

const SearchBar = ({ title }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", flex: 5 }}
        >
          {title}
        </Typography>
        <Box sx={{ flex: 1, display: { xs: "none", lg: "flex" } }}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              height: "50px",
              width: "100%",
              mx: 2,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search blogs" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <Search />
            </IconButton>
          </Paper>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "black", borderBottomWidth: 2 }} />
    </Box>
  );
};
export default SearchBar;
