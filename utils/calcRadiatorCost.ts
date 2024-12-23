import { ColorOrigin } from "../models/colorOrigin.model";
import { ConnectionOrigin } from "../models/connectionOrigin.model";
import { ModelOrigin } from "../models/modelOrigin.model";
import { RadiatorConsoles } from "../models/radiatorConsoles.model";
import { RadiatorCost } from "../models/radiatorCost.model";

import global from "./../variables/global";
import getConsolesQnty from "./getConsolesQnty";

import { w161h121Price } from "../variablesPrices/consolePrices";

type CalcRadiatorCostProps = {
  model: ModelOrigin;
  color: ColorOrigin;
  connection: ConnectionOrigin;
  secQnty?: number;
  currencyRate: number;
};

type CalcRadiatorCost = (props: CalcRadiatorCostProps) => {
  price: RadiatorCost;
  consoles: RadiatorConsoles;
};

const calcRadiatorCost: CalcRadiatorCost = ({ model, color, connection, secQnty = global.sectionsDefaultMin, currencyRate}) => {

  const baseCost = +model.priceSectionEuro * secQnty;
  const baseWithColorCost = color.baseRate ? baseCost * +color.baseRate : baseCost;

  const consoles = {
    w161h121: getConsolesQnty({ model, secQnty }),
  };

  const euroCostNoConsole = baseWithColorCost + +connection.cost;

  const euroCostW161h121 = euroCostNoConsole + consoles.w161h121 * w161h121Price;

  return {
    price: {
      noConsole: Math.floor(euroCostNoConsole * currencyRate),
      w161h121: Math.floor(euroCostW161h121 * currencyRate),
    },
    consoles,
  };
};

export default calcRadiatorCost;
