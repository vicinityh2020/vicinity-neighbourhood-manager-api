var data = {
  "swagger": "2.0",
  "info": {
    "description": " <hr> <h2>VICINITY Neighbourhood Manager API</h2> <h3>General info</h3>  <p>All API responses are wrapped into:</p>  <code>{ error: boolean, message: object/string}</code> <p>Where <b>message</b> is the actual response described below for each endpoint. Only exception are the semantic repository endpoints.</p> <p>In calls with authentication token required, the lack of it will generate error 401 - Not Authorized</p> <hr> <br> ",
    "version": "1.1.0",
    "title": "VICINITY NM API",
    "contact": {
      "email": "jorge.almela@bavenir.eu"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "host": "commserver.vicinity.ws:3000",
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
      "name": "users",
      "description": "Users management"
    },
    {
      "name": "agents",
      "description": "Agent management"
    },
    {
      "name": "items",
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
      "name": "semantic repository",
      "description": "Validate your TD and check the ontology"
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
            }
          },
          "400": {
            "description": "Invalid/Missing fields"
          },
          "401": {
            "description": "Unauthorized/Wrong password"
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
      },
      "post": {
        "tags": [
          "organisations"
        ],
        "summary": "Register a new organisation",
        "description": "DevOps approval required, user registering will have to wait for mail confirmation",
        "operationId": "postOrganisation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/postOrganisationBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "400": {
            "description": "Mail or name already exists"
          }
        }
      },
      "delete": {
        "tags": [
          "organisations"
        ],
        "summary": "Deletes a organisation",
        "description": "",
        "operationId": "deleteOrganisation",
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
            "description": "successful operation"
          },
          "403": {
            "description": "Need to be admin"
          }
        }
      }
    },
    "/organisation/all": {
      "get": {
        "tags": [
          "organisations"
        ],
        "summary": "Get all organisations in the platform",
        "description": "",
        "operationId": "getOrganisations",
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
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Items skipped at the beggining, allow pagination (i.e: Go to second page - offset=25)",
            "type": "number",
            "required": false
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Max number of items per page (25 is the upper max)",
            "type": "number",
            "default": 25,
            "required": false
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/organisationsArray"
            }
          },
          "400": {
            "description": "Wrong query parameters format"
          },
          "404": {
            "description": "Organisations not found"
          }
        }
      }
    },
    "/organisation/friends": {
      "get": {
        "tags": [
          "organisations"
        ],
        "summary": "Get friends of my organisation",
        "description": "",
        "operationId": "getFriends",
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
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Items skipped at the beggining, allow pagination (i.e: Go to second page - offset=25)",
            "type": "number",
            "required": false
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Max number of items per page (25 is the upper max)",
            "type": "number",
            "default": 25,
            "required": false
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/organisationsArray"
            }
          },
          "400": {
            "description": "Wrong query parameters format"
          },
          "404": {
            "description": "Organisations not found"
          }
        }
      }
    },
    "/organisation/{cid}/items": {
      "get": {
        "tags": [
          "organisations"
        ],
        "summary": "Get items under a certain organisation",
        "description": "",
        "operationId": "getOrganisationItems",
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
          },
          {
            "name": "cid",
            "in": "path",
            "description": "organisation id",
            "required": true,
            "type": "string"
          },
          {
            "name": "type",
            "in": "query",
            "description": "item type",
            "type": "string",
            "enum": [
              "device",
              "service"
            ],
            "required": false
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Items skipped at the beggining, allow pagination (i.e: Go to second page - offset=25)",
            "type": "number",
            "required": false
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Max number of items per page (25 is the upper max)",
            "type": "number",
            "default": 25,
            "required": false
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/itemsArray"
            }
          },
          "400": {
            "description": "Wrong query parameters format"
          },
          "404": {
            "description": "Items not found"
          }
        }
      }
    },
    "/organisation/auto": {
      "post": {
        "tags": [
          "organisations"
        ],
        "summary": "Register a new organisation (automatic)",
        "description": "No approval required, but you need a special role",
        "operationId": "postAutoOrganisation",
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
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/postAutoOrganisationBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "$ref": "#/definitions/postAutoOrganisationResponse"
            }
          },
          "400": {
            "description": "Mail or name already exists"
          },
          "403": {
            "description": "Need special role"
          }
        }
      }
    },
    "/users": {
      "get": {
        "tags": [
          "users"
        ],
        "summary": "Get user information",
        "description": "",
        "operationId": "getUser",
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
              "$ref": "#/definitions/getUserResponse"
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "User not found"
          }
        }
      },
      "post": {
        "tags": [
          "users"
        ],
        "summary": "User invitation",
        "description": "Sends a user invitation to join your company",
        "operationId": "postUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/postUserBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "request sent to process"
          },
          "400": {
            "description": "Missing fields"
          }
        }
      }
    },
    "/users/{uid}": {
      "put": {
        "tags": [
          "users"
        ],
        "summary": "Updates user",
        "description": " <p>Update types and its data value (one type at a time):</p> <ul> <li>metadata -- name, occupation, and/or contactMail -- String</li> <li>roles -- roles(user, administrator, service provider, infrastructure operator, system integrator ) -- Array of strings</li> <li>password -- oldPwd and newPwd -- String</li> <li>visibility -- accessLevel (0 - Private, 1 - Friends, 2 - Public) -- Number</li> </ul><p>Update body:</p><code>{data: object with the update, type: one of the possible types}</code> <br><br><b>Example</b> <code>{ data: {accessLevel: 1}, type: visibility }</code> ",
        "operationId": "putUser",
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
          },
          {
            "name": "uid",
            "in": "path",
            "description": "user to be updated",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/putUserBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "400": {
            "description": "Missing or wrong fields"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "delete": {
        "tags": [
          "users"
        ],
        "summary": "Deletes a organisation",
        "description": "",
        "operationId": "deleteUser",
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
          },
          {
            "name": "uid",
            "in": "path",
            "description": "user to be removed id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Need to be admin"
          }
        }
      }
    },
    "/agents": {
      "post": {
        "tags": [
          "agents"
        ],
        "summary": "Create agent",
        "description": "",
        "operationId": "postAgent",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/postAgentBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "400": {
            "description": "Missing fields"
          }
        }
      }
    },
    "/agents/{agid}/items": {
      "get": {
        "tags": [
          "agents"
        ],
        "summary": "Get agent items",
        "description": "",
        "operationId": "getAgentItems",
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
          },
          {
            "name": "agid",
            "in": "path",
            "description": "agent id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/getAgentItemsResponse"
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Items under agent not found"
          }
        }
      }
    },
    "/agents/{agid}": {
      "delete": {
        "tags": [
          "agents"
        ],
        "summary": "Delete agent",
        "description": "",
        "operationId": "deleteAgent",
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
          },
          {
            "name": "agid",
            "in": "path",
            "description": "agent id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Agent not found"
          }
        }
      }
    },
    "/items": {
      "put": {
        "tags": [
          "items"
        ],
        "summary": "Updates item",
        "description": " <p>Updates an item or many items with the multi option.</p> <p><i>Item = Service or device</i></p><br> <p>Update Body:</p> <code>{ o_id: item id, typeOfItem: \"device\" or \"service\", update field: update value }</code> <br><br><p>Update possible fields (one at a time):</p> <ul><li>status : enabled/disabled</li> <li>accessLevel: 0/1/2 (private/for friends/public)</li> <li>avatar: base64 image</li> </ul> ",
        "operationId": "putItem",
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
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/putItemBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "400": {
            "description": "Missing or wrong fields"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/partnership": {
      "get": {
        "tags": [
          "friendships"
        ],
        "summary": "Get friendship requests",
        "description": "",
        "operationId": "getFriendship",
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
              "$ref": "#/definitions/getFriendshipResponse"
            }
          },
          "404": {
            "description": "No friendship requests"
          }
        }
      },
      "post": {
        "tags": [
          "friendships"
        ],
        "summary": "Send friendship invitations",
        "description": "",
        "operationId": "postFriendship",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/postFriendshipBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "400": {
            "description": "Conflicting with current friendship status"
          }
        }
      },
      "put": {
        "tags": [
          "friendships"
        ],
        "summary": "Updates friendship",
        "description": " <p>Answers partnership requests/ or cancels existing partnership.</p> <p>Options (add to the type field in the body):</p> <ul><li>cancel (an existing partnership)</li> <li>accept</li> <li>reject</li> <li>cancelRequest</li></ul> ",
        "operationId": "putFriendship",
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
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/putFriendshipBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "400": {
            "description": "Conflicting with current friendship status"
          }
        }
      }
    },
    "/contract": {
      "get": {
        "tags": [
          "contracts"
        ],
        "summary": "Get contract requests",
        "description": "",
        "operationId": "getContract",
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
              "$ref": "#/definitions/arrayOfContracts"
            }
          },
          "404": {
            "description": "No contract requests"
          }
        }
      },
      "post": {
        "tags": [
          "contracts"
        ],
        "summary": "Send contract request",
        "description": " <p>Required fields:</p><ul> <li>readWrite: Boolean, if false service has read only rights over the devices using it.</li> <li>cidDevice: Object. Has internal and external ids of the organisation owner of the devices. Also the name.</li> <li>uidsDevice: Array of Object(s). Has internal and external ids of the user owner of the devices.</li> <li>oidsDevice: Array of Object(s). Has internal and external ids of the requested devices/services. Also the names.</li> <li>cidService: Object. Has internal and external ids of the organisation owner of the service. Also the name.</li> <li>uidsService: Array of 1 Object. Has internal and external ids of the user owner of the service.</li> <li>oidsService: Array of 1 Object. Has internal and external ids of the service requested. Also the names.</li> <li>contractingUser: [OPTIONAL] Object. User that is the owner of the service being requested.</li></ul> ",
        "operationId": "postContracts",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/postContractBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "400": {
            "description": "Wrong input"
          },
          "403": {
            "description": "Need IoT Owner role"
          }
        }
      }
    },
    "/contract/{ctid}": {
      "put": {
        "tags": [
          "contracts"
        ],
        "summary": "Updates contract",
        "description": " <p>Manages the lifecycle of the contract, there are two possible actions:</p> <ul><li>delete: Removes contract.</li> <li>accept: Accepts contract request.</li></ul> <p>Required fields:</p><ul> <li>type: accept/delete</li>  ",
        "operationId": "putContracts",
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
          },
          {
            "name": "ctid",
            "in": "path",
            "description": "contract id",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/putContractBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation"
          },
          "400": {
            "description": "Wrong input"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/contract/{ctid}/items": {
      "get": {
        "tags": [
          "contracts"
        ],
        "summary": "Get contract info",
        "description": "Get all the information about the contract, included items that belong to it",
        "operationId": "getItemsContract",
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
          },
          {
            "name": "ctid",
            "in": "path",
            "description": "contract id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/contractBody"
            }
          },
          "404": {
            "description": "Nothing found"
          }
        }
      }
    },
    "/contract/validItems/{cid}/{oid}": {
      "get": {
        "tags": [
          "contracts"
        ],
        "summary": "Get shareable candidates",
        "description": "Find items of my organisation that can be shared with a third party service",
        "operationId": "getValidItemsContract",
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
          },
          {
            "name": "cid",
            "in": "path",
            "description": "my company id",
            "required": true,
            "type": "string"
          },
          {
            "name": "oid",
            "in": "path",
            "description": "third party service id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/itemsArray"
            }
          },
          "404": {
            "description": "Nothing found"
          }
        }
      }
    },
    "/contract/contractedItems/{oid}": {
      "get": {
        "tags": [
          "contracts"
        ],
        "summary": "Get shared items",
        "description": "Get items that are sharing data with a service",
        "operationId": "getItemsSharedContract",
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
          },
          {
            "name": "oid",
            "in": "path",
            "description": "service id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/itemsArray"
            }
          },
          "404": {
            "description": "Nothing found"
          }
        }
      }
    },
    "/repository/annotations": {
      "get": {
        "tags": [
          "semantic repository"
        ],
        "summary": "Get ontology annotations",
        "description": "Get all possible property, action, event and thing types",
        "operationId": "getAnnotations",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/annotations"
            }
          }
        }
      }
    },
    "/repository/validate": {
      "post": {
        "tags": [
          "semantic repository"
        ],
        "summary": "Validates thing specifications (TDs)",
        "description": "Send your TDs and receive back validations errors if any",
        "operationId": "validateTd",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Registration data",
            "required": true,
            "schema": {
              "$ref": "#/definitions/thingToValidate"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/validationResponse"
            }
          },
          "400": {
            "description": "Missing or wrong fields in the payload",
            "schema": {
              "$ref": "#/definitions/validationError"
            }
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
        "token": {
          "type": "string"
        },
        "uid": {
          "type": "string",
          "format": "uuid"
        },
        "cid": {
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
    "postOrganisationBody": {
      "type": "object",
      "properties": {
        "companyName": {
          "type": "string"
        },
        "companyLocation": {
          "type": "string"
        },
        "businessId": {
          "type": "string"
        },
        "userName": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "occupation": {
          "type": "string"
        },
        "termsAndConditions": {
          "type": "boolean",
          "default": true
        }
      }
    },
    "postAutoOrganisationBody": {
      "type": "object",
      "properties": {
        "user": {
          "type": "object",
          "properties": {
            "userName": {
              "type": "string"
            },
            "contactMail": {
              "type": "string"
            },
            "occupation": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          }
        },
        "organisation": {
          "type": "object",
          "properties": {
            "companyName": {
              "type": "string"
            },
            "companyLocation": {
              "type": "string"
            }
          }
        }
      }
    },
    "postAutoOrganisationResponse": {
      "type": "object",
      "properties": {
        "result": {
          "type": "string"
        },
        "login": {
          "type": "string"
        },
        "uid": {
          "type": "string"
        },
        "cid": {
          "type": "string"
        }
      }
    },
    "getUserResponse": {
      "type": "object",
      "properties": {
        "user": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "cid": {
              "type": "string"
            },
            "occupation": {
              "type": "string"
            },
            "accessLevel": {
              "type": "integer"
            },
            "hasItems": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/idObject"
              }
            },
            "hasContracts": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/contractLink"
              }
            },
            "authentication.principalRoles": {
              "type": "string"
            }
          }
        }
      }
    },
    "postUserBody": {
      "type": "object",
      "properties": {
        "organisation": {
          "type": "string"
        },
        "emailTo": {
          "type": "string"
        },
        "nameTo": {
          "type": "string"
        }
      }
    },
    "putUserBody": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          }
        },
        "type": {
          "type": "string"
        }
      }
    },
    "postAgentBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      }
    },
    "getAgentItemsResponse": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id.info": {
            "type": "object",
            "description": "object with flexible schema"
          }
        }
      }
    },
    "putItemBody": {
      "type": "object",
      "properties": {
        "o_id": {
          "type": "string",
          "format": "uuid"
        },
        "typeOfItem": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "description": "Can be other update types"
        }
      }
    },
    "getFriendshipResponse": {
      "type": "object",
      "properties": {
        "requestsReceived": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        },
        "sentRequests": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        }
      }
    },
    "postFriendshipBody": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        }
      }
    },
    "putFriendshipBody": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "type": {
          "type": "string"
        }
      }
    },
    "postContractBody": {
      "type": "object",
      "properties": {
        "readWrite": {
          "type": "boolean"
        },
        "cidDevice": {
          "$ref": "#/definitions/idObject"
        },
        "uidsDevice": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        },
        "oidsDevice": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        },
        "cidService": {
          "$ref": "#/definitions/idObject"
        },
        "uidsService": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        },
        "oidsService": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        },
        "contractingUser": {
          "$ref": "#/definitions/idObject"
        }
      }
    },
    "putContractBody": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        }
      }
    },
    "arrayOfContracts": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/contractLink"
      }
    },
    "contractLink": {
      "type": "object",
      "properties": {
        "extid": {
          "type": "string"
        },
        "contractingUser": {
          "type": "string"
        },
        "contractingParty": {
          "type": "string"
        },
        "readWrite": {
          "type": "boolean"
        },
        "approved": {
          "type": "boolean"
        },
        "imAdmin": {
          "type": "boolean"
        },
        "imForeign": {
          "type": "boolean"
        },
        "inactive": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "contractBody": {
      "type": "object",
      "properties": {
        "ctid": {
          "type": "string"
        },
        "foreignIot": {
          "$ref": "#/definitions/contractSubschema"
        },
        "iotOwner": {
          "$ref": "#/definitions/contractSubschema"
        },
        "readWrite": {
          "type": "boolean"
        },
        "legalDescription": {
          "type": "string"
        },
        "type": {
          "type": "string",
          "enum": [
            "serviceRequest",
            "deviceUse"
          ]
        },
        "status": {
          "type": "string",
          "enum": [
            "active",
            "deleted"
          ],
          "default": "active"
        }
      }
    },
    "contractSubschema": {
      "type": "object",
      "properties": {
        "cid": {
          "$ref": "#/definitions/idObject"
        },
        "uid": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        },
        "termsAndConditions": {
          "type": "boolean"
        },
        "items": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/idObject"
          }
        }
      }
    },
    "annotations": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "device": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "property": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "service": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "status": {
          "type": "string"
        }
      }
    },
    "thingToValidate": {
      "type": "object",
      "properties": {
        "adapter-id": {
          "type": "string"
        },
        "thing-descriptions": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "Thing description valid format"
          }
        }
      }
    },
    "validationResponse": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "errors": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "status": {
          "type": "string"
        }
      }
    },
    "validationError": {
      "type": "object",
      "properties": {
        "error": {
          "type": "boolean",
          "default": true
        },
        "message": {
          "type": "object"
        }
      }
    },
    "itemsArray": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "_id": {
            "type": "string",
            "description": "Mongo id (XXXXXXXX...)"
          },
          "oid": {
            "type": "string",
            "description": "External id (XXXX-XXXX-...)"
          },
          "typeOfItem": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "accessLevel": {
            "type": "number"
          },
          "adid": {
            "$ref": "#/definitions/idObject"
          },
          "uid": {
            "$ref": "#/definitions/idObject"
          },
          "cid": {
            "type": "object",
            "properties": {
              "id": {
                "type": "object",
                "properties": {
                  "_id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  }
                }
              },
              "extid": {
                "type": "string"
              }
            }
          },
          "info": {
            "type": "object",
            "description": "Flexible schema"
          },
          "interactionPatterns": {
            "type": "array",
            "items": {
              "type": "object"
            }
          }
        }
      }
    },
    "organisationsArray": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "_id": {
            "type": "string",
            "description": "Mongo id (XXXXXXXX...)"
          },
          "cid": {
            "type": "string",
            "description": "External id (XXXX-XXXX-...)"
          },
          "name": {
            "type": "string"
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
        },
        "name": {
          "type": "string",
          "description": "Not always present"
        },
        "type": {
          "type": "string",
          "description": "Not always present"
        }
      }
    }
  },
  "externalDocs": {
    "description": "Find out more about VICINITY",
    "url": "https://github.com/vicinityh2020"
  }
}
