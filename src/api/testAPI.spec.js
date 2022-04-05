import axios from "axios";
import assert from "assert";
import randomString from "randomstring";
import mockPostAnswers from "../fixtures/mockPostAnswers.json";

describe("Testing backend", () => {
  it("requesting to root url should return 200", async () => {
    const res = await axios.get("https://fhc-api.onrender.com/");
    assert.equal(200, res.status);
  });

  it("will return 200 for randomly generated user getting new questions", async () => {
    const mockRandomUser = randomString.generate();
    const res = await axios.get("https://fhc-api.onrender.com/questions", {
      params: { user: mockRandomUser },
    });
    assert.equal(200, res.status);
    assert.equal(true, res.data.ok);
  });

  it("will return 200 for randomly generated user posting new answers", async () => {
    const mockRandomUser = randomString.generate();

    var options = {
      method: "POST",
      url: "https://fhc-api.onrender.com/submissions",
      params: { user: mockRandomUser },
      headers: { "Content-Type": "application/json" },
      data: mockPostAnswers,
    };

    const res = await axios
      .request(options)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err);
      });

    assert.equal(201, res.status);
    assert.equal(true, res.data.ok);
    assert.equal(mockRandomUser, res.data.user);
  });
});
