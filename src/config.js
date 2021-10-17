const dataTemplate = {
    header: {
            urlLogo: "https://platzi.com/favicon.ico",
            apiName: "Api",
    },
    components: [
        {
            id: 1,
            name: "auth",
            description: null,
            actions: [
                {
                    name: "login",
                    path: "/auth/login/",
                    description: 'The request body should be a "application/json" encoded object, containing the following items.',
                    method: "post",
                    table: [
                        {
                            parameter: {
                                required: true,
                                value: "email"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: true,
                                value: "password"
                            },
                            description: ""
                        }
                    ]
                },
                {
                    name: "me",
                    path: "/auth/me/",
                    description: 'User view set.',
                    method: "get",
                    table: null,
                },
                {
                    name: "signup",
                    path: "/auth/signup/",
                    description: 'The request body should be a "application/json" encoded object, containing the following items.',
                    method: "post",
                    table: [
                        {
                            parameter: {
                                required: true,
                                value: "email"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: true,
                                value: "username"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: true,
                                value: "firs_name"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: true,
                                value: "last_name"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: true,
                                value: "password"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: true,
                                value: "password_confirmation"
                            },
                            description: ""
                        },
                    ]
                },
                {
                    name: "verify",
                    path: "/auth/verify/",
                    description: 'The request body should be a "application/json" encoded object, containing the following items.',
                    method: "post",
                    table: [
                        {
                            parameter: {
                                required: true,
                                value: "token"
                            },
                            description: ""
                        }
                    ],
                },
                {
                    name: "read",
                    path: "/auth/{username}/",
                    description: 'The following parameters should be included in the URL path.',
                    method: "get",
                    table: [
                        {
                            parameter: {
                                required: true,
                                value: "username"
                            },
                            description: "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
                        }
                    ],
                },
            ]
        },
        {
            id: 2,
            name: "feed",
            description: null,
            actions: [
                {
                    name: "home > list",
                    path: "/feed/home/",
                    description: 'The following parameters should be included as part of a URL query string.',
                    method: "get",
                    table: [
                        {
                            parameter: {
                                require: false,
                                value: "limit"
                            },
                            description: "Number of results to return per page."
                        },
                        {
                            parameter: {
                                require: false,
                                value: "offset"
                            },
                            description: "The initial index from which to return the results."
                        }
                    ]
                },
                {
                    name: "profile > list",
                    path: "/feed/profile/",
                    description: 'The following parameters should be included as part of a URL query string.',
                    method: "get",
                    table: [
                        {
                            parameter: {
                                require: false,
                                value: "limit"
                            },
                            description: "Number of results to return per page."
                        },
                        {
                            parameter: {
                                require: false,
                                value: "offset"
                            },
                            description: "The initial index from which to return the results."
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "tweets",
            description: null,
            actions: [
                {
                    name: "create",
                    path: "/tweets/",
                    description: 'The request body should be a "application/json" encoded object, containing the following items.',
                    method: "post",
                    table: [
                        {
                            parameter: {
                                required: false,
                                value: "content"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: false,
                                value: "image"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: false,
                                value: "retweet"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: false,
                                value: "parent"
                            },
                            description: ""
                        }
                    ]
                },
                {
                    name: "like",
                    path: "/tweets/like/",
                    description: 'The request body should be a "application/json" encoded object, containing the following items.',
                    method: "post",
                    table: [
                        {
                            parameter: {
                                required: true,
                                value: "tweet"
                            },
                            description: ""
                        }
                    ]
                },
                {
                    name: "retweet",
                    path: "/tweets/retweet/",
                    description: 'The request body should be a "application/json" encoded object, containing the following items.',
                    method: "post",
                    table: [
                        {
                            parameter: {
                                required: true,
                                value: "parent"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: false,
                                value: "content"
                            },
                            description: ""
                        },
                        {
                            parameter: {
                                required: false,
                                value: "image"
                            },
                            description: ""
                        }
                    ]
                },
                {
                    name: "read",
                    path: "/tweets/{id}/",
                    description: 'The following parameters should be included in the URL path.',
                    method: "get",
                    table: [
                        {
                            parameter: {
                                required: true,
                                value: "id"
                            },
                            description: "A UUID string identifying this tweet."
                        }
                    ]
                },
                {
                    name: "delete",
                    path: "/tweets/{id}/",
                    description: 'The following parameters should be included in the URL path.',
                    method: "delete",
                    table: [
                        {
                            parameter: {
                                required: true,
                                value: "id"
                            },
                            description: "A UUID string identifying this tweet."
                        }
                    ]
                },
            ]
        },
    ]
}

export default dataTemplate;