import axios from '.';
import type { IUser } from 'interface/models';
import type { IGetAll, IMessage } from 'interface';

interface ICreateUser
   extends Omit<IUser, 'id' | 'provider' | 'imagename' | 'image'> {
   age: number;
   bloodGroup: string;
}

export const getUsers = async (): Promise<IGetAll<IUser>> => {
   const res = await axios.get('/user/');

   return res.data?.data;
};

export const createUser = async (data: ICreateUser): Promise<IMessage> => {
   const res = await axios.post('/user/', data);

   return res.data;
};
