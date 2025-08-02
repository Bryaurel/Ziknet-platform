require("dotenv").config();

const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const User = require("../models/User");

beforeAll(async () => {
  // Use the environment variable from CI or local `.env.test`
  const mongoUri = process.env.MONGO_URI || process.env.MONGO_URI_TEST;
  if (!mongoUri) {
    throw new Error("❌ No MongoDB URI provided in environment variables");
  }
  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase(); // clean up test DB
  await mongoose.connection.close();
});

describe("Auth Endpoints", () => {
  const testUser = {
    firstName: "Test",
    lastName: "User",
    email: "testuser@example.com",
    password: "Password123",
  };

  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send(testUser);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("token");
  });

  it("should login an existing user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: testUser.email,
        password: testUser.password,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
});
