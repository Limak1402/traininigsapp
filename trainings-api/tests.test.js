const app = require('./index.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(app);
const user = {
  id: 5,
  title: "myroot",
  lessons: "myroot",
  description: "Mydescription",
  hours: "0",
};
const id = 5;
const updateUserInfo = { id: 5, title: "myroot5" };
describe("test case for postgresql crud app", () => {

  //Uncomment this if you suspect a lack of connection to the database!!!

  // it('test with no conection', async () => {
  //   const response = await supertest(app).get('/trainings');
  //   expect(response.status).toBe(500);
  //   expect(response.body).toEqual({ error: 'Internal Server Error' });
  // });

  it("test case for creating a training", async function() {
    const createUser = await supertest(app).post("/addData");
    expect(createUser.status).toBe(200);
    expect(createUser.body.isDeleted).toBeFalsy();
    expect(200);
  });

  it("test case to update the training", async () => {
    const updateUser = await supertest(app).put("/update").send(updateUserInfo);
    expect(updateUser.status).toBe(200);
    expect(updateUser.body.name).toBe(updateUser.name);
  });

  it("test case for deleting the training", async () => {
    const deleteUser = await supertest(app).delete("/delete/:id").send({ id });
    expect(deleteUser.status).toBe(200);
  });
});

describe('trainings Endpoints', () => {

  it('test database connection', async () => {
    const res = await requestWithSupertest.get('/trainings');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
  });
  
});