import { JsonController, Get, Post, Put, Delete, Req, Res } from 'routing-controllers';
import { Response as ExResponse, Request as ExRequest } from 'express';
import { UserModel } from './user.model';

@JsonController('/users')
export default class UserController {
  @Get('/')
  async getAllUsers(@Req() req: ExRequest, @Res() res: ExResponse): Promise<ExResponse> {
    try {
      const users = await UserModel.find();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  @Post('/')
  async createUser(@Req() req: ExRequest, @Res() res: ExResponse): Promise<ExResponse> {
    try {
      const { name, email } = req.body;
      const user = new UserModel({ name, email });
      await user.save();
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  @Put('/:id')
  async updateUser(
    @Req() req: ExRequest,
    @Res() res: ExResponse
  ): Promise<ExResponse> {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const user = await UserModel.findByIdAndUpdate(id, { name, email }, { new: true });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  @Delete('/:id')
  async deleteUser(
    @Req() req: ExRequest,
    @Res() res: ExResponse
  ): Promise<ExResponse> {
    try {
      const { id } = req.params;
      const user = await UserModel.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}
