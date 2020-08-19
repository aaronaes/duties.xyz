export default function imgix({
  url = null,
  w = null,
  h = null,
  fm = "jpg",
  q = 100
}) {
  if (!url) {
    return "";
  }
  if (!h) {
    return url + `?w=${w}&fit=clip&fm=${fm}&q=${q}`;
  }
  if (!w) {
    return url + `?h=${h}&fit=clip&fm=${fm}&q=${q}`;
  }
  if (!w && !h) {
    return url + `?w=&300&fit=clip&fm=${fm}&q=${q}`;
  }
  if (w && h) {
    return url + `?w=&${w}h=&${h}&fit=clip&fm=${fm}&q=${q}`;
  }
}
