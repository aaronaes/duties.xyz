export default function imgix({
  url = null,
  w = null,
  h = null,
  fm = "jpg",
  q = 100,
  blur = 0
}) {
  if (!url) {
    return "";
  }
  if (!h) {
    return url + `?w=${w}&fit=clip&fm=${fm}&q=${q}&blur=${blur}`;
  }
  if (!w) {
    return url + `?h=${h}&fit=clip&fm=${fm}&q=${q}&blur=${blur}`;
  }
  if (!w && !h) {
    return url + `?w=&300&fit=clip&fm=${fm}&q=${q}&blur=${blur}`;
  }
  if (w && h) {
    return url + `?w=&${w}h=&${h}&fit=clip&fm=${fm}&q=${q}&blur=${blur}`;
  }
}
