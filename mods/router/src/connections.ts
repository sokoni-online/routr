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
import { ProcessorGPRCConnection } from "./processor";
import { ProcessorConfig } from "./types";

const PROTO_PATH = __dirname + '../../../../protos/processor.proto'
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
const processorProto = grpc
  .loadPackageDefinition(packageDefinition)
  .fonoster.routr.processor.v2beta1

export default function createProcessorConnections(processors: Array<ProcessorConfig>)
  : Map<string, ProcessorGPRCConnection> {
  const connections = new Map<string, ProcessorGPRCConnection>()
  processors.forEach(processor => {
    const conn = new processorProto.Processor(processor.addr,
      grpc.credentials.createInsecure());
    connections.set(processor.ref, conn)
  })
  return connections
}