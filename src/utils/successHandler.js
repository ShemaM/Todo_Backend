export default (res, status, messsage) => {
  res.status(status).json({
    success: true,
    messsage,
  });
};
