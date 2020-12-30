export const successRes = (res, status, messsage) => {
  res.status(status).json({
    success: true,
    messsage,
  });
};
