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
        UserSignin: {
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
            name: "UserSignin",
          },
        },
        UserSignup: {
          type: "object",
          properties: {
            firstName: {
              type: "string",
            },
            lastName: {
              type: "string",
            },
            email: {
              type: "string",
            },
            password: {
              type: "string",
            },
            confirmPassword: {
              type: "string",
            },
          },
          xml: {
            name: "UserSignup",
          },
        },
        ForgotPassword: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
          },
          xml: {
            name: "ForgotPassword",
          },
        },
        ResetUserPassword: {
          type: "object",
          properties: {
            password: {
              type: "string",
            },
            confirmPassword: {
              type: "string",
            },
          },
          xml: {
            name: "ResetUserPassword",
          },
        },
      },
    },
    paths: {
      "/api/users/signin": {
        post: {
          tags: ["User"],
          summary: "Register user",
          description:
            "A user email and password should be provided. After successful login, the response will contain 'result:object', 'success' and 'token'",
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
                  $ref: "#/components/schemas/UserSignin",
                },
              },
            },
            description: "Login details",
            required: true,
          },
        },
      },
      "/api/users/signup": {
        post: {
          tags: ["User"],
          summary: "Register user",
          description:
            "A user's 'firstName, lastName, email, password and confirmPassword' should be provided by the user. After successful signup, the response will contain 'result:object', 'success' and 'token'",
          operationId: "createUser",
          responses: {
            200: {
              description: "successful operation",
            },
            400: {
              description: "Invalid operation",
            },
            500: {
              description: "Could not register user",
            },
          },
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserSignup",
                },
              },
            },
            description: "Register user schema",
            required: true,
          },
        },
      },
      "/api/users/forgotpassword": {
        post: {
          tags: ["User"],
          summary: "Helps create a new password.",
          description:
            "A user's 'firstName, lastName, email, password and confirmPassword' should be provided by the user. After successful sign up, the response body will contain the result, success and token",
          operationId: "createUser",
          responses: {
            200: {
              description: "Successful. Email Sent",
            },
            400: {
              description: "Invalid tag value",
            },
            500: {
              description: "Could not register user",
            },
          },
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ForgotPassword",
                },
              },
            },
            description: "Register user schema",
            required: true,
          },
        },
      },
      "/api/users/resetpassword/{resetToken}": {
        put: {
          tags: ["User"],
          summary: "Reset Password",
          description: "This helps you with a new password",
          operationId: "resetPassword",
          parameters: [
            {
              name: "resetToken",
              in: "path",
              description: "reset password token",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "successful operation",
            },
            400: {
              description: "Invalid Reset password token",
            },
          },
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ResetUserPassword",
                },
              },
            },
            description: "Reset Password",
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};
