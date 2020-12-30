export const errorRes = (res, status, messsage) => {
  res.status(status).json({
    success: false,
    messsage,
  });
};
