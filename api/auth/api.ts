import axios from "axios";

const BASE_URL = "https://dev-api.differ.chat/graphql";

export default function () {
  return {
    requestSMSCode: async (phoneNumber: string) => {
      const { data, status, statusText } = await axios({
        url: BASE_URL,
        method: "POST",
        data: {
          query: `mutation requestSMSCode($phone: String!) {
            requestSMSCode(phone: $phone)
          }`,
          variables: {
            phone: phoneNumber,
          },
        },
      });
      return data;
    },
    verifySMSCode: async (phoneNumber: string, code: string) => {
      const { data, status, statusText } = await axios({
        url: BASE_URL,
        method: "POST",
        data: {
          query: `mutation verifySMSCode($phone: String!, $code: String!) {
            verifySMSCode(phone: $phone, code: $code) {
              token
            }
          }
        `,
          variables: { code: code, phone: phoneNumber },
        },
      });
      // console.log(data);
      return data;
    },
  };
}
