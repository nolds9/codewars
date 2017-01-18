function stripUrlParams(url, paramsToStrip = []) {
  if (url.includes("?")) {
    let params = url.split("?")[1].split("&")
    let keys = params.map(p => p.split("=")[0])
    let out = url.split("?")[0] + "?"
    params.forEach((p, i, all) => {
      let key = p.split("=")[0]
      let val = p.split("=")[1]
      if (i === keys.indexOf(key) && !paramsToStrip.includes(key)) {
        out += `${key}=${val}&`
      }
    })
    return out.slice(0, out.length - 1)
  }
  return url
}
