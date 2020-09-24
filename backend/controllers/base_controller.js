class BaseControllerc {
    constructor() {

    }

    error(err) {
        const status = err.statusCode || err.status;

        const statusCode = status || 400;

        if (err.message.includes("Cannot add or update a child row: a foreign key constraint fails")) {
            return {
                isSuccess: false,
                data: `${err.table} that you select is missing add it through your web app or contact support`,
                statusCode: 500
            };
        }

        return {
            isSuccess: false,
            data: err.message,
            statusCode: statusCode
        };
    }

    created(data) {
        return {
            isSuccess: true,
            data: data,
            statusCode: 201
        }
    }

    ok(data) {
        return {
            isSuccess: true,
            data: data,
            statusCode: 200
        }
    }

    unauthorized(data) {
        return {
            isSuccess: false,
            data: data,
            statusCode: 401
        }
    }

    noContent() {
        return {
            isSuccess: true,
            statusCode: 204
        }
    }

    notFound(data) {
        return {
            isSuccess: false,
            data: data,
            statusCode: 404
        }
    }
}

module.exports = BaseControllerc;