/*
 * Copyright (C) 2023 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/routr
 *
 * This file is part of Routr
 *
 * Licensed under the MIT License (the "License");
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
import chai from "chai"
import sinon from "sinon"
import sinonChai from "sinon-chai"
import RedisStore from "../src/redis_store"
import * as Routes from "./route_examples"

const expect = chai.expect
chai.use(sinonChai)
const sandbox = sinon.createSandbox()

describe("@routr/location/redis_store", () => {
  afterEach(() => sandbox.restore())

  it("puts value in a collection", async () => {
    const store = new RedisStore()
    store.put("backend:voice", Routes.voiceBackendRoute01)
    store.put("backend:voice", Routes.voiceBackendRoute02)
    store.put("backend:voice", Routes.voiceBackendRoute02)
    store.put("backend:conference", Routes.conferenceBackendRoute01)
    store.put("backend:conference", Routes.conferenceBackendRoute01)
    expect((await store.get("backend:voice")).length).to.be.equal(2)
    expect((await store.get("backend:conference")).length).to.be.equal(1)
    expect((await store.get("backend:voice"))[0])
      .to.be.have.property("user")
      .to.be.equal("voice02")
  })

  it("test removing all routes for an aor", async () => {
    const store = new RedisStore()
    await store.delete("backend:voice")
    store.put("backend:voice", Routes.voiceBackendRoute01)
    store.put("backend:voice", Routes.voiceBackendRoute02)
    store.put("backend:voice", Routes.voiceBackendRoute02)
    await store.delete("backend:voice")
    expect(await store.get("backend:voice")).to.be.empty
  })

  it("sets an expire route and clean the collection", async () => {
    const store = new RedisStore()
    await store.delete("backend:voice")
    await store.delete("backend:conference")
    store.put("backend:voice", Routes.voiceBackendRoute01)
    store.put("backend:voice", Routes.voiceBackendRoute02)
    store.put("backend:voice", Routes.voiceBackendRoute02)
    store.put("backend:conference", Routes.conferenceBackendRoute01)
    expect((await store.get("backend:conference")).length).to.be.equal(1)
  })
})
