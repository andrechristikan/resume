import { Request, Response, NextFunction } from 'express';

class TestController {
    public async test(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const response: APIResponse = new APIResponse(
            Enum.HttpSuccessStatusCode.OK,
            language('test.ok')
        );
        res.status(response.code).json(response);
    }
}

export default TestController;
