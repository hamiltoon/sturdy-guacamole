import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateDataNodesMutationResponse = {
  __typename?: 'CreateDataNodesMutationResponse';
  dataNodes: Array<DataNode>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  users: Array<User>;
};

export type DataNode = Node & {
  __typename?: 'DataNode';
  id: Scalars['ID'];
  dataNodeType: DataNodeType;
  linked?: Maybe<Array<Maybe<DataNode>>>;
};


export type DataNodeLinkedArgs = {
  where?: Maybe<DataNodeWhere>;
  options?: Maybe<DataNodeOptions>;
};

export type DataNodeConnectFieldInput = {
  where?: Maybe<DataNodeWhere>;
  connect?: Maybe<DataNodeConnectInput>;
};

export type DataNodeConnectInput = {
  linked?: Maybe<Array<DataNodeConnectFieldInput>>;
};

export type DataNodeCreateInput = {
  id: Scalars['ID'];
  dataNodeType: DataNodeType;
  linked?: Maybe<DataNodeLinkedFieldInput>;
};

export type DataNodeDeleteFieldInput = {
  where?: Maybe<DataNodeWhere>;
  delete?: Maybe<DataNodeDeleteInput>;
};

export type DataNodeDeleteInput = {
  linked?: Maybe<Array<DataNodeLinkedDeleteFieldInput>>;
};

export type DataNodeDisconnectFieldInput = {
  where?: Maybe<DataNodeWhere>;
  disconnect?: Maybe<DataNodeDisconnectInput>;
};

export type DataNodeDisconnectInput = {
  linked?: Maybe<Array<DataNodeDisconnectFieldInput>>;
};

export type DataNodeLinkedDeleteFieldInput = {
  where?: Maybe<DataNodeWhere>;
  delete?: Maybe<DataNodeDeleteInput>;
};

export type DataNodeLinkedFieldInput = {
  create?: Maybe<Array<DataNodeCreateInput>>;
  connect?: Maybe<Array<DataNodeConnectFieldInput>>;
};

export type DataNodeLinkedUpdateFieldInput = {
  where?: Maybe<DataNodeWhere>;
  update?: Maybe<DataNodeUpdateInput>;
  connect?: Maybe<Array<DataNodeConnectFieldInput>>;
  disconnect?: Maybe<Array<DataNodeDisconnectFieldInput>>;
  create?: Maybe<Array<DataNodeCreateInput>>;
  delete?: Maybe<Array<DataNodeDeleteFieldInput>>;
};

export type DataNodeOptions = {
  /** Specify one or more DataNodeSort objects to sort DataNodes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<DataNodeSort>>>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type DataNodeRelationInput = {
  linked?: Maybe<Array<DataNodeCreateInput>>;
};

/** Fields to sort DataNodes by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataNodeSort object. */
export type DataNodeSort = {
  id?: Maybe<SortDirection>;
  dataNodeType?: Maybe<SortDirection>;
};

export enum DataNodeType {
  User = 'USER',
  Admin = 'ADMIN'
}

export type DataNodeUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  dataNodeType?: Maybe<DataNodeType>;
  linked?: Maybe<Array<DataNodeLinkedUpdateFieldInput>>;
};

export type DataNodeWhere = {
  OR?: Maybe<Array<DataNodeWhere>>;
  AND?: Maybe<Array<DataNodeWhere>>;
  id?: Maybe<Scalars['ID']>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  dataNodeType?: Maybe<DataNodeType>;
  dataNodeType_NOT?: Maybe<DataNodeType>;
  dataNodeType_IN?: Maybe<Array<Maybe<DataNodeType>>>;
  dataNodeType_NOT_IN?: Maybe<Array<Maybe<DataNodeType>>>;
  linked?: Maybe<DataNodeWhere>;
  linked_NOT?: Maybe<DataNodeWhere>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createDataNodes: CreateDataNodesMutationResponse;
  deleteDataNodes: DeleteInfo;
  updateDataNodes: UpdateDataNodesMutationResponse;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteUsersArgs = {
  where?: Maybe<UserWhere>;
};


export type MutationUpdateUsersArgs = {
  where?: Maybe<UserWhere>;
  update?: Maybe<UserUpdateInput>;
};


export type MutationCreateDataNodesArgs = {
  input: Array<DataNodeCreateInput>;
};


export type MutationDeleteDataNodesArgs = {
  where?: Maybe<DataNodeWhere>;
  delete?: Maybe<DataNodeDeleteInput>;
};


export type MutationUpdateDataNodesArgs = {
  where?: Maybe<DataNodeWhere>;
  update?: Maybe<DataNodeUpdateInput>;
  connect?: Maybe<DataNodeConnectInput>;
  disconnect?: Maybe<DataNodeDisconnectInput>;
  create?: Maybe<DataNodeRelationInput>;
  delete?: Maybe<DataNodeDeleteInput>;
};

export type Node = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<Maybe<User>>;
  dataNodes: Array<Maybe<DataNode>>;
  me: User;
  user?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  allNodes?: Maybe<Array<Maybe<DataNode>>>;
  search: Array<SearchResult>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};


export type QueryDataNodesArgs = {
  where?: Maybe<DataNodeWhere>;
  options?: Maybe<DataNodeOptions>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QuerySearchArgs = {
  term: Scalars['String'];
};

export type SearchResult = User | DataNode;

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type UpdateDataNodesMutationResponse = {
  __typename?: 'UpdateDataNodesMutationResponse';
  dataNodes: Array<DataNode>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  users: Array<User>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type UserCreateInput = {
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<UserSort>>>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: Maybe<SortDirection>;
  username?: Maybe<SortDirection>;
  email?: Maybe<SortDirection>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type UserWhere = {
  OR?: Maybe<Array<UserWhere>>;
  AND?: Maybe<Array<UserWhere>>;
  id?: Maybe<Scalars['ID']>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  username_NOT?: Maybe<Scalars['String']>;
  username_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  username_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  username_CONTAINS?: Maybe<Scalars['String']>;
  username_NOT_CONTAINS?: Maybe<Scalars['String']>;
  username_STARTS_WITH?: Maybe<Scalars['String']>;
  username_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  username_ENDS_WITH?: Maybe<Scalars['String']>;
  username_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_NOT?: Maybe<Scalars['String']>;
  email_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_CONTAINS?: Maybe<Scalars['String']>;
  email_NOT_CONTAINS?: Maybe<Scalars['String']>;
  email_STARTS_WITH?: Maybe<Scalars['String']>;
  email_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  email_ENDS_WITH?: Maybe<Scalars['String']>;
  email_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
};

export type FindUserQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type FindUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  username
}
    `;
export const FindUserDocument = gql`
    query findUser($userId: ID!) {
  user(id: $userId) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFindUserQuery(baseOptions: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;