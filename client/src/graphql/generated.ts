import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
  Date: any;
  /** The string representation of JavaScript regexp. You may provide it with flags "/^abc.*\/i" or without flags like "^abc.*". More info about RegExp characters and flags: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
  RegExpAsString: any;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']>;
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Validation error message */
  message?: Maybe<Scalars['String']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']>;
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int'];
};


export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error message */
  message?: Maybe<Scalars['String']>;
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  product?: Maybe<Product>;
  productsById: Array<Product>;
  products: Array<Product>;
  productsPagination?: Maybe<ProductPagination>;
  material?: Maybe<Material>;
  materialsById: Array<Material>;
  materials: Array<Material>;
  aggregateMaterial?: Maybe<Scalars['Int']>;
  category?: Maybe<Type>;
  categoriesById: Array<Type>;
  categories: Array<Type>;
  aggregateCategory?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  locationsById: Array<Location>;
  locations: Array<Location>;
  aggregateLocation?: Maybe<Scalars['Int']>;
  login?: Maybe<User>;
};


export type QueryProductArgs = {
  _id: Scalars['MongoID'];
};


export type QueryProductsByIdArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsProductInput>;
};


export type QueryProductsArgs = {
  filter?: Maybe<FilterFindManyProductInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortFindManyProductInput>>;
};


export type QueryProductsPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyProductInput>;
  sort?: Maybe<SortFindManyProductInput>;
};


export type QueryMaterialArgs = {
  _id: Scalars['MongoID'];
};


export type QueryMaterialsByIdArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsMaterialInput>;
};


export type QueryMaterialsArgs = {
  filter?: Maybe<FilterFindManyMaterialInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyMaterialInput>;
};


export type QueryAggregateMaterialArgs = {
  filter?: Maybe<FilterCountMaterialInput>;
};


export type QueryCategoryArgs = {
  _id: Scalars['MongoID'];
};


export type QueryCategoriesByIdArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsTypeInput>;
};


export type QueryCategoriesArgs = {
  filter?: Maybe<FilterFindManyTypeInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyTypeInput>;
};


export type QueryAggregateCategoryArgs = {
  filter?: Maybe<FilterCountTypeInput>;
};


export type QueryLocationArgs = {
  _id: Scalars['MongoID'];
};


export type QueryLocationsByIdArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsLocationInput>;
};


export type QueryLocationsArgs = {
  filter?: Maybe<FilterFindManyLocationInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyLocationInput>;
};


export type QueryAggregateLocationArgs = {
  filter?: Maybe<FilterCountLocationInput>;
};


export type QueryLoginArgs = {
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  name: Scalars['String'];
  description: Scalars['String'];
  categoryRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  photos: Array<Maybe<Scalars['String']>>;
  views?: Maybe<Scalars['Float']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  materials: Array<Material>;
  category?: Maybe<Type>;
  locations: Array<Location>;
};


export type ProductMaterialsArgs = {
  filter?: Maybe<FilterFindManyMaterialInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyMaterialInput>;
};


export type ProductCategoryArgs = {
  filter?: Maybe<FilterFindOneTypeInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneTypeInput>;
};


export type ProductLocationsArgs = {
  filter?: Maybe<FilterFindManyLocationInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyLocationInput>;
};



export type Material = {
  __typename?: 'Material';
  type: EnumMaterialType;
  name: Scalars['String'];
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  products: Array<Product>;
};


export type MaterialProductsArgs = {
  filter?: Maybe<FilterFindManyProductInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProductInput>;
};

export enum EnumMaterialType {
  Wood = 'wood',
  Metal = 'metal',
  Plastic = 'plastic',
  Glass = 'glass',
  Ceramic = 'ceramic',
  Fabric = 'fabric',
  Stone = 'stone'
}

export type FilterFindManyProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categoryRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  views?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyProductOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyProductInput>>;
  AND?: Maybe<Array<FilterFindManyProductInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyProductOperatorsInput = {
  name?: Maybe<FilterFindManyProductNameOperatorsInput>;
  description?: Maybe<FilterFindManyProductDescriptionOperatorsInput>;
  categoryRef?: Maybe<FilterFindManyProductCategoryRefOperatorsInput>;
  locationRefs?: Maybe<FilterFindManyProductLocationRefsOperatorsInput>;
  materialRefs?: Maybe<FilterFindManyProductMaterialRefsOperatorsInput>;
  price?: Maybe<FilterFindManyProductPriceOperatorsInput>;
  quantity?: Maybe<FilterFindManyProductQuantityOperatorsInput>;
  photos?: Maybe<FilterFindManyProductPhotosOperatorsInput>;
  views?: Maybe<FilterFindManyProductViewsOperatorsInput>;
  _id?: Maybe<FilterFindManyProduct_IdOperatorsInput>;
  updatedAt?: Maybe<FilterFindManyProductUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterFindManyProductCreatedAtOperatorsInput>;
};

