export function postServer(
  url: string,
  data: any,
  contentType = "application/json",
  useApi = true,
  needJson = true
) {
  if (url.startsWith("/")) {
    if (useApi) {
      url = `/api${url}`;
    }
    url = `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`;
  }
  if (needJson) {
    data = JSON.stringify(data);
  }
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": contentType,
    },
    body: data,
    credentials: "include",
  });
}

export function getServer(
  url: string,
  useApi = true
) {
  if (url.startsWith("/")) {
    if (useApi) {
      url = `/api${url}`;
    }
    url = `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`;
  }
  return fetch(url, {
    method: "GET",
    credentials: "include",
  });
}
