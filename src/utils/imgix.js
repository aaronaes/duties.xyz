export default function imgix({
  url = null,
  w = null,
  h = null,
  fm = "png gif",
  q = 80,
  dpr = 1
}) {
  if (!url) {
    return "";
  }
  if (!h) {
    return url + `?w=${w}&fit=clip&fm=${fm}&q=${q}&dpr=${dpr}`;
  }
  if (!w) {
    return url + `?h=${h}&fit=clip&fm=${fm}&q=${q}&dpr=${dpr}`;
  }
  if (!w && !h) {
    return url + `?w=&300&fit=clip&fm=${fm}&q=${q}&dpr=${dpr}`;
  }
  if (w && h) {
    return url + `?w=&${w}h=&${h}&fit=clip&fm=${fm}&q=${q}&dpr=${dpr}`;
  }
}
