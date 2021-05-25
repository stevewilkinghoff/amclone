/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFmohItem = /* GraphQL */ `
  query GetFmohItem($id: ID!) {
    getFMOHItem(id: $id) {
      id
      description
      amount
      reason
      createdAt
      updatedAt
    }
  }
`;
export const listFmohItems = /* GraphQL */ `
  query ListFmohItems(
    $filter: ModelFMOHItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFMOHItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        amount
        reason
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFmRoadmapData = /* GraphQL */ `
  query GetFmRoadmapData($id: ID!) {
    getFmRoadmapData(id: $id) {
      id
      periodEnd
      revenue
      cogs
      grossProfit
      overhead
      noCustomers
      noTransactions
      createdAt
      updatedAt
    }
  }
`;
export const listFmRoadmapDatas = /* GraphQL */ `
  query ListFmRoadmapDatas(
    $filter: ModelfmRoadmapDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFmRoadmapDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        periodEnd
        revenue
        cogs
        grossProfit
        overhead
        noCustomers
        noTransactions
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomerCpmData = /* GraphQL */ `
  query GetCustomerCpmData($id: ID!) {
    getCustomerCpmData(id: $id) {
      id
      periodEnd
      name
      revenue
      profit
      resonance
      createdAt
      updatedAt
    }
  }
`;
export const listCustomerCpmDatas = /* GraphQL */ `
  query ListCustomerCpmDatas(
    $filter: ModelcustomerCpmDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerCpmDatas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        periodEnd
        name
        revenue
        profit
        resonance
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
