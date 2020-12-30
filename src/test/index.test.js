import mocha from "mocha";
import chai, { should } from "chai";
import chaiHttp from "chai-http";
import server from "../index";

const { it, describe } = mocha;

chai.should();
chai.use(chaiHttp);

describe("Testing Server", () => {
  it("Testing welcome endPoint", async () => {
    const res = await chai.request(server).get("/");
    res.should.have.status(200);
    res.body.should.have.property("success", true);
  });

  it("Testing Unknown endpoints", async () => {
    const res = await chai.request(server).get("/unknown");
    res.should.have.status(400);
    res.body.should.have.property("success", false);
  });
});
