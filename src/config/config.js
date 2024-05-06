const appWriteConfig = {
  appWriteUrl: String(process.env.BLOGIFY_PROJECT_URL),
  appWriteProjectId: String(process.env.BLOGIFY_PROJECT_ID),
  appWriteDataBaseId: String(process.env.BLOGIFY_DATABASE_ID),
  appWriteCollectionId: String(process.env.BLOGIFY_DBCOLLECTION_ID),
  appWriteBucketId: String(process.env.BLOGIFY_BUCKET_ID),
};

export default appWriteConfig;
