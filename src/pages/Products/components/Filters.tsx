import { FC, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FilterMobileTop, StyledFilters } from "./styles/Filters.styled";

/* Images */
import close from "../../../assets/images/icons/close.png";

interface IProps {
  showFilter: boolean;
  setShowFilter: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Filters = ({ showFilter, setShowFilter }: IProps) => {
  return (
    <StyledFilters style={showFilter ? { left: "0" } : { left: "-100%" }}>
      <FilterMobileTop>
        <img src={close} alt="close" onClick={() => setShowFilter(false)} />
        <p>Filterləmələr</p>
      </FilterMobileTop>
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
