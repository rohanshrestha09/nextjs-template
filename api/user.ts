import axios from '.';
import type { IUser } from 'interface/models';
import type { IQueryParamaters } from 'interface';

interface ICreateUser
   extends Omit<IUser, 'id' | 'provider' | 'imagename' | 'image'> {
   age: number;
   bloodGroup: string;
}

export const getUser: Get<number, IUser> = async (id) => {
   const res = await axios.get(`/user/${id}`);

   return res.data?.data;
};

export const getUsers: GetAll<IQueryParamaters, IUser> = async ({
   pagination = true,
   page = 1,
   size = 20,
   sort = [],
}) => {
   const res = await axios.get(
      `/user/?pagination=${pagination}&page=${page}&size=${size}&sort=${sort}`
   );

   return res.data?.data;
};

export const createUser: Post<ICreateUser> = async (data) => {
   const res = await axios.post('/user/', data);

   return res.data;
};

export const updateUser: Patch<ICreateUser> = async (data) => {
   const res = await axios.patch('/user/', data);

   return res.data;
};
