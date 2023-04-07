/**
 * EcommerceBackend
 * 1.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from 'oazapfts/lib/runtime';
import * as QS from 'oazapfts/lib/runtime/query';
export const defaults: Oazapfts.RequestOpts = {
  baseUrl: 'http://localhost:5087/',
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type Product = {
  id?: number | null;
  name?: string | null;
  description?: string | null;
  size?: number;
  originalPrice?: number;
  price?: number;
  designer?: string | null;
  imageUrl?: string | null;
};
export type User = {
  id?: number | null;
  username?: string | null;
  password?: string | null;
  joinDate?: string | null;
  profileImageUrl: string;
};
export type UserDto = {
  id?: number | null;
  username?: string | null;
  joinDate?: string;
  profileImageUrl?: string | null;
};
export type LoginResponse = {
  accessToken?: string | null;
  user?: UserDto;
};
export function postApiProducts(product?: Product, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Product;
      }
    | {
        status: 400;
        data: string;
      }
    | {
        status: 500;
      }
  >(
    '/api/Products',
    oazapfts.json({
      ...opts,
      method: 'POST',
      body: product,
    }),
  );
}
export function getApiProducts(opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Product[];
      }
    | {
        status: 500;
      }
  >('/api/Products', {
    ...opts,
  });
}
export function getApiProductsById(id: number, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Product;
      }
    | {
        status: 404;
        data: string;
      }
    | {
        status: 500;
      }
  >(`/api/Products/${id}`, {
    ...opts,
  });
}
export function postApiUsers(user?: User, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: UserDto;
      }
    | {
        status: 400;
        data: string;
      }
    | {
        status: 500;
      }
  >(
    '/api/Users',
    oazapfts.json({
      ...opts,
      method: 'POST',
      body: user,
    }),
  );
}
export function getApiUsersByUserId(userId: number, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: UserDto;
      }
    | {
        status: 404;
        data: string;
      }
    | {
        status: 500;
      }
  >(`/api/Users/${userId}`, {
    ...opts,
  });
}
export function postApiUsersLogin(
  {
    username,
    password,
  }: {
    username?: string;
    password?: string;
  } = {},
  opts?: Oazapfts.RequestOpts,
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: LoginResponse;
      }
    | {
        status: 401;
        data: string;
      }
    | {
        status: 500;
      }
  >(
    `/api/Users/login${QS.query(
      QS.form({
        username,
        password,
      }),
    )}`,
    {
      ...opts,
      method: 'POST',
    },
  );
}
