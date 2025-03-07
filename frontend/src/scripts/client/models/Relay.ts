export class RelayParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RelayParseError";
  }
}

export class Relay {
  originalHost: string;
  host: string;
  useHttp: boolean;

  constructor(host: string) {
    this.originalHost = host;
    let hostWithScheme = host;
    if (!host.includes("://")) {
      hostWithScheme = "https://" + host;
    }

    const parsedUrl = new URL(hostWithScheme);
    this.useHttp = parsedUrl.protocol === "http:";

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      throw new RelayParseError(`Invalid relay URL scheme: ${parsedUrl.protocol}`);
    }

    this.host = parsedUrl.hostname;
    if (!this.host) {
      throw new RelayParseError(`Couldn't extract host from relay URL: ${host}`);
    }

    if (parsedUrl.port) {
      this.host += `:${parsedUrl.port}`;
    }
  }

  websocketUrl(handshakeNonce: string, deviceSubname: string): string {
    const scheme = this.useHttp ? "ws" : "wss";
    return `${scheme}://${this.host}/talk/v1/frontend?handshake_nonce=${handshakeNonce}&device_subname=${deviceSubname}`;
  }

  handshakeUrl(): string {
    const scheme = this.useHttp ? "http" : "https";
    return `${scheme}://${this.host}/handshake/v1/frontend`;
  }
}
