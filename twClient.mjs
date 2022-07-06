import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi({
  appKey: "0sjmCrlCXWoRRzDvpxOj6WAIJ",
  appSecret: "02cyGs036HMPXm1nCz8reta2geyfDh9IUDUT2loiK1vG7W1v1I",
  accessToken: "1363061419382464513-qTRYY6L2kenegHGfV6qWtPg7pe7ckJ",
  accessSecret: "5mRloW6nVF2LT9VXl60JK1wCeAqp3jjqlvOzYrjiDUDNf",
});

const rwClient = client.readWrite;

// module.exports = rwClient;
export default rwClient;
