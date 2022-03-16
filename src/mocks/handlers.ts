import { rest } from "msw";

const handlers = [
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
        id: "6231a686f9c684f92cb619ae",
        name: "Test Place",
        marked: 0,
        description: "A place that exists just for the purpose of testing.",
        createdBy: "creatorID",
        location: "The mind",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "testImg",
      })
    )
  ),
];

export default handlers;
