interface Env {
  ASSETS: Fetcher;
}

const OLD_HOSTS = new Set(["moribuilders.co.uk", "www.moribuilders.co.uk"]);
const NEW_HOST = "moribuildcon.co.uk";

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    if (OLD_HOSTS.has(url.hostname)) {
      url.hostname = NEW_HOST;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
