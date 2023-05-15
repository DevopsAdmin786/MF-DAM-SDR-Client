// export interface UserDetailsModel {
//   id: any;
//   userName: any;
//   userEmail: any;
//   userDp: any;
// }

export interface UserDetailsModel {
  email: any;
  email_verified: any;
  family_name: any;
  given_name: any;
  name: any;
  nickname: any;
  picture: any;
  sub: any;
  updated_at: any;
}


export const initValue = {
  email: null,
  email_verified: null,
  family_name: null,
  given_name: null,
  name: null,
  nickname: null,
  picture: "https://avatars.dicebear.com/v2/male/ad75a8ed8959188d0bed41ba35b27db9.svg",
  sub: null,
  updated_at: null
};
