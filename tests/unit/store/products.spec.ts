import products from '@/store/products';

describe('Products store', () => {
  const mockData = {
    name: 'name',
    description: 'desc',
    category: 2,
    price: 23
  };

  let commit: any;
  let dispatch;
  const state = {
    list: []
  };

  beforeEach(() => {
    jest.clearAllMocks();
    commit = jest.fn();
    dispatch = jest.fn();
  });

  afterEach(() => {
    commit = null;
  });

  it('Should call add product mutation', async () => {
    await products.actions.add({ commit }, mockData);

    expect(commit).toHaveBeenCalledWith('ADD_ITEM', mockData);
  });

  it('Should change state', () => {
    products.mutations.ADD_ITEM(state, mockData);
    expect(state.list[0]).toEqual({ ...mockData, id: 1 });
  });
});
