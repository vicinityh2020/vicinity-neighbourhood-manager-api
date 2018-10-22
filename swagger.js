data = {
  "swagger": "2.0",
  "info": {
    "description": "Lorem ipsum",
    "version": "1.0.0",
    "title": "VICINITY TEST",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "jorge.almela@bavenir.eu"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "host": "vicinity.bavenir.eu:3000",
  "basePath": "/api",
  "tags": [
    {
      "name": "authenticate",
      "description": "Login"
    },
    {
      "name": "organisations",
      "description": "Organisation management"
    },
    {
      "name": "user",
      "description": "Login"
    },
    {
      "name": "agent",
      "description": "Agent management"
    },
    {
      "name": "item",
      "description": "Item management"
    },
    {
      "name": "contracts",
      "description": "Contract management"
    },
    {
      "name": "friendships",
      "description": "Friendship management"
    },
    {
      "name": "search",
      "description": "Entity search"
    },
    {
      "name": "semantic repository",
      "description": "Semantic validation"
    }
  ],
  "schemes": [
    "https",
    "http"
  ],
  "paths": {
    "/authenticate": {
      "post": {
        "tags": [
          "authenticate"
        ],
        "summary": "Logs user into the system",
        "description": "Generates the x-access-token needed for the rest of the requests",
        "operationId": "loginUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Login data",
            "required": true,
            "schema": {
              "$ref": "#/definitions/LoginBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LoginResponse"
            },
            "headers": {
              "X-Rate-Limit": {
                "type": "integer",
                "format": "int32",
                "description": "calls per hour allowed by the user"
              },
              "X-Expires-After": {
                "type": "string",
                "format": "date-time",
                "description": "date in UTC when token expires"
              }
            }
          },
          "400": {
            "description": "Invalid/Missing fields"
          },
          "401": {
            "description": "Unauthorized/Wrong password"
          },
          "403": {
            "description": "User duplicated"
          },
          "404": {
            "description": "User not found or deleted"
          }
        }
      }
    },
    "/organisation": {
      "get": {
        "tags": [
          "organisations"
        ],
        "summary": "Get logged user organisation information",
        "description": "",
        "operationId": "getOrganisation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "x-access-token",
            "in": "header",
            "description": "authentication token",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/getOrganisationResponse"
            }
          },
          "404": {
            "description": "Organisation not found"
          }
        }
      }
    }
  },
  "definitions": {
    "LoginBody": {
      "type": "object",
      "properties": {
        "username": {
          "type": "string"
        },
        "password": {
          "type": "string"
        }
      }
    },
    "LoginResponse": {
      "type": "object",
      "properties": {
        "Token": {
          "type": "string"
        },
        "UID": {
          "type": "string",
          "format": "uuid"
        },
        "CID": {
          "type": "string",
          "format": "uuid"
        }
      }
    },
    "getOrganisationResponse": {
      "type": "object",
      "properties": {
        "_id": {
          "type": "string",
          "format": "uuid"
        },
        "name": {
          "type": "string"
        },
        "cid": {
          "type": "string",
          "format": "uuid"
        },
        "accountOf": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        },
        "knows": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        },
        "hasNodes": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        }
      }
    },
    "idObject": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Primary id"
        },
        "extid": {
          "type": "string",
          "format": "uuid",
          "description": "External id"
        }
      }
    }
  },
  "externalDocs": {
    "description": "Find out more about VICINITY",
    "url": "https://github.com/vicinityh2020"
  }
}