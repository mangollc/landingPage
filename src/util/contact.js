import { apiRequestExternal } from "./util.js";

const endpoint = `${process.env.NEXT_PUBLIC_AIRTABLE_ENDPOINT}?tableName=${process.env.NEXT_PUBLIC_AIRTABLE_NAME}`;

function submit(data) {
  return apiRequestExternal(endpoint, "POST", [
    {
      Name: data.name,
      Email: data.email,
      Message: data.message,
    },
  ]);
}

const contact = { submit };

export default contact;
