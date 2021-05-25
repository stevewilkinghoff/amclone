/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createFmohItem = /* GraphQL */ `
  mutation CreateFmohItem(
    $input: CreateFMOHItemInput!
    $condition: ModelFMOHItemConditionInput
  ) {
    createFMOHItem(input: $input, condition: $condition) {
      id
      description
      amount
      reason
      createdAt
      updatedAt
    }
  }
`;
export const updateFmohItem = /* GraphQL */ `
  mutation UpdateFmohItem(
    $input: UpdateFMOHItemInput!
    $condition: ModelFMOHItemConditionInput
  ) {
    updateFMOHItem(input: $input, condition: $condition) {
      id
      description
      amount
      reason
      createdAt
      updatedAt
    }
  }
`;
export const deleteFmohItem = /* GraphQL */ `
  mutation DeleteFmohItem(
    $input: DeleteFMOHItemInput!
    $condition: ModelFMOHItemConditionInput
  ) {
    deleteFMOHItem(input: $input, condition: $condition) {
      id
      description
      amount
      reason
      createdAt
      updatedAt
    }
  }
`;
export const createFmRoadmapData = /* GraphQL */ `
  mutation CreateFmRoadmapData(
    $input: CreateFmRoadmapDataInput!
    $condition: ModelfmRoadmapDataConditionInput
  ) {
    createFmRoadmapData(input: $input, condition: $condition) {
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
export const updateFmRoadmapData = /* GraphQL */ `
  mutation UpdateFmRoadmapData(
    $input: UpdateFmRoadmapDataInput!
    $condition: ModelfmRoadmapDataConditionInput
  ) {
    updateFmRoadmapData(input: $input, condition: $condition) {
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
export const deleteFmRoadmapData = /* GraphQL */ `
  mutation DeleteFmRoadmapData(
    $input: DeleteFmRoadmapDataInput!
    $condition: ModelfmRoadmapDataConditionInput
  ) {
    deleteFmRoadmapData(input: $input, condition: $condition) {
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
export const createCustomerCpmData = /* GraphQL */ `
  mutation CreateCustomerCpmData(
    $input: CreateCustomerCpmDataInput!
    $condition: ModelcustomerCpmDataConditionInput
  ) {
    createCustomerCpmData(input: $input, condition: $condition) {
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
export const updateCustomerCpmData = /* GraphQL */ `
  mutation UpdateCustomerCpmData(
    $input: UpdateCustomerCpmDataInput!
    $condition: ModelcustomerCpmDataConditionInput
  ) {
    updateCustomerCpmData(input: $input, condition: $condition) {
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
export const deleteCustomerCpmData = /* GraphQL */ `
  mutation DeleteCustomerCpmData(
    $input: DeleteCustomerCpmDataInput!
    $condition: ModelcustomerCpmDataConditionInput
  ) {
    deleteCustomerCpmData(input: $input, condition: $condition) {
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
