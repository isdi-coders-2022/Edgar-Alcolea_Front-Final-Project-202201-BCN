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
];
