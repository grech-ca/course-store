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
  productById?: Maybe<Product>;
  productByIds: Array<Product>;
  productOne?: Maybe<Product>;
  productMany: Array<Product>;
  productCount?: Maybe<Scalars['Int']>;
  productConnection?: Maybe<ProductConnection>;
  productPagination?: Maybe<ProductPagination>;
  materialById?: Maybe<Material>;
  materialByIds: Array<Material>;
  materialOne?: Maybe<Material>;
  materialMany: Array<Material>;
  materialCount?: Maybe<Scalars['Int']>;
  materialConnection?: Maybe<MaterialConnection>;
  materialPagination?: Maybe<MaterialPagination>;
  typeById?: Maybe<Type>;
  typeByIds: Array<Type>;
  typeOne?: Maybe<Type>;
  typeMany: Array<Type>;
  typeCount?: Maybe<Scalars['Int']>;
  typeConnection?: Maybe<TypeConnection>;
  typePagination?: Maybe<TypePagination>;
  locationById?: Maybe<Location>;
  locationByIds: Array<Location>;
  locationOne?: Maybe<Location>;
  locationMany: Array<Location>;
  locationCount?: Maybe<Scalars['Int']>;
  locationConnection?: Maybe<LocationConnection>;
  locationPagination?: Maybe<LocationPagination>;
};

export type QueryProductByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryProductByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsProductInput>;
};

export type QueryProductOneArgs = {
  filter?: Maybe<FilterFindOneProductInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneProductInput>;
};

export type QueryProductManyArgs = {
  filter?: Maybe<FilterFindManyProductInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortFindManyProductInput>>;
};

export type QueryProductCountArgs = {
  filter?: Maybe<FilterCountProductInput>;
};

export type QueryProductConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyProductInput>;
  sort?: Maybe<SortConnectionProductEnum>;
};

export type QueryProductPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyProductInput>;
  sort?: Maybe<SortFindManyProductInput>;
};

export type QueryMaterialByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryMaterialByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsMaterialInput>;
};

export type QueryMaterialOneArgs = {
  filter?: Maybe<FilterFindOneMaterialInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneMaterialInput>;
};

export type QueryMaterialManyArgs = {
  filter?: Maybe<FilterFindManyMaterialInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyMaterialInput>;
};

export type QueryMaterialCountArgs = {
  filter?: Maybe<FilterCountMaterialInput>;
};

export type QueryMaterialConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyMaterialInput>;
  sort?: Maybe<SortConnectionMaterialEnum>;
};

export type QueryMaterialPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyMaterialInput>;
  sort?: Maybe<SortFindManyMaterialInput>;
};

export type QueryTypeByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryTypeByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsTypeInput>;
};

export type QueryTypeOneArgs = {
  filter?: Maybe<FilterFindOneTypeInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneTypeInput>;
};

export type QueryTypeManyArgs = {
  filter?: Maybe<FilterFindManyTypeInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyTypeInput>;
};

export type QueryTypeCountArgs = {
  filter?: Maybe<FilterCountTypeInput>;
};

export type QueryTypeConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyTypeInput>;
  sort?: Maybe<SortConnectionTypeEnum>;
};

export type QueryTypePaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyTypeInput>;
  sort?: Maybe<SortFindManyTypeInput>;
};

export type QueryLocationByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryLocationByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsLocationInput>;
};

export type QueryLocationOneArgs = {
  filter?: Maybe<FilterFindOneLocationInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneLocationInput>;
};

export type QueryLocationManyArgs = {
  filter?: Maybe<FilterFindManyLocationInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyLocationInput>;
};

export type QueryLocationCountArgs = {
  filter?: Maybe<FilterCountLocationInput>;
};

export type QueryLocationConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyLocationInput>;
  sort?: Maybe<SortConnectionLocationEnum>;
};

export type QueryLocationPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyLocationInput>;
  sort?: Maybe<SortFindManyLocationInput>;
};

export type Product = {
  __typename?: 'Product';
  name: Scalars['String'];
  description: Scalars['String'];
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  photos: Array<Maybe<Scalars['String']>>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  materials: Array<Material>;
  type?: Maybe<Type>;
  locations: Array<Location>;
};

export type ProductMaterialsArgs = {
  filter?: Maybe<FilterFindManyMaterialInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyMaterialInput>;
};

