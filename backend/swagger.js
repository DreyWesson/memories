export default {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Memories API",
      version: "1.0.0",
      description: "A simple site to save lovely memories",
    },
    servers: [
      {
        url: "http://localhost:5000",
        // url: "https://insta-memories.herokuapp.com/",
      },
    ],
    components: {
      securitySchemes: {
        Bearer: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
      schemas: {
        UserLogin: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
          xml: {
            name: "UserLogin",
          },
        },
      },
    },
    paths: {
      "/user/signin": {
        post: {
          tags: ["User"],
          summary: "Register user",
          description:
            "A user email and password should be provided. After successful login, the response contains 'success status' and 'token'",
          operationId: "userLogin",
          responses: {
            200: {
              description: "successful operation",
            },
            401: {
              description: "Invalid Credentials",
            },
            500: {
              description: "Could not register user",
            },
          },
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserLogin",
                },
              },
            },
            description: "Login details",
            required: true,
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};
