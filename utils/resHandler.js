exports.errorHandler = (res, statusCode = 500, errMessage = 'Internal server error') => {
    console.log('wtf ',errMessage)
    if (errMessage.name === "ValidationError") {
        errMessage = errMessage.message;
        statusCode = 400
    } else if (errMessage.name === "MongoError") {
        if (errMessage.keyValue.email) {
            errMessage = "Email allready exist";
            statusCode = 400

        } else {
            errMessage = errMessage.errmsg
            statusCode = 400

        }
    } else {
        statusCode = statusCode,
            errMessage = errMessage
    }
    res.status(statusCode).json({
        message: `${errMessage}`,
        statusCode: statusCode
    })
    console.log('wtf ',errMessage)

}

exports.successHandler = (res, data) => {
    res.status(200).json({
        messgae: "Success",
        data: data,
        statusCode: 200
    })
}

