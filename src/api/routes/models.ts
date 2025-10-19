import _ from 'lodash';

export default {

    prefix: '/v1',

    get: {
        '/models': async () => {
            return {
                "data": [
                    {
                        "id": "GLM-4.6",
                        "object": "model",
                        "owned_by": "glm-free-api"
                    },
                    {
                        "id": "GLM-4.5V",
                        "object": "model",
                        "owned_by": "glm-free-api"
                    },
                    {
                        "id": "GLM-4.5",
                        "object": "model",
                        "owned_by": "glm-free-api"
                    },
                    {
                        "id": "GLM-4.6-SEARCH",
                        "object": "model",
                        "owned_by": "glm-free-api"
                    },
                    {
                        "id": "GLM-4.6-ADVANCED-SEARCH",
                        "object": "model",
                        "owned_by": "glm-free-api"
                    },
                    {
                        "id": "GLM-4.6-NOTHINKING",
                        "object": "model",
                        "owned_by": "glm-free-api"
                    }
                ]
            };
        }

    }
}
