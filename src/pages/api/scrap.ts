import axios from "axios";
const sharp = require("sharp");
const _ = require("lodash");

const cheerio = require("cheerio");

export default async function handler(req: any, res: any) {
  try {
    const resp = await axios.get(
      "https://porland.com/sofra-tabaklar-servisler-tabaklar"
    );
    const $ = cheerio.load(resp.data);

    const imgHref = $("div.item-grid")
      .find("div.item-box")
      .eq(_.random(0, 30))
      .find("div.picture")
      .find("img")
      .attr("data-lazyloadsrc");

    if (imgHref) {
      const imgResp = await axios.get(imgHref, { responseType: "arraybuffer" });

      const { data, info } = await sharp(imgResp.data)
        .resize(200, 200, {
          fit: sharp.fit.contain,
          background: { r: 255, g: 255, b: 255 },
        })
        .toBuffer({ resolveWithObject: true });

      if (data) {
        res.status(200).send(data.toString("base64"));
      } else {
        res.status(500).json({ err });
      }
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).json({ err });
  }
}
