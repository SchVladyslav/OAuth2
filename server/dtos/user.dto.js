module.exports = class UserDto {
    email;
    id;
   
    constructor(model) {
        this.email = model.email;
        this.id = model._id; // _id - cause MongoDB adds _ for marking uniqness
    }
}