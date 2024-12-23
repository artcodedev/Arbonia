type ModelOrigin = {
  id: string;
  name: string;
  nameLong: string;
  nameShort: string;

  description?: string;
  width: string;
  height: string;
  lengthSection: string;

  badgesString?: string;

  dt50: string;
  dt60: string;
  priceSectionEuro: string;

  imagePrimary: string;
  imagesOther?: string;

  inStock?: "true";
  color?: string;
  connection?: string;
  inStockSections?: string;

  exponentN: string; 
  weightSection: string; 
  sectionsMax: string;
};

export type { ModelOrigin };
