import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../../../app.module";

describe("AppController (e2e)", () => {
  let app: INestApplication;
  const userEmail = "fernando4@gmail.com";

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/auth/signup (POST)", () => {
    return request(app.getHttpServer())
      .post("/auth/signup")
      .send({
        email: userEmail,
        password: "12184684978",
        name: "Fernando",
      })
      .expect(201);
  });
});
