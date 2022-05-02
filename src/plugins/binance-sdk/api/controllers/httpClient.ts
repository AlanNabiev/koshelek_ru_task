import axios, { AxiosInstance, AxiosPromise } from 'axios'
import { EXTERNAL_LINKS } from '../../externalLinks'

const baseURL: string = EXTERNAL_LINKS.app.api.BINANCE

export const httpClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export function axiosGet(url: string, data?: unknown): AxiosPromise<any> {
  return httpClient({
    method: 'get',
    url,
    params: data
  })
}

export function axiosPost(url: string, data: unknown): AxiosPromise<any> {
  return httpClient({
    method: 'post',
    url,
    data
  })
}
