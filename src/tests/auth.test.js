const request = require("supertest");
const app = require("../app");

describe("Auth Endpoints", () => {
  it("should register a new user", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({
        email: "testuser@example.com",
        password: "Password123"
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("token");
  });
});
