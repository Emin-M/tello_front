import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useParams, useSearchParams } from "react-router-dom";

/* Styles */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Skeleton,
} from "@mui/material";
import { FilterMobileTop, StyledFilters } from "./styles/Filters.styled";

/* Images */
import close from "../../../assets/images/icons/close.png";

interface IProps {
  showFilter: boolean;
  setShowFilter: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Filters = ({ showFilter, setShowFilter }: IProps) => {
  const { categories, loading } = useSelector(
    (state: RootState) => state.categories
  );

  /* Url */
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  let paramsBrand = searchParams.getAll("brand");
  let paramsArray = paramsBrand?.[0]?.split(",");

  /* Handle when checking checkbox */
  const handleChange = (event: any): void => {
    const newParam = event?.target?.value;
    searchParams.delete("page");

    if (paramsArray?.includes(newParam)) {
      const index = paramsArray.indexOf(newParam);
      paramsArray.splice(index, 1);
    } else {
      paramsArray = [...paramsBrand, newParam];
    }
    searchParams.set("brand", paramsArray.toString());
    paramsArray?.length === 0 && searchParams.delete("brand");
    setSearchParams(searchParams);
  };

  /* Accordion Open Handle */
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <StyledFilters style={showFilter ? { left: "0" } : { left: "-100%" }}>
      <FilterMobileTop>
        <img src={close} alt="close" onClick={() => setShowFilter(false)} />
        <p>Filterləmələr</p>
      </FilterMobileTop>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleAccordionChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>Brend</h3>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {loading === "pending" ? (
              <>
                <Skeleton
                  animation="wave"
                  width={150}
                  height={30}
                  variant="text"
                />
                <Skeleton
                  animation="wave"
                  width={150}
                  height={30}
                  variant="text"
                />
                <Skeleton
                  animation="wave"
                  width={150}
                  height={30}
                  variant="text"
                />
              </>
            ) : (
              categories?.[0]?.children.map((subCategories) => {
                if (subCategories.name === id) {
                  return subCategories.children.map((s: { name: string }) => {
                    return (
                      <FormControlLabel
                        key={s.name}
                        control={
                          paramsArray?.includes(s.name) ? (
                            <Checkbox checked />
                          ) : (
                            <Checkbox />
                          )
                        }
                        label={s.name}
                        value={s.name}
                        onChange={handleChange}
                      />
                    );
                  });
                }
              })
            )}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>Qiymət</h3>
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
