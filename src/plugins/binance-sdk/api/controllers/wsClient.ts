import { EXTERNAL_LINKS } from '../../externalLinks'

const wsBaseURL: string = EXTERNAL_LINKS.app.api.WS_BINANCE

export const wsClient = (url: string): WebSocket => {
  return new WebSocket(wsBaseURL + url)
}