export type ProductTypeArgs = {
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
  Stone = 'stone',
}

export type FilterFindManyProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  typeRef?: Maybe<FilterFindManyProductTypeRefOperatorsInput>;
  locationRefs?: Maybe<FilterFindManyProductLocationRefsOperatorsInput>;
  materialRefs?: Maybe<FilterFindManyProductMaterialRefsOperatorsInput>;
  price?: Maybe<FilterFindManyProductPriceOperatorsInput>;
  quantity?: Maybe<FilterFindManyProductQuantityOperatorsInput>;
  photos?: Maybe<FilterFindManyProductPhotosOperatorsInput>;
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

export type FilterFindManyProductTypeRefOperatorsInput = {
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
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

export enum SortFindByIdsProductInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

export type FilterFindOneProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneProductOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneProductInput>>;
  AND?: Maybe<Array<FilterFindOneProductInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneProductOperatorsInput = {
  _id?: Maybe<FilterFindOneProduct_IdOperatorsInput>;
  createdAt?: Maybe<FilterFindOneProductCreatedAtOperatorsInput>;
};

export type FilterFindOneProduct_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneProductCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneProductInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

export type FilterCountProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountProductOperatorsInput>;
  OR?: Maybe<Array<FilterCountProductInput>>;
  AND?: Maybe<Array<FilterCountProductInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountProductOperatorsInput = {
  name?: Maybe<FilterCountProductNameOperatorsInput>;
  description?: Maybe<FilterCountProductDescriptionOperatorsInput>;
  typeRef?: Maybe<FilterCountProductTypeRefOperatorsInput>;
  locationRefs?: Maybe<FilterCountProductLocationRefsOperatorsInput>;
  materialRefs?: Maybe<FilterCountProductMaterialRefsOperatorsInput>;
  price?: Maybe<FilterCountProductPriceOperatorsInput>;
  quantity?: Maybe<FilterCountProductQuantityOperatorsInput>;
  photos?: Maybe<FilterCountProductPhotosOperatorsInput>;
  _id?: Maybe<FilterCountProduct_IdOperatorsInput>;
  updatedAt?: Maybe<FilterCountProductUpdatedAtOperatorsInput>;
  createdAt?: Maybe<FilterCountProductCreatedAtOperatorsInput>;
};

export type FilterCountProductNameOperatorsInput = {
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

export type FilterCountProductDescriptionOperatorsInput = {
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

export type FilterCountProductTypeRefOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountProductLocationRefsOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountProductMaterialRefsOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountProductPriceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountProductQuantityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountProductPhotosOperatorsInput = {
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

export type FilterCountProduct_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountProductUpdatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountProductCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<ProductEdge>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** The item at the end of the edge */
  node: Product;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionProductEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
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
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

export type FilterFindOneMaterialInput = {
  type?: Maybe<EnumMaterialType>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneMaterialOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneMaterialInput>>;
  AND?: Maybe<Array<FilterFindOneMaterialInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMaterialOperatorsInput = {
  _id?: Maybe<FilterFindOneMaterial_IdOperatorsInput>;
  createdAt?: Maybe<FilterFindOneMaterialCreatedAtOperatorsInput>;
};

export type FilterFindOneMaterial_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMaterialCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneMaterialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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

/** A connection to a list of items. */
export type MaterialConnection = {
  __typename?: 'MaterialConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<MaterialEdge>;
};

/** An edge in a connection. */
export type MaterialEdge = {
  __typename?: 'MaterialEdge';
  /** The item at the end of the edge */
  node: Material;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionMaterialEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
}

/** List of items with pagination. */
export type MaterialPagination = {
  __typename?: 'MaterialPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Material>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export enum SortFindByIdsTypeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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

/** A connection to a list of items. */
export type TypeConnection = {
  __typename?: 'TypeConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<TypeEdge>;
};

/** An edge in a connection. */
export type TypeEdge = {
  __typename?: 'TypeEdge';
  /** The item at the end of the edge */
  node: Type;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionTypeEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
}

/** List of items with pagination. */
export type TypePagination = {
  __typename?: 'TypePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Type>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export enum SortFindByIdsLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

export type FilterFindOneLocationInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneLocationOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneLocationInput>>;
  AND?: Maybe<Array<FilterFindOneLocationInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneLocationOperatorsInput = {
  _id?: Maybe<FilterFindOneLocation_IdOperatorsInput>;
  createdAt?: Maybe<FilterFindOneLocationCreatedAtOperatorsInput>;
};

export type FilterFindOneLocation_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLocationCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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

/** A connection to a list of items. */
export type LocationConnection = {
  __typename?: 'LocationConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<LocationEdge>;
};

/** An edge in a connection. */
export type LocationEdge = {
  __typename?: 'LocationEdge';
  /** The item at the end of the edge */
  node: Location;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionLocationEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
}

/** List of items with pagination. */
export type LocationPagination = {
  __typename?: 'LocationPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Location>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  productCreateOne?: Maybe<CreateOneProductPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  productCreateMany?: Maybe<CreateManyProductPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  productUpdateById?: Maybe<UpdateByIdProductPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  productUpdateOne?: Maybe<UpdateOneProductPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  productUpdateMany?: Maybe<UpdateManyProductPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  productRemoveById?: Maybe<RemoveByIdProductPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  productRemoveOne?: Maybe<RemoveOneProductPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  productRemoveMany?: Maybe<RemoveManyProductPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  materialCreateOne?: Maybe<CreateOneMaterialPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  materialCreateMany?: Maybe<CreateManyMaterialPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  materialUpdateById?: Maybe<UpdateByIdMaterialPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  materialUpdateOne?: Maybe<UpdateOneMaterialPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  materialUpdateMany?: Maybe<UpdateManyMaterialPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  materialRemoveById?: Maybe<RemoveByIdMaterialPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  materialRemoveOne?: Maybe<RemoveOneMaterialPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  materialRemoveMany?: Maybe<RemoveManyMaterialPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  typeCreateOne?: Maybe<CreateOneTypePayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  typeCreateMany?: Maybe<CreateManyTypePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  typeUpdateById?: Maybe<UpdateByIdTypePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  typeUpdateOne?: Maybe<UpdateOneTypePayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  typeUpdateMany?: Maybe<UpdateManyTypePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  typeRemoveById?: Maybe<RemoveByIdTypePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  typeRemoveOne?: Maybe<RemoveOneTypePayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  typeRemoveMany?: Maybe<RemoveManyTypePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  locationCreateOne?: Maybe<CreateOneLocationPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  locationCreateMany?: Maybe<CreateManyLocationPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  locationUpdateById?: Maybe<UpdateByIdLocationPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  locationUpdateOne?: Maybe<UpdateOneLocationPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  locationUpdateMany?: Maybe<UpdateManyLocationPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  locationRemoveById?: Maybe<RemoveByIdLocationPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  locationRemoveOne?: Maybe<RemoveOneLocationPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  locationRemoveMany?: Maybe<RemoveManyLocationPayload>;
};

export type MutationProductCreateOneArgs = {
  record: CreateOneProductInput;
};

export type MutationProductCreateManyArgs = {
  records: Array<CreateManyProductInput>;
};

export type MutationProductUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdProductInput;
};

export type MutationProductUpdateOneArgs = {
  record: UpdateOneProductInput;
  filter?: Maybe<FilterUpdateOneProductInput>;
  sort?: Maybe<SortUpdateOneProductInput>;
  skip?: Maybe<Scalars['Int']>;
};

export type MutationProductUpdateManyArgs = {
  record: UpdateManyProductInput;
  filter?: Maybe<FilterUpdateManyProductInput>;
  sort?: Maybe<SortUpdateManyProductInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type MutationProductRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationProductRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneProductInput>;
  sort?: Maybe<SortRemoveOneProductInput>;
};

export type MutationProductRemoveManyArgs = {
  filter: FilterRemoveManyProductInput;
  limit?: Maybe<Scalars['Int']>;
};

export type MutationMaterialCreateOneArgs = {
  record: CreateOneMaterialInput;
};

export type MutationMaterialCreateManyArgs = {
  records: Array<CreateManyMaterialInput>;
};

export type MutationMaterialUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdMaterialInput;
};

export type MutationMaterialUpdateOneArgs = {
  record: UpdateOneMaterialInput;
  filter?: Maybe<FilterUpdateOneMaterialInput>;
  sort?: Maybe<SortUpdateOneMaterialInput>;
  skip?: Maybe<Scalars['Int']>;
};

export type MutationMaterialUpdateManyArgs = {
  record: UpdateManyMaterialInput;
  filter?: Maybe<FilterUpdateManyMaterialInput>;
  sort?: Maybe<SortUpdateManyMaterialInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type MutationMaterialRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationMaterialRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneMaterialInput>;
  sort?: Maybe<SortRemoveOneMaterialInput>;
};

export type MutationMaterialRemoveManyArgs = {
  filter: FilterRemoveManyMaterialInput;
  limit?: Maybe<Scalars['Int']>;
};

export type MutationTypeCreateOneArgs = {
  record: CreateOneTypeInput;
};

export type MutationTypeCreateManyArgs = {
  records: Array<CreateManyTypeInput>;
};

export type MutationTypeUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdTypeInput;
};

export type MutationTypeUpdateOneArgs = {
  record: UpdateOneTypeInput;
  filter?: Maybe<FilterUpdateOneTypeInput>;
  sort?: Maybe<SortUpdateOneTypeInput>;
  skip?: Maybe<Scalars['Int']>;
};

export type MutationTypeUpdateManyArgs = {
  record: UpdateManyTypeInput;
  filter?: Maybe<FilterUpdateManyTypeInput>;
  sort?: Maybe<SortUpdateManyTypeInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type MutationTypeRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationTypeRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneTypeInput>;
  sort?: Maybe<SortRemoveOneTypeInput>;
};

export type MutationTypeRemoveManyArgs = {
  filter: FilterRemoveManyTypeInput;
  limit?: Maybe<Scalars['Int']>;
};

export type MutationLocationCreateOneArgs = {
  record: CreateOneLocationInput;
};

export type MutationLocationCreateManyArgs = {
  records: Array<CreateManyLocationInput>;
};

export type MutationLocationUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdLocationInput;
};

export type MutationLocationUpdateOneArgs = {
  record: UpdateOneLocationInput;
  filter?: Maybe<FilterUpdateOneLocationInput>;
  sort?: Maybe<SortUpdateOneLocationInput>;
  skip?: Maybe<Scalars['Int']>;
};

export type MutationLocationUpdateManyArgs = {
  record: UpdateManyLocationInput;
  filter?: Maybe<FilterUpdateManyLocationInput>;
  sort?: Maybe<SortUpdateManyLocationInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type MutationLocationRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationLocationRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneLocationInput>;
  sort?: Maybe<SortRemoveOneLocationInput>;
};

export type MutationLocationRemoveManyArgs = {
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
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  photos: Array<Maybe<Scalars['String']>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateManyProductPayload = {
  __typename?: 'CreateManyProductPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Product>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyProductInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  photos: Array<Maybe<Scalars['String']>>;
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
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateOneProductPayload = {
  __typename?: 'UpdateOneProductPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Product>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateOneProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneProductOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneProductInput>>;
  AND?: Maybe<Array<FilterUpdateOneProductInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneProductOperatorsInput = {
  _id?: Maybe<FilterUpdateOneProduct_IdOperatorsInput>;
  createdAt?: Maybe<FilterUpdateOneProductCreatedAtOperatorsInput>;
};

export type FilterUpdateOneProduct_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneProductCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateOneProductInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

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
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateManyProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  typeRef?: Maybe<FilterUpdateManyProductTypeRefOperatorsInput>;
  locationRefs?: Maybe<FilterUpdateManyProductLocationRefsOperatorsInput>;
  materialRefs?: Maybe<FilterUpdateManyProductMaterialRefsOperatorsInput>;
  price?: Maybe<FilterUpdateManyProductPriceOperatorsInput>;
  quantity?: Maybe<FilterUpdateManyProductQuantityOperatorsInput>;
  photos?: Maybe<FilterUpdateManyProductPhotosOperatorsInput>;
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

export type FilterUpdateManyProductTypeRefOperatorsInput = {
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
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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

export type RemoveOneProductPayload = {
  __typename?: 'RemoveOneProductPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Product>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveOneProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneProductOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneProductInput>>;
  AND?: Maybe<Array<FilterRemoveOneProductInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneProductOperatorsInput = {
  _id?: Maybe<FilterRemoveOneProduct_IdOperatorsInput>;
  createdAt?: Maybe<FilterRemoveOneProductCreatedAtOperatorsInput>;
};

export type FilterRemoveOneProduct_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneProductCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneProductInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

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
  typeRef?: Maybe<Scalars['MongoID']>;
  locationRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  materialRefs?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  typeRef?: Maybe<FilterRemoveManyProductTypeRefOperatorsInput>;
  locationRefs?: Maybe<FilterRemoveManyProductLocationRefsOperatorsInput>;
  materialRefs?: Maybe<FilterRemoveManyProductMaterialRefsOperatorsInput>;
  price?: Maybe<FilterRemoveManyProductPriceOperatorsInput>;
  quantity?: Maybe<FilterRemoveManyProductQuantityOperatorsInput>;
  photos?: Maybe<FilterRemoveManyProductPhotosOperatorsInput>;
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

export type FilterRemoveManyProductTypeRefOperatorsInput = {
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

export type CreateManyMaterialPayload = {
  __typename?: 'CreateManyMaterialPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Material>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyMaterialInput = {
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

export type UpdateOneMaterialPayload = {
  __typename?: 'UpdateOneMaterialPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Material>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneMaterialInput = {
  type?: Maybe<EnumMaterialType>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateOneMaterialInput = {
  type?: Maybe<EnumMaterialType>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneMaterialOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneMaterialInput>>;
  AND?: Maybe<Array<FilterUpdateOneMaterialInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneMaterialOperatorsInput = {
  _id?: Maybe<FilterUpdateOneMaterial_IdOperatorsInput>;
  createdAt?: Maybe<FilterUpdateOneMaterialCreatedAtOperatorsInput>;
};

export type FilterUpdateOneMaterial_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneMaterialCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateOneMaterialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

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
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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

export type RemoveOneMaterialPayload = {
  __typename?: 'RemoveOneMaterialPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Material>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveOneMaterialInput = {
  type?: Maybe<EnumMaterialType>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneMaterialOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneMaterialInput>>;
  AND?: Maybe<Array<FilterRemoveOneMaterialInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneMaterialOperatorsInput = {
  _id?: Maybe<FilterRemoveOneMaterial_IdOperatorsInput>;
  createdAt?: Maybe<FilterRemoveOneMaterialCreatedAtOperatorsInput>;
};

export type FilterRemoveOneMaterial_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneMaterialCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneMaterialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

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

export type CreateManyTypePayload = {
  __typename?: 'CreateManyTypePayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Type>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyTypeInput = {
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

export type UpdateOneTypePayload = {
  __typename?: 'UpdateOneTypePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Type>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneTypeInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateOneTypeInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneTypeOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneTypeInput>>;
  AND?: Maybe<Array<FilterUpdateOneTypeInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneTypeOperatorsInput = {
  _id?: Maybe<FilterUpdateOneType_IdOperatorsInput>;
  createdAt?: Maybe<FilterUpdateOneTypeCreatedAtOperatorsInput>;
};

export type FilterUpdateOneType_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneTypeCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateOneTypeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

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
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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

export type RemoveOneTypePayload = {
  __typename?: 'RemoveOneTypePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Type>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveOneTypeInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneTypeOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneTypeInput>>;
  AND?: Maybe<Array<FilterRemoveOneTypeInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneTypeOperatorsInput = {
  _id?: Maybe<FilterRemoveOneType_IdOperatorsInput>;
  createdAt?: Maybe<FilterRemoveOneTypeCreatedAtOperatorsInput>;
};

export type FilterRemoveOneType_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneTypeCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneTypeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

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

export type CreateManyLocationPayload = {
  __typename?: 'CreateManyLocationPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Location>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyLocationInput = {
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

export type UpdateOneLocationPayload = {
  __typename?: 'UpdateOneLocationPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Location>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneLocationInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateOneLocationInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneLocationOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneLocationInput>>;
  AND?: Maybe<Array<FilterUpdateOneLocationInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneLocationOperatorsInput = {
  _id?: Maybe<FilterUpdateOneLocation_IdOperatorsInput>;
  createdAt?: Maybe<FilterUpdateOneLocationCreatedAtOperatorsInput>;
};

export type FilterUpdateOneLocation_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneLocationCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateOneLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

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
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
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

export type RemoveOneLocationPayload = {
  __typename?: 'RemoveOneLocationPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Location>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveOneLocationInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneLocationOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneLocationInput>>;
  AND?: Maybe<Array<FilterRemoveOneLocationInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneLocationOperatorsInput = {
  _id?: Maybe<FilterRemoveOneLocation_IdOperatorsInput>;
  createdAt?: Maybe<FilterRemoveOneLocationCreatedAtOperatorsInput>;
};

export type FilterRemoveOneLocation_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneLocationCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

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
