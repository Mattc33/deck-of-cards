import { Angular4CrudBootstrapDatatablePage } from './app.po';

describe('angular4-crud-bootstrap-datatable App', () => {
  let page: Angular4CrudBootstrapDatatablePage;

  beforeEach(() => {
    page = new Angular4CrudBootstrapDatatablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
