window.FIXTURES = {
    "app/app.apiary.json": {
        "ast": {
                "_version": "3.0",
                "metadata": [
                        {
                                "name": "FORMAT",
                                "value": "1A"
                        },
                        {
                                "name": "HOST",
                                "value": "https://api.topcoder.com/v3/"
                        }
                ],
                "name": "ASP Application Service (Draft)",
                "description": "The application layer service collects data from backend and provides them to frontend. It follows the v3 API spec defined in [here](https://docs.google.com/presentation/d/15pucEI0MHj9y778EyaAWGh4MBH-I73i1-GS0ir7FhxE/edit#slide=id.g29c3ffcc3_053).\n\n",
                "element": "category",
                "resourceGroups": [
                        {
                                "name": "Work Steps",
                                "description": "",
                                "resources": [
                                        {
                                                "element": "resource",
                                                "name": "A collection of steps",
                                                "description": "",
                                                "uriTemplate": "/projects/{work_id}/steps{?stepType}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "",
                                                                "type": "string",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "abc",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "stepType",
                                                                "description": "Type of the  work step, can be designConcepts, completeDesigns or finalFixes",
                                                                "type": "string",
                                                                "required": false,
                                                                "default": "",
                                                                "example": "designConcepts",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get a collection of steps",
                                                                "description": "Get all the work steps for the given project_id and work type\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "[\n  {\n    \"id\": \"abc\",\n    \"stepType\": \"designConcepts\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"numberOfRanks\": 3,\n    \"rankedSubmissions\": [\n      {\n        \"rank\": 1,\n        \"submissionId\": \"123\"\n      }\n    ],\n    \"customerConfirmedRanks\": null\n  },\n  {\n    \"id\": \"def\",\n    \"stepType\": \"completeDesigns\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"numberOfRanks\": 3,\n    \"rankedSubmissions\": [],\n    \"customerConfirmedRanks\": null\n  },\n  {\n    \"id\": \"ghi\",\n    \"stepType\": \"finalFixes\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"customerAcceptedFixes\": null\n  }\n]\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "[\n  {\n    \"id\": \"abc\",\n    \"stepType\": \"designConcepts\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"numberOfRanks\": 3,\n    \"rankedSubmissions\": [\n      {\n        \"rank\": 1,\n        \"submissionId\": \"123\"\n      }\n    ],\n    \"customerConfirmedRanks\": null\n  },\n  {\n    \"id\": \"def\",\n    \"stepType\": \"completeDesigns\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"numberOfRanks\": 3,\n    \"rankedSubmissions\": [],\n    \"customerConfirmedRanks\": null\n  },\n  {\n    \"id\": \"ghi\",\n    \"stepType\": \"finalFixes\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"customerAcceptedFixes\": null\n  }\n]\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "A step",
                                                "description": "The following properties may be PATCHed **one at a time**:\n\n+ rankedSubmissions\n\n+ customerConfirmedRanks\n\n+ customerAcceptedFixes\n\n",
                                                "uriTemplate": "/projects/{work_id}/steps/{step_id}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "",
                                                                "type": "string",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "abc",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "step_id",
                                                                "description": "",
                                                                "type": "string",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "abc",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get a step",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    }\n  ],\n  \"customerConfirmedRanks\": null\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    }\n  ],\n  \"customerConfirmedRanks\": null\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update a step",
                                                                "description": "Update partial information of a work step with PATCH\n\n",
                                                                "method": "PATCH",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"rankedSubmissions\": [\n        {\n          \"rank\": 1,\n          \"submissionId\": \"abc\"\n        },\n        {\n          \"rank\": 2,\n          \"submissionId\": \"def\"\n        },\n        {\n          \"rank\": 3,\n          \"submissionId\": \"ghi\"\n        }\n    ]\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"rankedSubmissions\": [\n        {\n          \"rank\": 1,\n          \"submissionId\": \"abc\"\n        },\n        {\n          \"rank\": 2,\n          \"submissionId\": \"def\"\n        },\n        {\n          \"rank\": 3,\n          \"submissionId\": \"ghi\"\n        }\n    ]\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    },\n    {\n      \"rank\": 2,\n      \"submissionId\": \"def\"\n    },\n    {\n      \"rank\": 3,\n      \"submissionId\": \"ghi\"\n    }\n  ],\n  \"customerConfirmedRanks\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    },\n    {\n      \"rank\": 2,\n      \"submissionId\": \"def\"\n    },\n    {\n      \"rank\": 3,\n      \"submissionId\": \"ghi\"\n    }\n  ],\n  \"customerConfirmedRanks\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"customerConfirmedRanks\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"customerConfirmedRanks\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    },\n    {\n      \"rank\": 2,\n      \"submissionId\": \"def\"\n    },\n    {\n      \"rank\": 3,\n      \"submissionId\": \"ghi\"\n    }\n  ],\n  \"customerConfirmedRanks\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    },\n    {\n      \"rank\": 2,\n      \"submissionId\": \"def\"\n    },\n    {\n      \"rank\": 3,\n      \"submissionId\": \"ghi\"\n    }\n  ],\n  \"customerConfirmedRanks\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"customerAcceptedFixes\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"customerAcceptedFixes\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"abc\",\n    \"stepType\": \"finalFixes\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"customerAcceptedFixes\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"abc\",\n    \"stepType\": \"finalFixes\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"customerAcceptedFixes\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "A collection of submissions",
                                                "description": "",
                                                "uriTemplate": "/projects/{work_id}/steps/{step_id}/submissions",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "",
                                                                "type": "string",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "abc",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "step_id",
                                                                "description": "",
                                                                "type": "string",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "abc",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get a collection of submissions",
                                                                "description": "Get all the submissions under the given work step\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "[\n  {\n    \"id\": \"abc\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"def\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"ghi\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n]\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "[\n  {\n    \"id\": \"abc\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"def\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"ghi\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n]\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        },
                        {
                                "name": "Timeline",
                                "description": "",
                                "resources": [
                                        {
                                                "element": "resource",
                                                "name": "Timeline Events",
                                                "description": "Authroization header has to be provided along with this request to identify the user. A timeline object has the following fields:\n\n+ confirmEmail - the object describing the work event that a confirmation email has been sent \n\n+ assignCopilot - the object describing the work event that a copilot has been assigned\n\n+ quote - the object describing the work event about estimation of the project\n\n+ paymentAccepted - the object describing the work event that whether the payment has been accepted or not\n\n+ launch -  the object describing the work event that the project has been launched\n\n+ members - a list of members who have joined the project\n\n+ lastMessage -  the object describing the last (unread) message in a launch event\n\n+ desingConcepts -  the object describing the phase of deisgn concepts\n\n+ finalDesigns - the object describing the phase of final deisgns\n\n+ finalFixexs -  the object describing the phase of final fixes\n\n+ completed - the object describing the work event that whether the project has been completed or not\n\n",
                                                "uriTemplate": "/work/{work_id}/timeline",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get the timeline events",
                                                                "description": "Get information of the timeline events\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"confirmEmail\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"address\": \"john@example.com\"\n            },\n            \"assignCopilot\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"userId\": 123,\n                \"handle\": \"Batman\"\n            },\n            \"quote\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"price\": 1500,\n                \"duration\": 20,\n                \"accepted\": true\n            },\n            \"paymentAccepted\": {\n                \"created\": \"12:30pm April 5 2015\"\n            },\n            \"launch\": {\n                \"created\": \"12:30pm April 5 2015\",\n            },\n            \"members\": [{\n                \"handle\": \"Batman #{i}\",\n                \"avatar\": \"avatar\"\n            }],\n            \"lastMessage\": {\n                \"avatar\": \"avatar\",\n                \"handle\": \"Batman\",\n                \"unreadMessageCount\": 5,\n                \"threadId\": \"abc123\",\n                \"message\": \"Maybe its best if we stick with something something something something.\"\n            },\n            \"designConcepts\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"unreadMessageCount\": 5,\n                    \"lastComment\": \"last comment\",\n                    \"threadId\": \"abc123\"\n                }],\n                \"winnerUrls\": [\n                    \"http://winnerUrls\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalDesigns\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalFixes\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"unreadMessageCount\": 5,\n                    “lastComment”: “last comment”,\n                    \"threadId\": \"abc123\"\n                }],\n                \"winnerUrl\": \"http://winnerUrls\",\n                \"winnerAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n            },\n            \"completed\": {\n                \"created\": \"12:30pm April 5 2015\"\n            }\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"confirmEmail\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"address\": \"john@example.com\"\n            },\n            \"assignCopilot\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"userId\": 123,\n                \"handle\": \"Batman\"\n            },\n            \"quote\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"price\": 1500,\n                \"duration\": 20,\n                \"accepted\": true\n            },\n            \"paymentAccepted\": {\n                \"created\": \"12:30pm April 5 2015\"\n            },\n            \"launch\": {\n                \"created\": \"12:30pm April 5 2015\",\n            },\n            \"members\": [{\n                \"handle\": \"Batman #{i}\",\n                \"avatar\": \"avatar\"\n            }],\n            \"lastMessage\": {\n                \"avatar\": \"avatar\",\n                \"handle\": \"Batman\",\n                \"unreadMessageCount\": 5,\n                \"threadId\": \"abc123\",\n                \"message\": \"Maybe its best if we stick with something something something something.\"\n            },\n            \"designConcepts\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"unreadMessageCount\": 5,\n                    \"lastComment\": \"last comment\",\n                    \"threadId\": \"abc123\"\n                }],\n                \"winnerUrls\": [\n                    \"http://winnerUrls\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalDesigns\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalFixes\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"unreadMessageCount\": 5,\n                    “lastComment”: “last comment”,\n                    \"threadId\": \"abc123\"\n                }],\n                \"winnerUrl\": \"http://winnerUrls\",\n                \"winnerAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n            },\n            \"completed\": {\n                \"created\": \"12:30pm April 5 2015\"\n            }\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ],
                "content": [
                        {
                                "element": "category",
                                "attributes": {
                                        "name": "Work Steps"
                                },
                                "content": [
                                        {
                                                "element": "resource",
                                                "name": "A collection of steps",
                                                "description": "",
                                                "uriTemplate": "/projects/{work_id}/steps{?stepType}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "",
                                                                "type": "string",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "abc",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "stepType",
                                                                "description": "Type of the  work step, can be designConcepts, completeDesigns or finalFixes",
                                                                "type": "string",
                                                                "required": false,
                                                                "default": "",
                                                                "example": "designConcepts",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get a collection of steps",
                                                                "description": "Get all the work steps for the given project_id and work type\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "[\n  {\n    \"id\": \"abc\",\n    \"stepType\": \"designConcepts\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"numberOfRanks\": 3,\n    \"rankedSubmissions\": [\n      {\n        \"rank\": 1,\n        \"submissionId\": \"123\"\n      }\n    ],\n    \"customerConfirmedRanks\": null\n  },\n  {\n    \"id\": \"def\",\n    \"stepType\": \"completeDesigns\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"numberOfRanks\": 3,\n    \"rankedSubmissions\": [],\n    \"customerConfirmedRanks\": null\n  },\n  {\n    \"id\": \"ghi\",\n    \"stepType\": \"finalFixes\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"customerAcceptedFixes\": null\n  }\n]\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "[\n  {\n    \"id\": \"abc\",\n    \"stepType\": \"designConcepts\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"numberOfRanks\": 3,\n    \"rankedSubmissions\": [\n      {\n        \"rank\": 1,\n        \"submissionId\": \"123\"\n      }\n    ],\n    \"customerConfirmedRanks\": null\n  },\n  {\n    \"id\": \"def\",\n    \"stepType\": \"completeDesigns\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"numberOfRanks\": 3,\n    \"rankedSubmissions\": [],\n    \"customerConfirmedRanks\": null\n  },\n  {\n    \"id\": \"ghi\",\n    \"stepType\": \"finalFixes\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"customerAcceptedFixes\": null\n  }\n]\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "A step",
                                                "description": "The following properties may be PATCHed **one at a time**:\n\n+ rankedSubmissions\n\n+ customerConfirmedRanks\n\n+ customerAcceptedFixes\n\n",
                                                "uriTemplate": "/projects/{work_id}/steps/{step_id}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "",
                                                                "type": "string",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "abc",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "step_id",
                                                                "description": "",
                                                                "type": "string",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "abc",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get a step",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    }\n  ],\n  \"customerConfirmedRanks\": null\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    }\n  ],\n  \"customerConfirmedRanks\": null\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update a step",
                                                                "description": "Update partial information of a work step with PATCH\n\n",
                                                                "method": "PATCH",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"rankedSubmissions\": [\n        {\n          \"rank\": 1,\n          \"submissionId\": \"abc\"\n        },\n        {\n          \"rank\": 2,\n          \"submissionId\": \"def\"\n        },\n        {\n          \"rank\": 3,\n          \"submissionId\": \"ghi\"\n        }\n    ]\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"rankedSubmissions\": [\n        {\n          \"rank\": 1,\n          \"submissionId\": \"abc\"\n        },\n        {\n          \"rank\": 2,\n          \"submissionId\": \"def\"\n        },\n        {\n          \"rank\": 3,\n          \"submissionId\": \"ghi\"\n        }\n    ]\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    },\n    {\n      \"rank\": 2,\n      \"submissionId\": \"def\"\n    },\n    {\n      \"rank\": 3,\n      \"submissionId\": \"ghi\"\n    }\n  ],\n  \"customerConfirmedRanks\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    },\n    {\n      \"rank\": 2,\n      \"submissionId\": \"def\"\n    },\n    {\n      \"rank\": 3,\n      \"submissionId\": \"ghi\"\n    }\n  ],\n  \"customerConfirmedRanks\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"customerConfirmedRanks\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"customerConfirmedRanks\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    },\n    {\n      \"rank\": 2,\n      \"submissionId\": \"def\"\n    },\n    {\n      \"rank\": 3,\n      \"submissionId\": \"ghi\"\n    }\n  ],\n  \"customerConfirmedRanks\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"abc\",\n  \"stepType\": \"designConcepts\",\n  \"startsAt\": \"20150129T1355+00:00\",\n  \"endsAt\": \"20150129T1355+00:00\",\n  \"completed\": null,\n  \"numberOfRanks\": 3,\n  \"rankedSubmissions\": [\n    {\n      \"rank\": 1,\n      \"submissionId\": \"abc\"\n    },\n    {\n      \"rank\": 2,\n      \"submissionId\": \"def\"\n    },\n    {\n      \"rank\": 3,\n      \"submissionId\": \"ghi\"\n    }\n  ],\n  \"customerConfirmedRanks\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"customerAcceptedFixes\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"customerAcceptedFixes\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"abc\",\n    \"stepType\": \"finalFixes\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"customerAcceptedFixes\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"abc\",\n    \"stepType\": \"finalFixes\",\n    \"startsAt\": \"20150129T1355+00:00\",\n    \"endsAt\": \"20150129T1355+00:00\",\n    \"completed\": null,\n    \"customerAcceptedFixes\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "A collection of submissions",
                                                "description": "",
                                                "uriTemplate": "/projects/{work_id}/steps/{step_id}/submissions",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "",
                                                                "type": "string",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "abc",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "step_id",
                                                                "description": "",
                                                                "type": "string",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "abc",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get a collection of submissions",
                                                                "description": "Get all the submissions under the given work step\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "[\n  {\n    \"id\": \"abc\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"def\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"ghi\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n]\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "[\n  {\n    \"id\": \"abc\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"def\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"ghi\",\n    \"createdAt\": \"2015-05-05T20:53:41.467Z\",\n    \"downloadUrl\": \"http://placehold.it/400x800\",\n    \"submitter\": {\n      \"id\": \"abc\",\n      \"handle\": \"Darth Vader\",\n      \"avatar\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n    },\n    \"files\": [\n      {\n        \"id\": \"abc\",\n        \"name\": \"super-generic-file-1.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 1,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-azax05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"def\",\n        \"name\": \"super-generic-file-2.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 2,\n            \"messages\": [\n              {\n                \"id\": \"abc\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": false\n              },\n              {\n                \"id\": \"def\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Another deeply insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"aselbie\",\n                \"read\": false\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"id\": \"ghi\",\n        \"name\": \"super-generic-file-3.jpg\",\n        \"images\": {\n          \"thumbnail\": \"http://placehold.it/50x40\",\n          \"small\": \"http://placehold.it/160x130\",\n          \"large\": \"http://placehold.it/200x400\",\n          \"full\": \"http://placehold.it/400x800\"\n        },\n        \"threads\": [\n          {\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\": \"Messages for file\",\n            \"unreadCount\": 0,\n            \"messages\": [\n              {\n                \"id\": \"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\": \"Some insightful comment about this file.\",\n                \"createdAt\": \"2015-11-05T08:15:30-05:00\",\n                \"publisherId\": \"sselvadurai\",\n                \"read\": true\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n]\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        },
                        {
                                "element": "category",
                                "attributes": {
                                        "name": "Timeline"
                                },
                                "content": [
                                        {
                                                "element": "resource",
                                                "name": "Timeline Events",
                                                "description": "Authroization header has to be provided along with this request to identify the user. A timeline object has the following fields:\n\n+ confirmEmail - the object describing the work event that a confirmation email has been sent \n\n+ assignCopilot - the object describing the work event that a copilot has been assigned\n\n+ quote - the object describing the work event about estimation of the project\n\n+ paymentAccepted - the object describing the work event that whether the payment has been accepted or not\n\n+ launch -  the object describing the work event that the project has been launched\n\n+ members - a list of members who have joined the project\n\n+ lastMessage -  the object describing the last (unread) message in a launch event\n\n+ desingConcepts -  the object describing the phase of deisgn concepts\n\n+ finalDesigns - the object describing the phase of final deisgns\n\n+ finalFixexs -  the object describing the phase of final fixes\n\n+ completed - the object describing the work event that whether the project has been completed or not\n\n",
                                                "uriTemplate": "/work/{work_id}/timeline",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get the timeline events",
                                                                "description": "Get information of the timeline events\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"confirmEmail\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"address\": \"john@example.com\"\n            },\n            \"assignCopilot\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"userId\": 123,\n                \"handle\": \"Batman\"\n            },\n            \"quote\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"price\": 1500,\n                \"duration\": 20,\n                \"accepted\": true\n            },\n            \"paymentAccepted\": {\n                \"created\": \"12:30pm April 5 2015\"\n            },\n            \"launch\": {\n                \"created\": \"12:30pm April 5 2015\",\n            },\n            \"members\": [{\n                \"handle\": \"Batman #{i}\",\n                \"avatar\": \"avatar\"\n            }],\n            \"lastMessage\": {\n                \"avatar\": \"avatar\",\n                \"handle\": \"Batman\",\n                \"unreadMessageCount\": 5,\n                \"threadId\": \"abc123\",\n                \"message\": \"Maybe its best if we stick with something something something something.\"\n            },\n            \"designConcepts\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"unreadMessageCount\": 5,\n                    \"lastComment\": \"last comment\",\n                    \"threadId\": \"abc123\"\n                }],\n                \"winnerUrls\": [\n                    \"http://winnerUrls\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalDesigns\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalFixes\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"unreadMessageCount\": 5,\n                    “lastComment”: “last comment”,\n                    \"threadId\": \"abc123\"\n                }],\n                \"winnerUrl\": \"http://winnerUrls\",\n                \"winnerAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n            },\n            \"completed\": {\n                \"created\": \"12:30pm April 5 2015\"\n            }\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"confirmEmail\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"address\": \"john@example.com\"\n            },\n            \"assignCopilot\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"userId\": 123,\n                \"handle\": \"Batman\"\n            },\n            \"quote\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"price\": 1500,\n                \"duration\": 20,\n                \"accepted\": true\n            },\n            \"paymentAccepted\": {\n                \"created\": \"12:30pm April 5 2015\"\n            },\n            \"launch\": {\n                \"created\": \"12:30pm April 5 2015\",\n            },\n            \"members\": [{\n                \"handle\": \"Batman #{i}\",\n                \"avatar\": \"avatar\"\n            }],\n            \"lastMessage\": {\n                \"avatar\": \"avatar\",\n                \"handle\": \"Batman\",\n                \"unreadMessageCount\": 5,\n                \"threadId\": \"abc123\",\n                \"message\": \"Maybe its best if we stick with something something something something.\"\n            },\n            \"designConcepts\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"unreadMessageCount\": 5,\n                    \"lastComment\": \"last comment\",\n                    \"threadId\": \"abc123\"\n                }],\n                \"winnerUrls\": [\n                    \"http://winnerUrls\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalDesigns\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalFixes\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submitterAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"unreadMessageCount\": 5,\n                    “lastComment”: “last comment”,\n                    \"threadId\": \"abc123\"\n                }],\n                \"winnerUrl\": \"http://winnerUrls\",\n                \"winnerAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n            },\n            \"completed\": {\n                \"created\": \"12:30pm April 5 2015\"\n            }\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ]
        },
        "warnings": [],
        "sourcemap": null
},
    "app/lyft.swagger.json": {
        "swagger": "2.0",
        "info": {
                "description": "Move your app forward with the Uber API",
                "version": "1.0.0",
                "title": "Lyft API"
        },
        "host": "api.lyft.com",
        "basePath": "/v2",
        "schemes": [
                "https"
        ],
        "produces": [
                "application/json"
        ],
        "paths": {
                "/estimates/price": {
                        "get": {
                                "tags": [
                                        "Estimates"
                                ],
                                "summary": "Price Estimates",
                                "description": "The Price Estimates endpoint returns an estimated price range\nfor each product offered at a given location. The price estimate is\nprovided as a formatted string with the full price range and the localized\ncurrency symbol.<br><br>The response also includes low and high estimates,\nand the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for\nsituations requiring currency conversion. When surge is active for a particular\nproduct, its surge_multiplier will be greater than 1, but the price estimate\nalready factors in this multiplier.\n",
                                "parameters": [
                                        {
                                                "name": "start_latitude",
                                                "in": "query",
                                                "description": "Latitude component of start location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "start_longitude",
                                                "in": "query",
                                                "description": "Longitude component of start location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "end_latitude",
                                                "in": "query",
                                                "description": "Latitude component of end location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "end_longitude",
                                                "in": "query",
                                                "description": "Longitude component of end location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        }
                                ],
                                "responses": {
                                        "200": {
                                                "description": "An array of price estimates by product",
                                                "schema": {
                                                        "type": "array",
                                                        "items": {
                                                                "$ref": "#/definitions/PriceEstimate"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/estimates/time": {
                        "get": {
                                "tags": [
                                        "Estimates"
                                ],
                                "summary": "Time Estimates",
                                "description": "The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.",
                                "parameters": [
                                        {
                                                "name": "start_latitude",
                                                "in": "query",
                                                "description": "Latitude component of start location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "start_longitude",
                                                "in": "query",
                                                "description": "Longitude component of start location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "customer_uuid",
                                                "in": "query",
                                                "description": "Unique customer identifier to be used for experience customization.",
                                                "required": false,
                                                "type": "string",
                                                "format": "uuid"
                                        },
                                        {
                                                "name": "product_id",
                                                "in": "query",
                                                "description": "Unique identifier representing a specific product for a given latitude & longitude.",
                                                "required": false,
                                                "type": "string"
                                        }
                                ],
                                "responses": {
                                        "200": {
                                                "description": "An array of products",
                                                "schema": {
                                                        "type": "array",
                                                        "items": {
                                                                "$ref": "#/definitions/Product"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/history/{history_id}/bob/{bob-id}": {
                        "get": {
                                "tags": [
                                        "User"
                                ],
                                "summary": "User Activity",
                                "description": "The User Activity endpoint returns data about a user's lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary.",
                                "parameters": [
                                        {
                                                "name": "offset",
                                                "in": "query",
                                                "description": "Offset the list of returned results by this amount. Default is zero.",
                                                "required": false,
                                                "type": "integer",
                                                "format": "int32"
                                        },
                                        {
                                                "name": "limit",
                                                "in": "query",
                                                "description": "Number of items to retrieve. Default is 5, maximum is 100.",
                                                "required": false,
                                                "type": "integer",
                                                "format": "int32"
                                        }
                                ],
                                "responses": {
                                        "200": {
                                                "description": "History information for the given user",
                                                "schema": {
                                                        "$ref": "#/definitions/Activities"
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/me": {
                        "get": {
                                "tags": [
                                        "User"
                                ],
                                "summary": "User Profile",
                                "description": "The User Profile endpoint returns information about the Uber user that has authorized with the application.",
                                "parameters": [],
                                "responses": {
                                        "200": {
                                                "description": "Profile information for a user",
                                                "schema": {
                                                        "$ref": "#/definitions/Profile"
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/products": {
                        "get": {
                                "tags": [
                                        "Products"
                                ],
                                "summary": "Product Types",
                                "description": "The Products endpoint returns information about the *Uber* products\noffered at a given location. The response includes the display name\nand other details about each product, and lists the products in the\nproper display order.\n",
                                "parameters": [
                                        {
                                                "name": "latitude",
                                                "in": "query",
                                                "description": "Latitude component of location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "longitude",
                                                "in": "query",
                                                "description": "Longitude component of location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        }
                                ],
                                "responses": {
                                        "200": {
                                                "description": "An array of products",
                                                "schema": {
                                                        "type": "array",
                                                        "items": {
                                                                "$ref": "#/definitions/Product"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                }
        },
        "definitions": {
                "Product": {
                        "properties": {
                                "product_id": {
                                        "type": "string",
                                        "description": "Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles."
                                },
                                "description": {
                                        "type": "string",
                                        "description": "Description of product."
                                },
                                "display_name": {
                                        "type": "string",
                                        "description": "Display name of product."
                                },
                                "capacity": {
                                        "type": "string",
                                        "description": "Capacity of product. For example, 4 people."
                                },
                                "image": {
                                        "type": "string",
                                        "description": "Image URL representing the product."
                                }
                        }
                },
                "PriceEstimate": {
                        "properties": {
                                "product_id": {
                                        "type": "string",
                                        "description": "Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles"
                                },
                                "currency_code": {
                                        "type": "string",
                                        "description": "[ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code."
                                },
                                "display_name": {
                                        "type": "string",
                                        "description": "Display name of product."
                                },
                                "estimate": {
                                        "type": "string",
                                        "description": "Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or \"Metered\" for TAXI."
                                },
                                "low_estimate": {
                                        "type": "number",
                                        "description": "Lower bound of the estimated price."
                                },
                                "high_estimate": {
                                        "type": "number",
                                        "description": "Upper bound of the estimated price."
                                },
                                "surge_multiplier": {
                                        "type": "number",
                                        "description": "Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier."
                                }
                        }
                },
                "Profile": {
                        "properties": {
                                "first_name": {
                                        "type": "string",
                                        "description": "First name of the Uber user."
                                },
                                "last_name": {
                                        "type": "string",
                                        "description": "Last name of the Uber user."
                                },
                                "email": {
                                        "type": "string",
                                        "description": "Email address of the Uber user"
                                },
                                "picture": {
                                        "type": "string",
                                        "description": "Image URL of the Uber user."
                                },
                                "promo_code": {
                                        "type": "string",
                                        "description": "Promo code of the Uber user."
                                }
                        }
                },
                "Activity": {
                        "properties": {
                                "uuid": {
                                        "type": "string",
                                        "description": "Unique identifier for the activity"
                                }
                        }
                },
                "Activities": {
                        "properties": {
                                "offset": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "Position in pagination."
                                },
                                "limit": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "Number of items to retrieve (100 max)."
                                },
                                "count": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "Total number of items available."
                                },
                                "history": {
                                        "type": "array",
                                        "items": {
                                                "$ref": "#/definitions/Activity"
                                        }
                                }
                        }
                },
                "Error": {
                        "properties": {
                                "code": {
                                        "type": "integer",
                                        "format": "int32"
                                },
                                "message": {
                                        "type": "string"
                                },
                                "fields": {
                                        "type": "string"
                                }
                        }
                }
        }
},
    "app/uber.swagger.json": {
        "swagger": "2.0",
        "info": {
                "description": "Move your app forward with the Uber API",
                "version": "1.0.0",
                "title": "Uber API"
        },
        "host": "api.uber.com",
        "basePath": "/v1",
        "schemes": [
                "https"
        ],
        "produces": [
                "application/json"
        ],
        "paths": {
                "/estimates/price": {
                        "put": {
                                "responses": {
                                        "204": {
                                                "schema": null
                                        }
                                }
                        },
                        "get": {
                                "tags": [
                                        "Estimates"
                                ],
                                "summary": "Price Estimates",
                                "description": "The Price Estimates endpoint returns an estimated price range\nfor each product offered at a given location. The price estimate is\nprovided as a formatted string with the full price range and the localized\ncurrency symbol.<br><br>The response also includes low and high estimates,\nand the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for\nsituations requiring currency conversion. When surge is active for a particular\nproduct, its surge_multiplier will be greater than 1, but the price estimate\nalready factors in this multiplier.\n",
                                "parameters": [
                                        {
                                                "name": "start_latitude",
                                                "in": "query",
                                                "description": "Latitude component of start location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "start_longitude",
                                                "in": "query",
                                                "description": "Longitude component of start location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "end_latitude",
                                                "in": "query",
                                                "description": "Latitude component of end location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "end_longitude",
                                                "in": "query",
                                                "description": "Longitude component of end location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        }
                                ],
                                "responses": {
                                        "200": {
                                                "description": "An array of price estimates by product",
                                                "schema": {
                                                        "type": "array",
                                                        "items": {
                                                                "$ref": "#/definitions/PriceEstimate"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/estimates/time": {
                        "get": {
                                "tags": [
                                        "Estimates"
                                ],
                                "summary": "Time Estimates",
                                "description": "The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.",
                                "parameters": [
                                        {
                                                "name": "start_latitude",
                                                "in": "query",
                                                "description": "Latitude component of start location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "start_longitude",
                                                "in": "query",
                                                "description": "Longitude component of start location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "customer_uuid",
                                                "in": "query",
                                                "description": "Unique customer identifier to be used for experience customization.",
                                                "required": false,
                                                "type": "string",
                                                "format": "uuid"
                                        },
                                        {
                                                "name": "product_id",
                                                "in": "query",
                                                "description": "Unique identifier representing a specific product for a given latitude & longitude.",
                                                "required": false,
                                                "type": "string"
                                        }
                                ],
                                "responses": {
                                        "200": {
                                                "description": "An array of products",
                                                "schema": {
                                                        "type": "array",
                                                        "items": {
                                                                "$ref": "#/definitions/Product"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/history": {
                        "get": {
                                "tags": [
                                        "User"
                                ],
                                "summary": "User Activity",
                                "description": "The User Activity endpoint returns data about a user's lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary.",
                                "parameters": [
                                        {
                                                "name": "offset",
                                                "in": "query",
                                                "description": "Offset the list of returned results by this amount. Default is zero.",
                                                "required": false,
                                                "type": "integer",
                                                "format": "int32"
                                        },
                                        {
                                                "name": "limit",
                                                "in": "query",
                                                "description": "Number of items to retrieve. Default is 5, maximum is 100.",
                                                "required": false,
                                                "type": "integer",
                                                "format": "int32"
                                        }
                                ],
                                "responses": {
                                        "200": {
                                                "description": "History information for the given user",
                                                "schema": {
                                                        "$ref": "#/definitions/Activities"
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/me": {
                        "get": {
                                "tags": [
                                        "User"
                                ],
                                "summary": "User Profile",
                                "description": "The User Profile endpoint returns information about the Uber user that has authorized with the application.",
                                "parameters": [],
                                "responses": {
                                        "200": {
                                                "description": "Profile information for a user",
                                                "schema": {
                                                        "$ref": "#/definitions/Profile"
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/products": {
                        "get": {
                                "tags": [
                                        "Products"
                                ],
                                "summary": "Product Types",
                                "description": "The Products endpoint returns information about the *Uber* products\noffered at a given location. The response includes the display name\nand other details about each product, and lists the products in the\nproper display order.\n",
                                "parameters": [
                                        {
                                                "name": "latitude",
                                                "in": "query",
                                                "description": "Latitude component of location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        },
                                        {
                                                "name": "longitude",
                                                "in": "query",
                                                "description": "Longitude component of location.",
                                                "required": true,
                                                "type": "number",
                                                "format": "double"
                                        }
                                ],
                                "responses": {
                                        "200": {
                                                "description": "An array of products",
                                                "schema": {
                                                        "type": "array",
                                                        "items": {
                                                                "$ref": "#/definitions/Product"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                }
        },
        "definitions": {
                "Product": {
                        "properties": {
                                "product_id": {
                                        "type": "string",
                                        "description": "Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles."
                                },
                                "description": {
                                        "type": "string",
                                        "description": "Description of product."
                                },
                                "display_name": {
                                        "type": "string",
                                        "description": "Display name of product."
                                },
                                "capacity": {
                                        "type": "string",
                                        "description": "Capacity of product. For example, 4 people."
                                },
                                "image": {
                                        "type": "string",
                                        "description": "Image URL representing the product."
                                }
                        }
                },
                "PriceEstimate": {
                        "properties": {
                                "product_id": {
                                        "type": "string",
                                        "description": "Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles"
                                },
                                "currency_code": {
                                        "type": "string",
                                        "description": "[ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code."
                                },
                                "display_name": {
                                        "type": "string",
                                        "description": "Display name of product."
                                },
                                "estimate": {
                                        "type": "string",
                                        "description": "Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or \"Metered\" for TAXI."
                                },
                                "low_estimate": {
                                        "type": "number",
                                        "description": "Lower bound of the estimated price."
                                },
                                "high_estimate": {
                                        "type": "number",
                                        "description": "Upper bound of the estimated price."
                                },
                                "surge_multiplier": {
                                        "type": "number",
                                        "description": "Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier."
                                }
                        }
                },
                "Profile": {
                        "properties": {
                                "first_name": {
                                        "type": "string",
                                        "description": "First name of the Uber user."
                                },
                                "last_name": {
                                        "type": "string",
                                        "description": "Last name of the Uber user."
                                },
                                "email": {
                                        "type": "string",
                                        "description": "Email address of the Uber user"
                                },
                                "picture": {
                                        "type": "string",
                                        "description": "Image URL of the Uber user."
                                },
                                "promo_code": {
                                        "type": "string",
                                        "description": "Promo code of the Uber user."
                                }
                        }
                },
                "Activity": {
                        "properties": {
                                "uuid": {
                                        "type": "string",
                                        "description": "Unique identifier for the activity"
                                }
                        }
                },
                "Activities": {
                        "properties": {
                                "offset": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "Position in pagination."
                                },
                                "limit": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "Number of items to retrieve (100 max)."
                                },
                                "count": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "Total number of items available."
                                },
                                "history": {
                                        "type": "array",
                                        "items": {
                                                "$ref": "#/definitions/Activity"
                                        }
                                }
                        }
                },
                "Error": {
                        "properties": {
                                "code": {
                                        "type": "integer",
                                        "format": "int32"
                                },
                                "message": {
                                        "type": "string"
                                },
                                "fields": {
                                        "type": "string"
                                }
                        }
                }
        }
},
    "app/work.apiary.json": {
        "ast": {
                "_version": "3.0",
                "metadata": [
                        {
                                "name": "FORMAT",
                                "value": "1A"
                        },
                        {
                                "name": "HOST",
                                "value": "http://api.topcoder.com/v3"
                        }
                ],
                "name": "ap-work-microservice",
                "description": "The Work microservice manages work done by the community. \nWork is a general term but currently only represents the `app-project` type. Support\nfor other work types will be added in the future.\n\nWork objects can also be hierarchical via the use of the `parentId` field.\n\n",
                "element": "category",
                "resourceGroups": [
                        {
                                "name": "work",
                                "description": "",
                                "resources": [
                                        {
                                                "element": "resource",
                                                "name": "Work Management",
                                                "description": "All requests are constrained to the user making the request unless otherwise noted.\n\nWork objects have the following common fields:\n\n+ `name`: text string used as a label for the object\n\n+ `parentId`: an optional field used to indicate the parent work object's id\n\n+ `modelType`: specifies the type of work object (currently only \"app-project\")\n\n**App Project**\n\nAn app project is a type of work object that is used to manage work to be done by the\ncommunity in order to build an application. \nAn app project contains the following app project-specific fields:\n\n+ `summary`: text summary of the project\n\n+ `requestType`: what type of work is being requested\n\n+ `competitorApps`: an array of strings representing names of competitor apps that should be used as a reference\n\n+ `usageDescription`: an description of how the app will be used\n\n+ `features`: an object that has the following attributes\n    + `name`: the name of the feature\n    + `description`: a description of the feature\n    + `explanation`: an explanation of the feature\n    + `custom`: whether this is a custom feature or not\n\n+ `status`: indicates the overall status of the project\n\n+ `statusNotes`: can be used to provide more detail about the current status\n\n+ `copilotId`: the user id of the co-pilot assigned to the project\n\n+ `quotedAmount`: a string representing the price of the project\n\n+ `price`: a decimal representing the price of the project\n\n+ `priceCurrency`: the ISO 4217 currency code for the price of the project\n\n+ `tcDirectId`: the id of the topcoder Direct project id that corresponds to the project\n\n",
                                                "uriTemplate": "/work",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Create Work",
                                                                "description": "Creates a new work object. The type of work object is specified with the `modelType` field.\n\n",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"modelType\": \"app-project\",\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"modelType\": \"app-project\",\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45de\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\nThe content returned is the id of the newly created object\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45de\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\nThe content returned is the id of the newly created object\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update Work",
                                                                "description": "Updates an existing work object. The requester must be the owner of the work object.\n\n",
                                                                "method": "PUT",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45dc\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45dc\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Work",
                                                                "description": "Retrieves a specific work object\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d6\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n            \"modifiedBy\": \"40097202\",\n            \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n            \"name\": \"new project001\",\n            \"summary\": \"test summary\\ntesting1234\",\n            \"requestType\": \"Design\",\n            \"ownerId\": \"40097202\",\n            \"version\": 2,\n            \"competitorApps\": [\n                \"comp 1\",\n                \"comp 2\",\n                \"comp 3\"\n            ],\n            \"usageDescription\": \"usage2222\",\n            \"features\": [\n                {\n                    \"name\": \"feature1\",\n                    \"description\": \"desc1\",\n                    \"explanation\": null,\n                    \"custom\": null\n                },\n                {\n                    \"name\": \"feature2\",\n                    \"description\": \"desc2\",\n                    \"explanation\": null,\n                    \"custom\": null\n                }\n            ],\n            \"status\": \"Created\",\n            \"statusNotes\": null,\n            \"copilotId\": \"unassigned\",\n            \"quotedAmount\": null,\n            \"tcDirectId\": null,\n            \"price\": 0,\n            \"priceCurrency\": null,\n            \"parentId\": \"none\"\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d6\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n            \"modifiedBy\": \"40097202\",\n            \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n            \"name\": \"new project001\",\n            \"summary\": \"test summary\\ntesting1234\",\n            \"requestType\": \"Design\",\n            \"ownerId\": \"40097202\",\n            \"version\": 2,\n            \"competitorApps\": [\n                \"comp 1\",\n                \"comp 2\",\n                \"comp 3\"\n            ],\n            \"usageDescription\": \"usage2222\",\n            \"features\": [\n                {\n                    \"name\": \"feature1\",\n                    \"description\": \"desc1\",\n                    \"explanation\": null,\n                    \"custom\": null\n                },\n                {\n                    \"name\": \"feature2\",\n                    \"description\": \"desc2\",\n                    \"explanation\": null,\n                    \"custom\": null\n                }\n            ],\n            \"status\": \"Created\",\n            \"statusNotes\": null,\n            \"copilotId\": \"unassigned\",\n            \"quotedAmount\": null,\n            \"tcDirectId\": null,\n            \"price\": 0,\n            \"priceCurrency\": null,\n            \"parentId\": \"none\"\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Work",
                                                                "description": "Retrieves all work objects owned by the user.\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Query Work",
                                                                "description": "Queries for work objects. NOTE: the `filter` parameter value must be URL encoded since it\nis a URL parameter.\n\nSome useful queries:\n\n+ Find all root app-projects (modelType = app-project AND parentId = \"none\"): `modelType%3Dapp-project%26parentId%3Dnone` \n\n    *note the value `none` is used to indicate no parent*\n\n+ Find all children of a given object (parentId = \\<id\\>): `parentId%3D1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56`\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filterParam",
                                                                                "description": "query filter",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "modelType%3Dapp-project%26parentId%3Dnone",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work?filter={filterParam}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Retrieve work events",
                                                                "description": "Retrieves an event timeline for a work object. \nCurrently events are generated only for `app-project` work objects.\n\nA work event has the following attributes:\n\n+ `workId`: Id of the work object the events are associated with\n\n+ `eventType`: Currently the only type is `timeline`\n\n+ `eventSubType`: a sub-categorization of the type of event.\n\n+ `sourceObjectType`: the type of object contained in the `sourceObjectContent` attribute. The current types are `app-project` and `challengedata`\n\n+ `sourceObjectContent`: the object is an `app-project` or `challengedata`\n\n\n**challengedata**\n\nA challengedata object contains information about a challenge state transition. It\nhas the following attributes:\n\n+ `challengeId`: Id of the topcoder challenge\n\n+ `tcDirectId`: Id of the topcoder Direct project associated with the challenge\n\n+ `phase`: The phase that the challenge is transitioning **from**. Current values are `Registration` and `Submission`\n\n+ `registrants`: An array of objects with a `handle` attribute. The handle is the topcoder user handle\n\n+ `submissions`: An array of objects with a `submissionId` attribute. The submissionId is the id of the topcoder submission\n\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}/events"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1436460345901-e39b039d-d3e0-450d-8c89-ff0d3a5fdf50\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"created\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 1,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"test-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436460443827-65e55dfe-4bf7-4df3-9e82-1b3c48ecee2f\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"copilot-assigned\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:47:23.709Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 3,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"new-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n                \"modifiedBy\": null,\n                \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": null,\n                \"ownerId\": null,\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"challengedata\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"Registration\",\n                \"sourceObjectContent\": {\n                    \"challengeId\": \"30049280\",\n                    \"tcDirectId\": \"8646\",\n                    \"registrants\": [\n                        {\n                            \"handle\": \"reguser\"\n                        }\n                    ],\n                    \"submissions\": null,\n                    \"phase\": \"Registration\",\n                    \"phaseStatus\": \"Open\",\n                    \"userId\": null,\n                    \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n                },\n                \"userId\": null\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1436460345901-e39b039d-d3e0-450d-8c89-ff0d3a5fdf50\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"created\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 1,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"test-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436460443827-65e55dfe-4bf7-4df3-9e82-1b3c48ecee2f\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"copilot-assigned\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:47:23.709Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 3,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"new-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n                \"modifiedBy\": null,\n                \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": null,\n                \"ownerId\": null,\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"challengedata\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"Registration\",\n                \"sourceObjectContent\": {\n                    \"challengeId\": \"30049280\",\n                    \"tcDirectId\": \"8646\",\n                    \"registrants\": [\n                        {\n                            \"handle\": \"reguser\"\n                        }\n                    ],\n                    \"submissions\": null,\n                    \"phase\": \"Registration\",\n                    \"phaseStatus\": \"Open\",\n                    \"userId\": null,\n                    \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n                },\n                \"userId\": null\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Retrieve a specific work event",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        },
                                                                        {
                                                                                "name": "eventId",
                                                                                "description": "the id of the event",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}/events/{eventId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff1\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n            \"modifiedBy\": null,\n            \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": null,\n            \"ownerId\": null,\n            \"version\": 1,\n            \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n            \"sourceObjectType\": \"challengedata\",\n            \"eventType\": \"timeline\",\n            \"eventSubType\": \"Registration\",\n            \"sourceObjectContent\": {\n                \"challengeId\": \"30049280\",\n                \"tcDirectId\": \"8646\",\n                \"registrants\": [\n                    {\n                        \"handle\": \"reguser\"\n                    }\n                ],\n                \"submissions\": null,\n                \"phase\": \"Registration\",\n                \"phaseStatus\": \"Open\",\n                \"userId\": null,\n                \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n            },\n            \"userId\": null\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff1\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n            \"modifiedBy\": null,\n            \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": null,\n            \"ownerId\": null,\n            \"version\": 1,\n            \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n            \"sourceObjectType\": \"challengedata\",\n            \"eventType\": \"timeline\",\n            \"eventSubType\": \"Registration\",\n            \"sourceObjectContent\": {\n                \"challengeId\": \"30049280\",\n                \"tcDirectId\": \"8646\",\n                \"registrants\": [\n                    {\n                        \"handle\": \"reguser\"\n                    }\n                ],\n                \"submissions\": null,\n                \"phase\": \"Registration\",\n                \"phaseStatus\": \"Open\",\n                \"userId\": null,\n                \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n            },\n            \"userId\": null\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        },
                        {
                                "name": "work files",
                                "description": "",
                                "resources": [
                                        {
                                                "element": "resource",
                                                "name": "Work Requests File Management",
                                                "description": "",
                                                "uriTemplate": "/work-files",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Create Work Request File Meta Data",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"fileType\": \"image/jpeg\",\n        \"fileSize\": \"1234K\",\n        \"fileHash\": \"123456\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"fileType\": \"image/jpeg\",\n        \"fileSize\": \"1234K\",\n        \"fileHash\": \"123456\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-8000\",\n     \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435212754776-5226aab3-9494-4bee-ac16-beb5e9f51960\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:12:34.780Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:12:34.780Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-8000\",\n     \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435212754776-5226aab3-9494-4bee-ac16-beb5e9f51960\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:12:34.780Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:12:34.780Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "409",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        },
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Delete Work Request File Meta Data",
                                                                "description": "",
                                                                "method": "DELETE",
                                                                "parameters": [
                                                                        {
                                                                                "name": "fileId",
                                                                                "description": "",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "fileId",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/{fileId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff3\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435213745854-c095fd3f-0d8c-471d-b37b-f477ab0497b8\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:29:05.861Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:29:05.861Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff3\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435213745854-c095fd3f-0d8c-471d-b37b-f477ab0497b8\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:29:05.861Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:29:05.861Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        },
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff2\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff2\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Pre Signed S3 Upload URL",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/uploadurl"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": null,\n            \"modifiedBy\": null,\n            \"modifiedAt\": null,\n            \"createdBy\": null,\n            \"createdAt\": null,\n            \"workId\": \"12345\",\n            \"ownerId\": null,\n            \"userId\": \"40135374\",\n            \"fileName\": \"test.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/test.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/test.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435216617&Signature=aFjTrsFicz%2FLzzyIqCGOfTKNdCw%3D\",\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": null,\n            \"modifiedBy\": null,\n            \"modifiedAt\": null,\n            \"createdBy\": null,\n            \"createdAt\": null,\n            \"workId\": \"12345\",\n            \"ownerId\": null,\n            \"userId\": \"40135374\",\n            \"fileName\": \"test.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/test.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/test.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435216617&Signature=aFjTrsFicz%2FLzzyIqCGOfTKNdCw%3D\",\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "409",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"692638e7:14e29982a88:-7ff9\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"692638e7:14e29982a88:-7ff9\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Pre Signed S3 Download URL",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/downloadurl"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg,\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg,\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get File By Id",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "fileId",
                                                                                "description": "",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "fileID",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/{fileId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Files of Work Request",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filter",
                                                                                "description": "+ workId - work Id\n",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "workId=fieldValue",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files?filter=workId%3D12345"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Files of Work Request for a particular assetType",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filter",
                                                                                "description": "+ workId - work Id\n\n+ assetType - asset type\n",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "workId=fieldValue",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/assets?filter=workId%3D12345%26assetType%3Dspecs"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}    \n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}    \n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ],
                "content": [
                        {
                                "element": "category",
                                "attributes": {
                                        "name": "work"
                                },
                                "content": [
                                        {
                                                "element": "resource",
                                                "name": "Work Management",
                                                "description": "All requests are constrained to the user making the request unless otherwise noted.\n\nWork objects have the following common fields:\n\n+ `name`: text string used as a label for the object\n\n+ `parentId`: an optional field used to indicate the parent work object's id\n\n+ `modelType`: specifies the type of work object (currently only \"app-project\")\n\n**App Project**\n\nAn app project is a type of work object that is used to manage work to be done by the\ncommunity in order to build an application. \nAn app project contains the following app project-specific fields:\n\n+ `summary`: text summary of the project\n\n+ `requestType`: what type of work is being requested\n\n+ `competitorApps`: an array of strings representing names of competitor apps that should be used as a reference\n\n+ `usageDescription`: an description of how the app will be used\n\n+ `features`: an object that has the following attributes\n    + `name`: the name of the feature\n    + `description`: a description of the feature\n    + `explanation`: an explanation of the feature\n    + `custom`: whether this is a custom feature or not\n\n+ `status`: indicates the overall status of the project\n\n+ `statusNotes`: can be used to provide more detail about the current status\n\n+ `copilotId`: the user id of the co-pilot assigned to the project\n\n+ `quotedAmount`: a string representing the price of the project\n\n+ `price`: a decimal representing the price of the project\n\n+ `priceCurrency`: the ISO 4217 currency code for the price of the project\n\n+ `tcDirectId`: the id of the topcoder Direct project id that corresponds to the project\n\n",
                                                "uriTemplate": "/work",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Create Work",
                                                                "description": "Creates a new work object. The type of work object is specified with the `modelType` field.\n\n",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"modelType\": \"app-project\",\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"modelType\": \"app-project\",\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45de\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\nThe content returned is the id of the newly created object\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45de\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\nThe content returned is the id of the newly created object\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update Work",
                                                                "description": "Updates an existing work object. The requester must be the owner of the work object.\n\n",
                                                                "method": "PUT",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45dc\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45dc\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Work",
                                                                "description": "Retrieves a specific work object\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d6\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n            \"modifiedBy\": \"40097202\",\n            \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n            \"name\": \"new project001\",\n            \"summary\": \"test summary\\ntesting1234\",\n            \"requestType\": \"Design\",\n            \"ownerId\": \"40097202\",\n            \"version\": 2,\n            \"competitorApps\": [\n                \"comp 1\",\n                \"comp 2\",\n                \"comp 3\"\n            ],\n            \"usageDescription\": \"usage2222\",\n            \"features\": [\n                {\n                    \"name\": \"feature1\",\n                    \"description\": \"desc1\",\n                    \"explanation\": null,\n                    \"custom\": null\n                },\n                {\n                    \"name\": \"feature2\",\n                    \"description\": \"desc2\",\n                    \"explanation\": null,\n                    \"custom\": null\n                }\n            ],\n            \"status\": \"Created\",\n            \"statusNotes\": null,\n            \"copilotId\": \"unassigned\",\n            \"quotedAmount\": null,\n            \"tcDirectId\": null,\n            \"price\": 0,\n            \"priceCurrency\": null,\n            \"parentId\": \"none\"\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d6\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n            \"modifiedBy\": \"40097202\",\n            \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n            \"name\": \"new project001\",\n            \"summary\": \"test summary\\ntesting1234\",\n            \"requestType\": \"Design\",\n            \"ownerId\": \"40097202\",\n            \"version\": 2,\n            \"competitorApps\": [\n                \"comp 1\",\n                \"comp 2\",\n                \"comp 3\"\n            ],\n            \"usageDescription\": \"usage2222\",\n            \"features\": [\n                {\n                    \"name\": \"feature1\",\n                    \"description\": \"desc1\",\n                    \"explanation\": null,\n                    \"custom\": null\n                },\n                {\n                    \"name\": \"feature2\",\n                    \"description\": \"desc2\",\n                    \"explanation\": null,\n                    \"custom\": null\n                }\n            ],\n            \"status\": \"Created\",\n            \"statusNotes\": null,\n            \"copilotId\": \"unassigned\",\n            \"quotedAmount\": null,\n            \"tcDirectId\": null,\n            \"price\": 0,\n            \"priceCurrency\": null,\n            \"parentId\": \"none\"\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Work",
                                                                "description": "Retrieves all work objects owned by the user.\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Query Work",
                                                                "description": "Queries for work objects. NOTE: the `filter` parameter value must be URL encoded since it\nis a URL parameter.\n\nSome useful queries:\n\n+ Find all root app-projects (modelType = app-project AND parentId = \"none\"): `modelType%3Dapp-project%26parentId%3Dnone` \n\n    *note the value `none` is used to indicate no parent*\n\n+ Find all children of a given object (parentId = \\<id\\>): `parentId%3D1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56`\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filterParam",
                                                                                "description": "query filter",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "modelType%3Dapp-project%26parentId%3Dnone",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work?filter={filterParam}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Retrieve work events",
                                                                "description": "Retrieves an event timeline for a work object. \nCurrently events are generated only for `app-project` work objects.\n\nA work event has the following attributes:\n\n+ `workId`: Id of the work object the events are associated with\n\n+ `eventType`: Currently the only type is `timeline`\n\n+ `eventSubType`: a sub-categorization of the type of event.\n\n+ `sourceObjectType`: the type of object contained in the `sourceObjectContent` attribute. The current types are `app-project` and `challengedata`\n\n+ `sourceObjectContent`: the object is an `app-project` or `challengedata`\n\n\n**challengedata**\n\nA challengedata object contains information about a challenge state transition. It\nhas the following attributes:\n\n+ `challengeId`: Id of the topcoder challenge\n\n+ `tcDirectId`: Id of the topcoder Direct project associated with the challenge\n\n+ `phase`: The phase that the challenge is transitioning **from**. Current values are `Registration` and `Submission`\n\n+ `registrants`: An array of objects with a `handle` attribute. The handle is the topcoder user handle\n\n+ `submissions`: An array of objects with a `submissionId` attribute. The submissionId is the id of the topcoder submission\n\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}/events"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1436460345901-e39b039d-d3e0-450d-8c89-ff0d3a5fdf50\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"created\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 1,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"test-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436460443827-65e55dfe-4bf7-4df3-9e82-1b3c48ecee2f\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"copilot-assigned\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:47:23.709Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 3,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"new-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n                \"modifiedBy\": null,\n                \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": null,\n                \"ownerId\": null,\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"challengedata\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"Registration\",\n                \"sourceObjectContent\": {\n                    \"challengeId\": \"30049280\",\n                    \"tcDirectId\": \"8646\",\n                    \"registrants\": [\n                        {\n                            \"handle\": \"reguser\"\n                        }\n                    ],\n                    \"submissions\": null,\n                    \"phase\": \"Registration\",\n                    \"phaseStatus\": \"Open\",\n                    \"userId\": null,\n                    \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n                },\n                \"userId\": null\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1436460345901-e39b039d-d3e0-450d-8c89-ff0d3a5fdf50\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"created\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 1,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"test-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436460443827-65e55dfe-4bf7-4df3-9e82-1b3c48ecee2f\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"copilot-assigned\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:47:23.709Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 3,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"new-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n                \"modifiedBy\": null,\n                \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": null,\n                \"ownerId\": null,\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"challengedata\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"Registration\",\n                \"sourceObjectContent\": {\n                    \"challengeId\": \"30049280\",\n                    \"tcDirectId\": \"8646\",\n                    \"registrants\": [\n                        {\n                            \"handle\": \"reguser\"\n                        }\n                    ],\n                    \"submissions\": null,\n                    \"phase\": \"Registration\",\n                    \"phaseStatus\": \"Open\",\n                    \"userId\": null,\n                    \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n                },\n                \"userId\": null\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Retrieve a specific work event",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        },
                                                                        {
                                                                                "name": "eventId",
                                                                                "description": "the id of the event",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}/events/{eventId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff1\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n            \"modifiedBy\": null,\n            \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": null,\n            \"ownerId\": null,\n            \"version\": 1,\n            \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n            \"sourceObjectType\": \"challengedata\",\n            \"eventType\": \"timeline\",\n            \"eventSubType\": \"Registration\",\n            \"sourceObjectContent\": {\n                \"challengeId\": \"30049280\",\n                \"tcDirectId\": \"8646\",\n                \"registrants\": [\n                    {\n                        \"handle\": \"reguser\"\n                    }\n                ],\n                \"submissions\": null,\n                \"phase\": \"Registration\",\n                \"phaseStatus\": \"Open\",\n                \"userId\": null,\n                \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n            },\n            \"userId\": null\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff1\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n            \"modifiedBy\": null,\n            \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": null,\n            \"ownerId\": null,\n            \"version\": 1,\n            \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n            \"sourceObjectType\": \"challengedata\",\n            \"eventType\": \"timeline\",\n            \"eventSubType\": \"Registration\",\n            \"sourceObjectContent\": {\n                \"challengeId\": \"30049280\",\n                \"tcDirectId\": \"8646\",\n                \"registrants\": [\n                    {\n                        \"handle\": \"reguser\"\n                    }\n                ],\n                \"submissions\": null,\n                \"phase\": \"Registration\",\n                \"phaseStatus\": \"Open\",\n                \"userId\": null,\n                \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n            },\n            \"userId\": null\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        },
                        {
                                "element": "category",
                                "attributes": {
                                        "name": "work files"
                                },
                                "content": [
                                        {
                                                "element": "resource",
                                                "name": "Work Requests File Management",
                                                "description": "",
                                                "uriTemplate": "/work-files",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Create Work Request File Meta Data",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"fileType\": \"image/jpeg\",\n        \"fileSize\": \"1234K\",\n        \"fileHash\": \"123456\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"fileType\": \"image/jpeg\",\n        \"fileSize\": \"1234K\",\n        \"fileHash\": \"123456\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-8000\",\n     \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435212754776-5226aab3-9494-4bee-ac16-beb5e9f51960\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:12:34.780Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:12:34.780Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-8000\",\n     \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435212754776-5226aab3-9494-4bee-ac16-beb5e9f51960\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:12:34.780Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:12:34.780Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "409",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        },
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Delete Work Request File Meta Data",
                                                                "description": "",
                                                                "method": "DELETE",
                                                                "parameters": [
                                                                        {
                                                                                "name": "fileId",
                                                                                "description": "",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "fileId",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/{fileId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff3\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435213745854-c095fd3f-0d8c-471d-b37b-f477ab0497b8\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:29:05.861Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:29:05.861Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff3\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435213745854-c095fd3f-0d8c-471d-b37b-f477ab0497b8\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:29:05.861Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:29:05.861Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        },
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff2\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff2\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Pre Signed S3 Upload URL",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/uploadurl"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": null,\n            \"modifiedBy\": null,\n            \"modifiedAt\": null,\n            \"createdBy\": null,\n            \"createdAt\": null,\n            \"workId\": \"12345\",\n            \"ownerId\": null,\n            \"userId\": \"40135374\",\n            \"fileName\": \"test.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/test.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/test.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435216617&Signature=aFjTrsFicz%2FLzzyIqCGOfTKNdCw%3D\",\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": null,\n            \"modifiedBy\": null,\n            \"modifiedAt\": null,\n            \"createdBy\": null,\n            \"createdAt\": null,\n            \"workId\": \"12345\",\n            \"ownerId\": null,\n            \"userId\": \"40135374\",\n            \"fileName\": \"test.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/test.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/test.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435216617&Signature=aFjTrsFicz%2FLzzyIqCGOfTKNdCw%3D\",\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "409",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"692638e7:14e29982a88:-7ff9\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"692638e7:14e29982a88:-7ff9\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Pre Signed S3 Download URL",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/downloadurl"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg,\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg,\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get File By Id",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "fileId",
                                                                                "description": "",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "fileID",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/{fileId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Files of Work Request",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filter",
                                                                                "description": "+ workId - work Id\n",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "workId=fieldValue",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files?filter=workId%3D12345"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Files of Work Request for a particular assetType",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filter",
                                                                                "description": "+ workId - work Id\n\n+ assetType - asset type\n",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "workId=fieldValue",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/assets?filter=workId%3D12345%26assetType%3Dspecs"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}    \n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}    \n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ]
        },
        "warnings": [],
        "sourcemap": null
}
};