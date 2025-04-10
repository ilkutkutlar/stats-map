import { Colours, ValueFormatters } from "../constants";
import { ColourMap } from "../colour_map";
import { Dataset } from "../dataset";
import { LocalAuthoritiesGeoJSON } from "../svg_maps/local_authorities";

const metadata = {
  id: "population_local",
  name: "Population",
  description:
    "Estimated resident population of each region. The estimates are produced on the 30th of June for every year.",
  source: "Office for National Statistics (ONS)",
  sourceLink:
    "https://www.ons.gov.uk/datasets/mid-year-pop-est/editions/mid-2020-april-2021-geography/versions/1",
  boundaries: "Local Authority Districts",
};

const colourMap = new ColourMap([
  { range: [0, 100000], colour: Colours.GREEN },
  { range: [100000, 250000], colour: Colours.YELLOW },
  { range: [250000, 500000], colour: Colours.ORANGE },
  { range: [500000, 2000000], colour: Colours.RED },
]);

export const population = new Dataset(
  metadata,
  LocalAuthoritiesGeoJSON,
  colourMap,
  ValueFormatters.LARGE_NUMBER,
  "./data/dataset/population.json",
);
