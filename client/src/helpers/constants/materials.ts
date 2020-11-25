import { EnumMaterialType as Materials } from 'graphql/generated';

type MaterialColors = {
  color: string;
  bgColor: string;
};

export const MaterialsDictionary: Record<Materials, MaterialColors> = {
  [Materials.Wood]: {
    bgColor: '#aa5500',
    color: '#fff',
  },
  [Materials.Metal]: {
    bgColor: '#ddd',
    color: '#444',
  },
  [Materials.Plastic]: {
    bgColor: '#fff',
    color: '#000',
  },
  [Materials.Glass]: {
    bgColor: '#fff',
    color: '#000',
  },
  [Materials.Fabric]: {
    bgColor: '#fff',
    color: '#000',
  },
  [Materials.Stone]: {
    bgColor: '#fff',
    color: '#000',
  },
  [Materials.Ceramic]: {
    bgColor: '#fff',
    color: '#000',
  },
};

export default {
  MaterialsDictionary,
  Materials,
};
