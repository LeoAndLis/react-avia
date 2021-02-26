export default class ServerRequestService{
  protected readonly SERVER_PATH = 'https://front-test.beta.aviasales.ru';

  protected readonly SEARCH_ID_PATH = '/search';

  protected searchId: string | null = null;

  protected makeQueryString(params: Object) {
    const esc = encodeURIComponent;

    return (
      Object.keys(params)
        // @ts-ignore
        .map((key: string) => `${esc(key)}=${esc(params[key])}`)
        .join('&')
    );
  }

  protected getSearchId(): Promise<string> {
    return this.getResource(this.SEARCH_ID_PATH, {}).then((result) => result.searchId);
  }

  public async getResource(path: string, getParams: Object = {}, method: string = 'GET', postParams: Object = {}) {
    // @ts-ignore
    if ( !this.searchId && path !== this.SEARCH_ID_PATH ) {
      this.searchId = await this.getSearchId();
    }

    const queryString = this.makeQueryString({
      searchId: this.searchId,
      ...getParams,
    });

    const url = `${this.SERVER_PATH}${path}?${queryString}`;
    const params: any = { method };

    if (method === 'POST') {
      params.body = JSON.stringify(postParams);
      params.headers = { 'Content-Type': 'application/json;charset=utf-8' };
    }

    const response = await fetch(url, params);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    return response.json();
  }
}