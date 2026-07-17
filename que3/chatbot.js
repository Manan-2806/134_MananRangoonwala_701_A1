function getResponse(question) {

    if (question == "Hello") {
        return "Welcome to NodeJS.";
    }
    else if (question == "Course") {
        return "We Offer BCA, BSc.IT, MCA and MSc.IT.";
    }
    else if (question == "Fees") {
        return "Please go to the college office for fees details.";
    }
    else {
        return "Sorry";
    }
}

module.exports = getResponse;