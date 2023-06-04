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

export interface IQueryParamaters {
   pagination?: boolean;
   page?: number;
   size?: number;
   sort?: Array<string>;
}

export interface IMessage {
   message: string;
}

declare global {
   type Get<T, V> = (args: T) => Promise<V>;

   type GetAll<T, V> = (args: T) => Promise<IGetAll<V>>;

   type Post<T> = (args: T) => Promise<IMessage>;

   type Patch<T> = (args: T) => Promise<IMessage>;

   type Delete<T> = (args: T) => Promise<IMessage>;
}
