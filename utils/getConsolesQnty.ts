// import { ColorOrigin } from "../models/colorOrigin.model";
import { ModelOrigin } from "../models/modelOrigin.model";

type getConsolesQnty = {
  model: ModelOrigin;
  secQnty: number;
};

const getConsolesQnty = ({ model, secQnty }: getConsolesQnty): number => {
  let qnty = 0;

  switch (true) {
    case +model.width <= 145 && +model.height <= 1000:
      qnty = secQnty <= 28 ? 2 : secQnty <= 42 ? 3 : secQnty <= 52 ? 4 : secQnty <= 60 ? 5 : 6;
      break;

    case +model.width <= 145 && +model.height <= 2200:
      qnty = secQnty <= 16 ? 2 : secQnty <= 28 ? 3 : secQnty <= 38 ? 4 : secQnty <= 48 ? 5 : secQnty <= 60 ? 6 : 7;
      break;

    case +model.width <= 145 && +model.height <= 3000:
      qnty = secQnty <= 16 ? 2 : secQnty <= 24 ? 3 : secQnty <= 30 ? 4 : 5;
      break;

    case +model.width > 145 && +model.height <= 550:
      qnty = secQnty <= 12 ? 2 : secQnty <= 30 ? 3 : secQnty <= 40 ? 4 : secQnty <= 50 ? 5 : secQnty <= 60 ? 6 : 7;
      break;

    case +model.width > 145 && +model.height <= 1500:
      qnty = secQnty <= 16 ? 2 : secQnty <= 26 ? 3 : secQnty <= 36 ? 4 : secQnty <= 46 ? 5 : secQnty <= 56 ? 6 : 7;
      break;

    case +model.width > 145 && +model.height <= 3000:
      qnty = secQnty <= 10 ? 2 : secQnty <= 18 ? 3 : secQnty <= 24 ? 4 : secQnty <= 30 ? 5 : 6;
      break;

    default:
      qnty = 4;
  }

  return qnty;
};

export default getConsolesQnty;