export type FilterFindManyProductNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};


export type FilterFindManyProductDescriptionOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductCategoryRefOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductLocationRefsOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductMaterialRefsOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductPriceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductQuantityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductPhotosOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductViewsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProduct_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyProductInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC'
}

export type FilterFindManyMaterialInput = {
  type?: Maybe<EnumMaterialType>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyMaterialOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyMaterialInput>>;
  AND?: Maybe<Array<FilterFindManyMaterialInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMaterialOperatorsInput = {
  type?: Maybe<FilterFindManyMaterialTypeOperatorsInput>;
  name?: Maybe<FilterFindManyMaterialNameOperatorsInput>;
  _id?: Maybe<FilterFindManyMaterial_IdOperatorsInput>;
  updatedAt?: Maybe<FilterFindManyMaterialUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterFindManyMaterialCreatedAtOperatorsInput>;
};

export type FilterFindManyMaterialTypeOperatorsInput = {
  gt?: Maybe<EnumMaterialType>;
  gte?: Maybe<EnumMaterialType>;
  lt?: Maybe<EnumMaterialType>;
  lte?: Maybe<EnumMaterialType>;
  ne?: Maybe<EnumMaterialType>;
  in?: Maybe<Array<Maybe<EnumMaterialType>>>;
  nin?: Maybe<Array<Maybe<EnumMaterialType>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMaterialNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMaterial_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMaterialUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMaterialCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyMaterialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type Type = {
  __typename?: 'Type';
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  products: Array<Product>;
};


export type TypeProductsArgs = {
  filter?: Maybe<FilterFindManyProductInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProductInput>;
};

export type FilterFindOneTypeInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneTypeOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneTypeInput>>;
  AND?: Maybe<Array<FilterFindOneTypeInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTypeOperatorsInput = {
  _id?: Maybe<FilterFindOneType_IdOperatorsInput>;
  updatedAt?: Maybe<FilterFindOneTypeUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterFindOneTypeCreatedAtOperatorsInput>;
};

export type FilterFindOneType_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTypeUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTypeCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneTypeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type Location = {
  __typename?: 'Location';
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  products: Array<Product>;
};


export type LocationProductsArgs = {
  filter?: Maybe<FilterFindManyProductInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProductInput>;
};

export type FilterFindManyLocationInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyLocationOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyLocationInput>>;
  AND?: Maybe<Array<FilterFindManyLocationInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyLocationOperatorsInput = {
  name?: Maybe<FilterFindManyLocationNameOperatorsInput>;
  photo?: Maybe<FilterFindManyLocationPhotoOperatorsInput>;
  _id?: Maybe<FilterFindManyLocation_IdOperatorsInput>;
  updatedAt?: Maybe<FilterFindManyLocationUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterFindManyLocationCreatedAtOperatorsInput>;
};

export type FilterFindManyLocationNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLocationPhotoOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLocation_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLocationUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLocationCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export enum SortFindByIdsProductInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC'
}

/** List of items with pagination. */
export type ProductPagination = {
  __typename?: 'ProductPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  perPage: Scalars['Int'];
  pageCount?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export enum SortFindByIdsMaterialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type FilterCountMaterialInput = {
  type?: Maybe<EnumMaterialType>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountMaterialOperatorsInput>;
  OR?: Maybe<Array<FilterCountMaterialInput>>;
  AND?: Maybe<Array<FilterCountMaterialInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountMaterialOperatorsInput = {
  type?: Maybe<FilterCountMaterialTypeOperatorsInput>;
  name?: Maybe<FilterCountMaterialNameOperatorsInput>;
  _id?: Maybe<FilterCountMaterial_IdOperatorsInput>;
  updatedAt?: Maybe<FilterCountMaterialUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterCountMaterialCreatedAtOperatorsInput>;
};

export type FilterCountMaterialTypeOperatorsInput = {
  gt?: Maybe<EnumMaterialType>;
  gte?: Maybe<EnumMaterialType>;
  lt?: Maybe<EnumMaterialType>;
  lte?: Maybe<EnumMaterialType>;
  ne?: Maybe<EnumMaterialType>;
  in?: Maybe<Array<Maybe<EnumMaterialType>>>;
  nin?: Maybe<Array<Maybe<EnumMaterialType>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountMaterialNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountMaterial_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountMaterialUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountMaterialCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindByIdsTypeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type FilterFindManyTypeInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyTypeOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyTypeInput>>;
  AND?: Maybe<Array<FilterFindManyTypeInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTypeOperatorsInput = {
  name?: Maybe<FilterFindManyTypeNameOperatorsInput>;
  photo?: Maybe<FilterFindManyTypePhotoOperatorsInput>;
  _id?: Maybe<FilterFindManyType_IdOperatorsInput>;
  updatedAt?: Maybe<FilterFindManyTypeUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterFindManyTypeCreatedAtOperatorsInput>;
};

export type FilterFindManyTypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTypePhotoOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyType_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTypeUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTypeCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyTypeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type FilterCountTypeInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountTypeOperatorsInput>;
  OR?: Maybe<Array<FilterCountTypeInput>>;
  AND?: Maybe<Array<FilterCountTypeInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountTypeOperatorsInput = {
  name?: Maybe<FilterCountTypeNameOperatorsInput>;
  photo?: Maybe<FilterCountTypePhotoOperatorsInput>;
  _id?: Maybe<FilterCountType_IdOperatorsInput>;
  updatedAt?: Maybe<FilterCountTypeUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterCountTypeCreatedAtOperatorsInput>;
};

export type FilterCountTypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountTypePhotoOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountType_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountTypeUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountTypeCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindByIdsLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type FilterCountLocationInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountLocationOperatorsInput>;
  OR?: Maybe<Array<FilterCountLocationInput>>;
  AND?: Maybe<Array<FilterCountLocationInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountLocationOperatorsInput = {
  name?: Maybe<FilterCountLocationNameOperatorsInput>;
  photo?: Maybe<FilterCountLocationPhotoOperatorsInput>;
  _id?: Maybe<FilterCountLocation_IdOperatorsInput>;
  updatedAt?: Maybe<FilterCountLocationUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterCountLocationCreatedAtOperatorsInput>;
};

export type FilterCountLocationNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountLocationPhotoOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountLocation_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountLocationUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountLocationCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createProduct?: Maybe<CreateOneProductPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateProduct?: Maybe<UpdateByIdProductPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  updateProducts?: Maybe<UpdateManyProductPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  removeProduct?: Maybe<RemoveByIdProductPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  removeProducts?: Maybe<RemoveManyProductPayload>;
  incrementProductViews?: Maybe<Product>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createMaterial?: Maybe<CreateOneMaterialPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateMaterial?: Maybe<UpdateByIdMaterialPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  updateMaterials?: Maybe<UpdateManyMaterialPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  removeMaterial?: Maybe<RemoveByIdMaterialPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  removeMaterials?: Maybe<RemoveManyMaterialPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createCategory?: Maybe<CreateOneTypePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateCategory?: Maybe<UpdateByIdTypePayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  updateCategories?: Maybe<UpdateManyTypePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  removeCategory?: Maybe<RemoveByIdTypePayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  removeCategories?: Maybe<RemoveManyTypePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createLocation?: Maybe<CreateOneLocationPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateLocation?: Maybe<UpdateByIdLocationPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  updateLocations?: Maybe<UpdateManyLocationPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  removeLocation?: Maybe<RemoveByIdLocationPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  removeLocations?: Maybe<RemoveManyLocationPayload>;
};


export type MutationCreateProductArgs = {
  record: CreateOneProductInput;
};


export type MutationUpdateProductArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdProductInput;
};


export type MutationUpdateProductsArgs = {
  record: UpdateManyProductInput;
  filter?: Maybe<FilterUpdateManyProductInput>;
  sort?: Maybe<SortUpdateManyProductInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationRemoveProductArgs = {
  _id: Scalars['MongoID'];
};


export type MutationRemoveProductsArgs = {
  filter: FilterRemoveManyProductInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationIncrementProductViewsArgs = {
  id: Scalars['MongoID'];
};


export type MutationCreateMaterialArgs = {
  record: CreateOneMaterialInput;
};


export type MutationUpdateMaterialArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdMaterialInput;
};


export type MutationUpdateMaterialsArgs = {
  record: UpdateManyMaterialInput;
  filter?: Maybe<FilterUpdateManyMaterialInput>;
  sort?: Maybe<SortUpdateManyMaterialInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationRemoveMaterialArgs = {
  _id: Scalars['MongoID'];
};


export type MutationRemoveMaterialsArgs = {
  filter: FilterRemoveManyMaterialInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationCreateCategoryArgs = {
  record: CreateOneTypeInput;
};


export type MutationUpdateCategoryArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdTypeInput;
};


export type MutationUpdateCategoriesArgs = {
  record: UpdateManyTypeInput;
  filter?: Maybe<FilterUpdateManyTypeInput>;
  sort?: Maybe<SortUpdateManyTypeInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationRemoveCategoryArgs = {
  _id: Scalars['MongoID'];
};


export type MutationRemoveCategoriesArgs = {
  filter: FilterRemoveManyTypeInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationCreateLocationArgs = {
  record: CreateOneLocationInput;
};


export type MutationUpdateLocationArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdLocationInput;
};


export type MutationUpdateLocationsArgs = {
  record: UpdateManyLocationInput;
  filter?: Maybe<FilterUpdateManyLocationInput>;
  sort?: Maybe<SortUpdateManyLocationInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationRemoveLocationArgs = {
  _id: Scalars['MongoID'];
};


export type MutationRemoveLocationsArgs = {
  filter: FilterRemoveManyLocationInput;
  limit?: Maybe<Scalars['Int']>;
};

export type CreateOneProductPayload = {
  __typename?: 'CreateOneProductPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Product>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneProductInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  categoryRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  photos: Array<Maybe<Scalars['String']>>;
  views?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdProductPayload = {
  __typename?: 'UpdateByIdProductPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Product>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categoryRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  views?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateManyProductPayload = {
  __typename?: 'UpdateManyProductPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categoryRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  views?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateManyProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categoryRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  views?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyProductOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyProductInput>>;
  AND?: Maybe<Array<FilterUpdateManyProductInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyProductOperatorsInput = {
  name?: Maybe<FilterUpdateManyProductNameOperatorsInput>;
  description?: Maybe<FilterUpdateManyProductDescriptionOperatorsInput>;
  categoryRef?: Maybe<FilterUpdateManyProductCategoryRefOperatorsInput>;
  locationRefs?: Maybe<FilterUpdateManyProductLocationRefsOperatorsInput>;
  materialRefs?: Maybe<FilterUpdateManyProductMaterialRefsOperatorsInput>;
  price?: Maybe<FilterUpdateManyProductPriceOperatorsInput>;
  quantity?: Maybe<FilterUpdateManyProductQuantityOperatorsInput>;
  photos?: Maybe<FilterUpdateManyProductPhotosOperatorsInput>;
  views?: Maybe<FilterUpdateManyProductViewsOperatorsInput>;
  _id?: Maybe<FilterUpdateManyProduct_IdOperatorsInput>;
  updatedAt?: Maybe<FilterUpdateManyProductUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterUpdateManyProductCreatedAtOperatorsInput>;
};

export type FilterUpdateManyProductNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProductDescriptionOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProductCategoryRefOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProductLocationRefsOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProductMaterialRefsOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProductPriceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProductQuantityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProductPhotosOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProductViewsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProduct_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProductUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyProductCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateManyProductInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC'
}

export type RemoveByIdProductPayload = {
  __typename?: 'RemoveByIdProductPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Product>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyProductPayload = {
  __typename?: 'RemoveManyProductPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveManyProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categoryRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  views?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyProductOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyProductInput>>;
  AND?: Maybe<Array<FilterRemoveManyProductInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyProductOperatorsInput = {
  name?: Maybe<FilterRemoveManyProductNameOperatorsInput>;
  description?: Maybe<FilterRemoveManyProductDescriptionOperatorsInput>;
  categoryRef?: Maybe<FilterRemoveManyProductCategoryRefOperatorsInput>;
  locationRefs?: Maybe<FilterRemoveManyProductLocationRefsOperatorsInput>;
  materialRefs?: Maybe<FilterRemoveManyProductMaterialRefsOperatorsInput>;
  price?: Maybe<FilterRemoveManyProductPriceOperatorsInput>;
  quantity?: Maybe<FilterRemoveManyProductQuantityOperatorsInput>;
  photos?: Maybe<FilterRemoveManyProductPhotosOperatorsInput>;
  views?: Maybe<FilterRemoveManyProductViewsOperatorsInput>;
  _id?: Maybe<FilterRemoveManyProduct_IdOperatorsInput>;
  updatedAt?: Maybe<FilterRemoveManyProductUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterRemoveManyProductCreatedAtOperatorsInput>;
};

export type FilterRemoveManyProductNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProductDescriptionOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProductCategoryRefOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProductLocationRefsOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProductMaterialRefsOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProductPriceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProductQuantityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProductPhotosOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProductViewsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProduct_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProductUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyProductCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type CreateOneMaterialPayload = {
  __typename?: 'CreateOneMaterialPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Material>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneMaterialInput = {
  type: EnumMaterialType;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdMaterialPayload = {
  __typename?: 'UpdateByIdMaterialPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Material>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdMaterialInput = {
  type?: Maybe<EnumMaterialType>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateManyMaterialPayload = {
  __typename?: 'UpdateManyMaterialPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyMaterialInput = {
  type?: Maybe<EnumMaterialType>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateManyMaterialInput = {
  type?: Maybe<EnumMaterialType>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyMaterialOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyMaterialInput>>;
  AND?: Maybe<Array<FilterUpdateManyMaterialInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyMaterialOperatorsInput = {
  type?: Maybe<FilterUpdateManyMaterialTypeOperatorsInput>;
  name?: Maybe<FilterUpdateManyMaterialNameOperatorsInput>;
  _id?: Maybe<FilterUpdateManyMaterial_IdOperatorsInput>;
  updatedAt?: Maybe<FilterUpdateManyMaterialUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterUpdateManyMaterialCreatedAtOperatorsInput>;
};

export type FilterUpdateManyMaterialTypeOperatorsInput = {
  gt?: Maybe<EnumMaterialType>;
  gte?: Maybe<EnumMaterialType>;
  lt?: Maybe<EnumMaterialType>;
  lte?: Maybe<EnumMaterialType>;
  ne?: Maybe<EnumMaterialType>;
  in?: Maybe<Array<Maybe<EnumMaterialType>>>;
  nin?: Maybe<Array<Maybe<EnumMaterialType>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyMaterialNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyMaterial_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyMaterialUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyMaterialCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateManyMaterialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type RemoveByIdMaterialPayload = {
  __typename?: 'RemoveByIdMaterialPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Material>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyMaterialPayload = {
  __typename?: 'RemoveManyMaterialPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveManyMaterialInput = {
  type?: Maybe<EnumMaterialType>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyMaterialOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyMaterialInput>>;
  AND?: Maybe<Array<FilterRemoveManyMaterialInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyMaterialOperatorsInput = {
  type?: Maybe<FilterRemoveManyMaterialTypeOperatorsInput>;
  name?: Maybe<FilterRemoveManyMaterialNameOperatorsInput>;
  _id?: Maybe<FilterRemoveManyMaterial_IdOperatorsInput>;
  updatedAt?: Maybe<FilterRemoveManyMaterialUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterRemoveManyMaterialCreatedAtOperatorsInput>;
};

export type FilterRemoveManyMaterialTypeOperatorsInput = {
  gt?: Maybe<EnumMaterialType>;
  gte?: Maybe<EnumMaterialType>;
  lt?: Maybe<EnumMaterialType>;
  lte?: Maybe<EnumMaterialType>;
  ne?: Maybe<EnumMaterialType>;
  in?: Maybe<Array<Maybe<EnumMaterialType>>>;
  nin?: Maybe<Array<Maybe<EnumMaterialType>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyMaterialNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyMaterial_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyMaterialUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyMaterialCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type CreateOneTypePayload = {
  __typename?: 'CreateOneTypePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Type>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneTypeInput = {
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdTypePayload = {
  __typename?: 'UpdateByIdTypePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Type>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdTypeInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateManyTypePayload = {
  __typename?: 'UpdateManyTypePayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyTypeInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateManyTypeInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyTypeOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyTypeInput>>;
  AND?: Maybe<Array<FilterUpdateManyTypeInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyTypeOperatorsInput = {
  name?: Maybe<FilterUpdateManyTypeNameOperatorsInput>;
  photo?: Maybe<FilterUpdateManyTypePhotoOperatorsInput>;
  _id?: Maybe<FilterUpdateManyType_IdOperatorsInput>;
  updatedAt?: Maybe<FilterUpdateManyTypeUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterUpdateManyTypeCreatedAtOperatorsInput>;
};

export type FilterUpdateManyTypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyTypePhotoOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyType_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyTypeUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyTypeCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateManyTypeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type RemoveByIdTypePayload = {
  __typename?: 'RemoveByIdTypePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Type>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyTypePayload = {
  __typename?: 'RemoveManyTypePayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveManyTypeInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyTypeOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyTypeInput>>;
  AND?: Maybe<Array<FilterRemoveManyTypeInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyTypeOperatorsInput = {
  name?: Maybe<FilterRemoveManyTypeNameOperatorsInput>;
  photo?: Maybe<FilterRemoveManyTypePhotoOperatorsInput>;
  _id?: Maybe<FilterRemoveManyType_IdOperatorsInput>;
  updatedAt?: Maybe<FilterRemoveManyTypeUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterRemoveManyTypeCreatedAtOperatorsInput>;
};

export type FilterRemoveManyTypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyTypePhotoOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyType_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyTypeUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyTypeCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type CreateOneLocationPayload = {
  __typename?: 'CreateOneLocationPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Location>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneLocationInput = {
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdLocationPayload = {
  __typename?: 'UpdateByIdLocationPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Location>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdLocationInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateManyLocationPayload = {
  __typename?: 'UpdateManyLocationPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyLocationInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateManyLocationInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyLocationOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyLocationInput>>;
  AND?: Maybe<Array<FilterUpdateManyLocationInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyLocationOperatorsInput = {
  name?: Maybe<FilterUpdateManyLocationNameOperatorsInput>;
  photo?: Maybe<FilterUpdateManyLocationPhotoOperatorsInput>;
  _id?: Maybe<FilterUpdateManyLocation_IdOperatorsInput>;
  updatedAt?: Maybe<FilterUpdateManyLocationUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterUpdateManyLocationCreatedAtOperatorsInput>;
};

export type FilterUpdateManyLocationNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyLocationPhotoOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyLocation_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyLocationUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyLocationCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateManyLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type RemoveByIdLocationPayload = {
  __typename?: 'RemoveByIdLocationPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Location>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyLocationPayload = {
  __typename?: 'RemoveManyLocationPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveManyLocationInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyLocationOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyLocationInput>>;
  AND?: Maybe<Array<FilterRemoveManyLocationInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyLocationOperatorsInput = {
  name?: Maybe<FilterRemoveManyLocationNameOperatorsInput>;
  photo?: Maybe<FilterRemoveManyLocationPhotoOperatorsInput>;
  _id?: Maybe<FilterRemoveManyLocation_IdOperatorsInput>;
  updatedAt?: Maybe<FilterRemoveManyLocationUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterRemoveManyLocationCreatedAtOperatorsInput>;
};

export type FilterRemoveManyLocationNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyLocationPhotoOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyLocation_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyLocationUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyLocationCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type ProductCardFieldsFragment = (
  { __typename?: 'Product' }
  & Pick<Product, '_id' | 'name' | 'description' | 'price' | 'quantity' | 'photos'>
);

export type IncrementViewsMutationVariables = Exact<{
  id: Scalars['MongoID'];
}>;


export type IncrementViewsMutation = (
  { __typename?: 'Mutation' }
  & { incrementProductViews?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, '_id' | 'name' | 'views'>
  )> }
);

export type CreateProductMutationVariables = Exact<{
  record: CreateOneProductInput;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct?: Maybe<(
    { __typename?: 'CreateOneProductPayload' }
    & { record?: Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, '_id' | 'name' | 'description' | 'price' | 'quantity' | 'photos'>
      & { materials: Array<(
        { __typename?: 'Material' }
        & Pick<Material, 'name'>
      )> }
    )> }
  )> }
);

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['MongoID'];
  record: UpdateByIdProductInput;
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct?: Maybe<(
    { __typename?: 'UpdateByIdProductPayload' }
    & { record?: Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, '_id' | 'name' | 'description' | 'price' | 'quantity' | 'photos'>
      & { materials: Array<(
        { __typename?: 'Material' }
        & Pick<Material, 'name'>
      )> }
    )> }
  )> }
);

export type CartQueryVariables = Exact<{
  ids: Array<Scalars['MongoID']>;
}>;


export type CartQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, '_id' | 'name' | 'description' | 'photos' | 'price' | 'quantity'>
    & { category?: Maybe<(
      { __typename?: 'Type' }
      & Pick<Type, 'name'>
    )> }
  )> }
);

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Type' }
    & Pick<Type, '_id' | 'name'>
  )> }
);

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Type' }
    & Pick<Type, '_id' | 'name' | 'photo'>
  )>, products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, '_id' | 'name' | 'photos' | 'description' | 'price' | 'quantity'>
  )> }
);

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = (
  { __typename?: 'Query' }
  & { locations: Array<(
    { __typename?: 'Location' }
    & Pick<Location, '_id' | 'name'>
  )> }
);

export type MaterialsQueryVariables = Exact<{ [key: string]: never; }>;


export type MaterialsQuery = (
  { __typename?: 'Query' }
  & { materials: Array<(
    { __typename?: 'Material' }
    & Pick<Material, '_id' | 'name'>
  )> }
);

export type ProductQueryVariables = Exact<{
  id: Scalars['MongoID'];
  admin: Scalars['Boolean'];
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, '_id' | 'photos' | 'name' | 'description' | 'price' | 'quantity' | 'categoryRef' | 'materialRefs' | 'locationRefs'>
    & { category?: Maybe<(
      { __typename?: 'Type' }
      & Pick<Type, '_id' | 'name'>
    )>, locations: Array<(
      { __typename?: 'Location' }
      & Pick<Location, '_id' | 'name'>
    )>, materials: Array<(
      { __typename?: 'Material' }
      & Pick<Material, '_id' | 'name' | 'type'>
    )> }
  )>, materials: Array<(
    { __typename?: 'Material' }
    & Pick<Material, '_id' | 'name'>
  )>, recommended: Array<(
    { __typename?: 'Product' }
    & ProductCardFieldsFragment
  )> }
);

export type ProductsQueryVariables = Exact<{
  filter?: Maybe<FilterFindManyProductInput>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProductInput>;
}>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { productsPagination?: Maybe<(
    { __typename?: 'ProductPagination' }
    & { items?: Maybe<Array<(
      { __typename?: 'Product' }
      & ProductCardFieldsFragment
    )>>, pageInfo: (
      { __typename?: 'PaginationInfo' }
      & Pick<PaginationInfo, 'currentPage' | 'pageCount'>
    ) }
  )> }
);

export type RecentlyModifiedQueryVariables = Exact<{
  date: Scalars['Date'];
}>;


export type RecentlyModifiedQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, '_id' | 'name' | 'photos' | 'updatedAt'>
  )>, materials: Array<(
    { __typename?: 'Material' }
    & Pick<Material, '_id' | 'name' | 'updatedAt'>
  )>, categories: Array<(
    { __typename?: 'Type' }
    & Pick<Type, '_id' | 'name' | 'photo' | 'updatedAt'>
  )>, locations: Array<(
    { __typename?: 'Location' }
    & Pick<Location, '_id' | 'name' | 'photo' | 'updatedAt'>
  )> }
);

