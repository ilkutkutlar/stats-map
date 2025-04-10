import { Colours, ValueFormatters } from "../constants";
import { ColourMap } from "../colour_map";
import { Dataset } from "../dataset";
import { LocalAuthoritiesGeoJSON } from "../svg_maps/local_authorities";

const metadata = {
  id: "pubs_and_bars_local",
  name: "Number of Pubs and Bars",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra lectus at ex convallis, eu semper purus maximus. In a mauris euismod, rhoncus ante a, varius velit.",
  source: "Office for National Statistics (ONS)",
  sourceLink:
    "https://www.ons.gov.uk/businessindustryandtrade/business/activitysizeandlocation/datasets/publichousesandbarsbylocalauthority",
  boundaries: "Local Authority Districts",
};

const colourMap = new ColourMap([
  { range: [0, 50], colour: Colours.RED },
  { range: [50, 100], colour: Colours.ORANGE },
  { range: [100, 150], colour: Colours.YELLOW },
  { range: [150, 200], colour: Colours.GREEN },
  { range: [200, NaN], colour: Colours.BLUE },
]);

export const pubsAndBars = new Dataset(
  metadata,
  LocalAuthoritiesGeoJSON,
  colourMap,
  ValueFormatters.NONE,
  "./data/dataset/pubs_and_bars.json",
);
