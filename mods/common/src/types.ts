/*
 * Copyright (C) 2022 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/routr
 *
 * This file is part of Routr
 *
 * Licensed under the MIT License (the "License")
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export type Direction = 'IN' | 'OUT'

export type Method = 'UNKNOWN' 
  | 'REGISTER'
  | 'INVITE'
  | 'MESSAGE'
  | 'PUBLISH'
  | 'NOTIFY'
  | 'SUBSCRIBE'

export type Transport = 'TCP' 
  | 'UDP' 
  | 'TLS'
  | 'SCTP'
  | 'WS'
  | 'WSS' 

export interface NetInterface {
  host: string
  port: number
  transport: Transport
}

export interface MessageRequest {
  ref: string
  direction: Direction
  method: Method
  originInterface: NetInterface
  targetInterface: NetInterface
  sipMessage: Record<string, unknown>
}

export interface MessageResponse {
  sipMessage: Record<string, unknown>
}

export interface ProcessorConfig {
  ref: string
  addr: string
  methods: Array<Method>
  isFallback?: boolean
  matchFunc?: (request: MessageRequest) => boolean
}

export interface MiddlewareConfig {
  ref: string
  addr: string
}

export interface ServiceInfo {
  name: string
  bindAddr: string
  service: unknown
  handlers: Record<string, (call: unknown, callback: Function) => unknown>
}

export interface ObjectProto {
  name: string
  path: string
  version: string
}