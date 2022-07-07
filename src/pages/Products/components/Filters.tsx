import { useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchProductsByCategory } from "../../../redux/actions/productActions";

/* Styles */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { FilterMobileTop, StyledFilters } from "./styles/Filters.styled";

/* Images */
import close from "../../../assets/images/icons/close.png";

interface IProps {
  showFilter: boolean;
  setShowFilter: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Filters = ({ showFilter, setShowFilter }: IProps) => {
  const { categories } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch<AppDispatch>();

  /* Url */
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.getAll("brand");
  let paramsArray = params?.[0]?.split(",");

  useEffect(() => {
    if (id) {
      dispatch(fetchProductsByCategory([id]));
    }
  }, [id]);

  /* Handle when checking checkbox */
  const handleChange = (event: any): void => {
    const newParam = event?.target?.value;

    if (paramsArray?.includes(newParam)) {
      const index = paramsArray.indexOf(newParam);
      paramsArray.splice(index, 1);
      setSearchParams(`brand=${paramsArray}`);
    } else {
      paramsArray = [...params, newParam];
      setSearchParams(`brand=${paramsArray}`);
    }

    if (paramsArray?.length === 0) {
      setSearchParams("");
    }
  };

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