export const ProductCardFieldsFragmentDoc = gql`
    fragment productCardFields on Product {
  _id
  name
  description
  price
  quantity
  photos
}
    `;
export const IncrementViewsDocument = gql`
    mutation incrementViews($id: MongoID!) {
  incrementProductViews(id: $id) {
    _id
    name
    views
  }
}
    `;
export type IncrementViewsMutationFn = Apollo.MutationFunction<IncrementViewsMutation, IncrementViewsMutationVariables>;

/**
 * __useIncrementViewsMutation__
 *
 * To run a mutation, you first call `useIncrementViewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIncrementViewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [incrementViewsMutation, { data, loading, error }] = useIncrementViewsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIncrementViewsMutation(baseOptions?: Apollo.MutationHookOptions<IncrementViewsMutation, IncrementViewsMutationVariables>) {
        return Apollo.useMutation<IncrementViewsMutation, IncrementViewsMutationVariables>(IncrementViewsDocument, baseOptions);
      }
export type IncrementViewsMutationHookResult = ReturnType<typeof useIncrementViewsMutation>;
export type IncrementViewsMutationResult = Apollo.MutationResult<IncrementViewsMutation>;
export type IncrementViewsMutationOptions = Apollo.BaseMutationOptions<IncrementViewsMutation, IncrementViewsMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($record: CreateOneProductInput!) {
  createProduct(record: $record) {
    record {
      _id
      name
      description
      price
      quantity
      materials {
        name
      }
      photos
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      record: // value for 'record'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($id: MongoID!, $record: UpdateByIdProductInput!) {
  updateProduct(_id: $id, record: $record) {
    record {
      _id
      name
      description
      price
      quantity
      materials {
        name
      }
      photos
    }
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      record: // value for 'record'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const CartDocument = gql`
    query cart($ids: [MongoID!]!) {
  products: productsById(_ids: $ids) {
    _id
    name
    description
    photos
    price
    category {
      name
    }
    quantity
  }
}
    `;

/**
 * __useCartQuery__
 *
 * To run a query within a React component, call `useCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useCartQuery(baseOptions: Apollo.QueryHookOptions<CartQuery, CartQueryVariables>) {
        return Apollo.useQuery<CartQuery, CartQueryVariables>(CartDocument, baseOptions);
      }
export function useCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartQuery, CartQueryVariables>) {
          return Apollo.useLazyQuery<CartQuery, CartQueryVariables>(CartDocument, baseOptions);
        }
export type CartQueryHookResult = ReturnType<typeof useCartQuery>;
export type CartLazyQueryHookResult = ReturnType<typeof useCartLazyQuery>;
export type CartQueryResult = Apollo.QueryResult<CartQuery, CartQueryVariables>;
export const CategoriesDocument = gql`
    query categories {
  categories {
    _id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const HomeDocument = gql`
    query Home {
  categories(limit: 5) {
    _id
    name
    photo
  }
  products(limit: 10) {
    _id
    name
    photos
    description
    price
    quantity
  }
}
    `;

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQuery(baseOptions?: Apollo.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
        return Apollo.useQuery<HomeQuery, HomeQueryVariables>(HomeDocument, baseOptions);
      }
export function useHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>) {
          return Apollo.useLazyQuery<HomeQuery, HomeQueryVariables>(HomeDocument, baseOptions);
        }
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = Apollo.QueryResult<HomeQuery, HomeQueryVariables>;
export const LocationsDocument = gql`
    query locations {
  locations {
    _id
    name
  }
}
    `;

/**
 * __useLocationsQuery__
 *
 * To run a query within a React component, call `useLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocationsQuery(baseOptions?: Apollo.QueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
        return Apollo.useQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, baseOptions);
      }
export function useLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
          return Apollo.useLazyQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, baseOptions);
        }
export type LocationsQueryHookResult = ReturnType<typeof useLocationsQuery>;
export type LocationsLazyQueryHookResult = ReturnType<typeof useLocationsLazyQuery>;
export type LocationsQueryResult = Apollo.QueryResult<LocationsQuery, LocationsQueryVariables>;
export const MaterialsDocument = gql`
    query materials {
  materials {
    _id
    name
  }
}
    `;

/**
 * __useMaterialsQuery__
 *
 * To run a query within a React component, call `useMaterialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaterialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaterialsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMaterialsQuery(baseOptions?: Apollo.QueryHookOptions<MaterialsQuery, MaterialsQueryVariables>) {
        return Apollo.useQuery<MaterialsQuery, MaterialsQueryVariables>(MaterialsDocument, baseOptions);
      }
export function useMaterialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaterialsQuery, MaterialsQueryVariables>) {
          return Apollo.useLazyQuery<MaterialsQuery, MaterialsQueryVariables>(MaterialsDocument, baseOptions);
        }
export type MaterialsQueryHookResult = ReturnType<typeof useMaterialsQuery>;
export type MaterialsLazyQueryHookResult = ReturnType<typeof useMaterialsLazyQuery>;
export type MaterialsQueryResult = Apollo.QueryResult<MaterialsQuery, MaterialsQueryVariables>;
export const ProductDocument = gql`
    query product($id: MongoID!, $admin: Boolean!) {
  product(_id: $id) {
    _id
    photos
    name
    description
    price
    quantity
    categoryRef
    materialRefs
    locationRefs
    category {
      _id
      name
    }
    locations {
      _id
      name
    }
    materials {
      _id
      name
      type
    }
  }
  materials @skip(if: $admin) {
    _id
    name
  }
  recommended: products(limit: 5) {
    ...productCardFields
  }
}
    ${ProductCardFieldsFragmentDoc}`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *      admin: // value for 'admin'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query Products($filter: FilterFindManyProductInput, $page: Int = 1, $perPage: Int = 10, $sort: SortFindManyProductInput) {
  productsPagination(filter: $filter, page: $page, perPage: $perPage, sort: $sort) {
    items {
      ...productCardFields
    }
    pageInfo {
      currentPage
      pageCount
    }
  }
}
    ${ProductCardFieldsFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const RecentlyModifiedDocument = gql`
    query RecentlyModified($date: Date!) {
  products(filter: {_operators: {updatedAt: {gte: $date}}}, sort: UPDATEDAT_DESC) {
    _id
    name
    photos
    updatedAt
  }
  materials(filter: {_operators: {updatedAt: {gte: $date}}}, sort: UPDATEDAT_DESC) {
    _id
    name
    updatedAt
  }
  categories(
    filter: {_operators: {updatedAt: {gte: $date}}}
    sort: UPDATEDAT_DESC
  ) {
    _id
    name
    photo
    updatedAt
  }
  locations(filter: {_operators: {updatedAt: {gte: $date}}}, sort: UPDATEDAT_DESC) {
    _id
    name
    photo
    updatedAt
  }
}
    `;

/**
 * __useRecentlyModifiedQuery__
 *
 * To run a query within a React component, call `useRecentlyModifiedQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentlyModifiedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentlyModifiedQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useRecentlyModifiedQuery(baseOptions: Apollo.QueryHookOptions<RecentlyModifiedQuery, RecentlyModifiedQueryVariables>) {
        return Apollo.useQuery<RecentlyModifiedQuery, RecentlyModifiedQueryVariables>(RecentlyModifiedDocument, baseOptions);
      }
export function useRecentlyModifiedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentlyModifiedQuery, RecentlyModifiedQueryVariables>) {
          return Apollo.useLazyQuery<RecentlyModifiedQuery, RecentlyModifiedQueryVariables>(RecentlyModifiedDocument, baseOptions);
        }
export type RecentlyModifiedQueryHookResult = ReturnType<typeof useRecentlyModifiedQuery>;
export type RecentlyModifiedLazyQueryHookResult = ReturnType<typeof useRecentlyModifiedLazyQuery>;
export type RecentlyModifiedQueryResult = Apollo.QueryResult<RecentlyModifiedQuery, RecentlyModifiedQueryVariables>;