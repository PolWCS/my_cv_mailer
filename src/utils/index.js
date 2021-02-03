import app from "../base";

const storage = app.storage();

export const getUrl = async (urlRef) => {
  const mediaName = urlRef.split("/")[2];
  const mediaRef = urlRef.split("/").splice(0, 2);
  const url = await storage
    .ref(`${mediaRef[0]}/${mediaRef[1]}`)
    .child(mediaName)
    .getDownloadURL();
  return url;
};

export const getRef = async (urlRef) => {
  const mediaName = urlRef.split("/")[2];
  const mediaRef = urlRef.split("/").splice(0, 2);
  const reference = await storage
    .ref(`${mediaRef[0]}/${mediaRef[1]}`)
    .child(mediaName);
  return reference;
};
