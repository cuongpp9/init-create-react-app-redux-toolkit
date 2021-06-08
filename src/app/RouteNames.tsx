const formatStringUrl = (...args) => {
  let i = 1;
  const str = args[0];
  return str.replace(/\:[a-zA-Z0-9]*/g, () => args[i++]); // eslint-disable-line
};

const prettifyPath = (path, ...args) => formatStringUrl(path, ...args);

const RouteNames = {
  landing: {
    path: '/landing',
    name: 'landing',
    exact: true,
  },
  prettifyPath,
};

export default RouteNames;
