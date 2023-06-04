import { IUser } from './models';

export interface IContext {
   authUser?: IUser;
}

export type TGetServerSidePropsReturnType = {
   props: object;
};

export interface IGetAll<T> {
   result: T[];
   currentPage: number;
   totalPage: number;
   count: number;
}

export interface IMessage {
   message: string;
}
