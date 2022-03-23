import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}spots`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: "1",
          name: "Tempest Freerunning Academy",
          marked: 100,
          description:
            "Indoor facility with crazy props and themed spots, training programs and gym.",
          createdBy: "testID",
          location: "Next to L.A.X airport",
          coordinates: [33.920548123347544, -118.33193817357487],
          image: "testImg",
        },
        {
          id: "2",
          name: "Test Place",
          marked: 20,
          description: "A place that exists just for the purpose of testing.",
          createdBy: "testID",
          location: "The mind",
          coordinates: [0, 0],
          image: "testImg",
        },
      ])
    )
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}spots/delete/3`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          id: "3",
        })
      )
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}spots/delete/9`,
    (req, res, ctx) => res(ctx.status(404))
  ),
  rest.post(`${process.env.REACT_APP_API_URL}spots/new`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        id: "test2",
        name: "Test Place",
        marked: 20,
        description: "A place that exists just for the purpose of testing.",
        createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
        location: "The mind",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "hello",
      })
    )
  ),
  rest.put(`${process.env.REACT_APP_API_URL}spots/123456`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        id: "123456",
        name: "Updated Spot",
        marked: 0,
        description: "A place that exists just for the purpose of testing.",
        createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
        location: "The mind",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "hello",
      })
    )
  ),
  rest.post(`${process.env.REACT_APP_API_URL}users/login`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RNYW4iLCJpZCI6IjYyMzVmN2E2MDI5ZDA5NDEzY2M4OTU4MSIsImltYWdlIjoibnVsbCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjQ4MDQwMTU0fQ.DYudqUqtg2V-Lx8m5Jduwyn4547FwZ6PtQ4b477GKVc",
      })
    )
  ),
  rest.get(`${process.env.REACT_APP_API_URL}users/123`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        name: "TestEd",
        username: "TestMan",
        password:
          "$2b$10$sBwzgvsUJiK/RU5zVVY8qOV257N/xtWepDi6R/MBxzUIp23QDrfy.",
        age: 99,
        bio: "I exist for the purpose of testing.",
        city: "TestTown",
        image: "null",
        createdSpots: [],
        admin: false,
        id: "6235f7a6029d09413cc89581",
      })
    )
  ),
  rest.get(`${process.env.REACT_APP_API_URL}users/12345`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        name: "Laulhus",
        username: "Laulhus",
        password:
          "$2b$10$sBwzgvsUJiK/RU5zVVY8qOV257N/xtWepDi6R/MBxzUIp23QDrfy.",
        age: 99,
        bio: "I exist for the purpose of testing.",
        city: "TestTown",
        image:
          "https://firebasestorage.googleapis.com/v0/b/pk-spots-68866.appspot.com/o/uploads%5Cfotoed.jpg?alt=media&token=878c1561-c1f7-4f5a-a354-4947553e0def",
        createdSpots: [],
        admin: false,
        id: "6235f7a6029d09413cc89581",
      })
    )
  ),
  rest.post(`${process.env.REACT_APP_API_URL}users/register`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({}))
  ),
  rest.get(`${process.env.REACT_APP_API_URL}users`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),
  rest.get(`${process.env.REACT_APP_API_URL}spots/123`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),
];

export const errorHandlers = [
  rest.post(`${process.env.REACT_APP_API_URL}spots/new`, (req, res, ctx) =>
    res(
      ctx.status(403),
      ctx.json({
        error: "Couldn't create spot",
      })
    )
  ),
  rest.put(`${process.env.REACT_APP_API_URL}spots/123456`, (req, res, ctx) =>
    res(
      ctx.status(403),
      ctx.json({
        error: "Couldn't update spot",
      })
    )
  ),
  rest.post(`${process.env.REACT_APP_API_URL}users/login`, (req, res, ctx) =>
    res(
      ctx.status(401),
      ctx.json({
        error: true,
        message: "Invalid password",
      })
    )
  ),
  rest.post(`${process.env.REACT_APP_API_URL}users/register`, (req, res, ctx) =>
    res(
      ctx.status(400),
      ctx.json({
        error: true,
        message: "This username already exists",
      })
    )
  ),
];
