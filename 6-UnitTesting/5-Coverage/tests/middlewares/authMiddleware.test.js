const jwt = require('jsonwebtoken');
const { validateToken } = require('../../src/middlewares/authMiddleware'); 
const JWT_KEY = process.env.JWT_KEY;

jest.mock('jsonwebtoken');


describe('isAuthorized Middleware', () => {
    let req, res, next;
    beforeEach(() => {
        req = {headers:{}};
        next = jest.fn()
        res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        }
    });

    it('should return 400 if token is missing', () => {
        validateToken(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledTimes(1);
        expect(res.send).toHaveBeenCalledWith({ message: "Invalid Token" });
        expect(next).not.toHaveBeenCalled();
    });    

    it('should return 401 if token is invalid', () => {
        req.headers.authorization = "invalid.token";

        jwt.verify.mockImplementation(() => {
            throw new Error("Invalid Token");
        });

        validateToken(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.send).toHaveBeenCalledWith({ message: "Invalid User" });
        expect(next).not.toHaveBeenCalled();
    });

    it('should call next and set req.decodedToken if token is valid', () => {
        req.headers.authorization = "valid.token";
        const decodedToken = { userId: "12345", role: "user" };

        jwt.verify.mockReturnValue(decodedToken);

        validateToken(req, res, next);

        expect(jwt.verify).toHaveBeenCalledWith("valid.token", process.env.JWT_SECRET);
        expect(req.decodedToken).toEqual(decodedToken);
        expect(next).toHaveBeenCalled();
    });
}); 



