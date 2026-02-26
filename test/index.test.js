import { describe, it, after, before } from "node:test";
import assert from "node:assert/strict";
import { createApp } from "../src/index.js";

describe("kumogakure server", () => {
  let server;
  let baseUrl;

  before(async () => {
    server = createApp();
    await new Promise((resolve) => {
      server.listen(0, () => {
        const { port } = server.address();
        baseUrl = `http://localhost:${port}`;
        resolve();
      });
    });
  });

  after(async () => {
    await new Promise((resolve) => server.close(resolve));
  });

  it("should return welcome message on /", async () => {
    const res = await fetch(baseUrl + "/");
    const body = await res.json();
    assert.equal(res.status, 200);
    assert.equal(body.message, "Welcome to kumogakure");
  });

  it("should return health check on /health", async () => {
    const res = await fetch(baseUrl + "/health");
    const body = await res.json();
    assert.equal(res.status, 200);
    assert.equal(body.status, "ok");
  });

  it("should return 404 for unknown routes", async () => {
    const res = await fetch(baseUrl + "/nonexistent");
    const body = await res.json();
    assert.equal(res.status, 404);
    assert.equal(body.error, "Not found");
  });
});
