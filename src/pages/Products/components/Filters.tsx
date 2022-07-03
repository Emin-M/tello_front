import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledFilters } from "./styles/Filters.styled";

const Filters = () => {
  return (
    <StyledFilters>
      <Accordion expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>Brand</h3>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Disabled" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>Storage</h3>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Disabled" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </StyledFilters>
  );
};

export default Filters;
