import { encode } from "qss";

type SiteScreenshotProps = {
  url: string;
  width?: number;
  height?: number;
};

export function SiteScreenshot({ url, width = 300, height = 200 }: SiteScreenshotProps) {
  const params = encode({
    url,
    screenshot: true,
    screenshotDelay: 10000, 
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": false,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": width * 2,
    "viewport.height": height * 2,
  });

  const src = `https://api.microlink.io/?${params}`;

  return (
    <img src={src} alt={`Screenshot of ${url}`} width={width} height={height} className="rounded-md shadow-sm" />
  );
}
