import { connect } from "mongoose";

export const dbConfig = async () => {
  try {
    await connect(process.env.DB_STRING as string).then(() => {
      // console.clear();
      console.log("DB connected ❤️❤️🚀🚀");
    });
  } catch (error) {
    console.log(error);
  }
};
