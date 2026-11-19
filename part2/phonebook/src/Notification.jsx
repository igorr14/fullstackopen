export const Notification = ({
  notification: { isError, text },
  setNotification,
}) => {
  setTimeout(() => {
    setNotification({
      isError: false,
      text: '',
    });
  }, 5000);

  return isError ? (
    <p className="error">{text}</p>
  ) : (
    <p className="success">{text}</p>
  );
};
