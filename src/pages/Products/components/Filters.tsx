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
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

/* Images */
import close from "../../../assets/images/icons/close.png";
import { useParams } from "react-router-dom";

interface IProps {
  showFilter: boolean;
  setShowFilter: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Filters = ({ showFilter, setShowFilter }: IProps) => {
  const { categories } = useSelector((state: RootState) => state.categories);
  const { id } = useParams();

  categories?.[0]?.children.map((sub) => {
    if (sub.name === id) {
      sub.children.map((s: { name: any }) => {
        console.log(s.name);
      });
    }
  });

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
            {categories?.[0]?.children.map((subCategories) => {
              if (subCategories.name === id) {
                return subCategories.children.map((s: { name: string }) => {
                  return (
                    <FormControlLabel control={<Checkbox />} label={s.name} />
                  );
                });
              }
            })}
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
