const http = {
  get(url, params, options) {
    const parseMethod = options ? options.parse : 'json';
    let getUrl = url.replace('/api/', `${process.env.REACT_APP_API}/`);
    let parse;

    if (params) {
      const getParams = new URLSearchParams(Object.entries(params));
      getUrl = `${getUrl}?${getParams}`;
    }

    if (parseMethod === 'none') parse = res => res;
    else parse = res => res[parseMethod]();

    return fetch(getUrl)
      .then(parse);
  },

  post(url, body, options) {
    const parseMethod = options ? options.parse : 'json';
    const postUrl = url.replace('/api/', `${process.env.REACT_APP_API}/`);
    const myInit = {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };
    let parse;

    if (parseMethod === 'none') parse = res => res;
    else parse = res => res[parseMethod]();

    return fetch(postUrl, myInit)
      .then(parse);
  },
};

export default http;
