import { IUser } from './models';

export interface IContext {
   authUser?: IUser;
}

export type TGetServerSidePropsReturnType = {
   props: object;
};
