const getToast = () => import("react-toastify").then(({ toast }) => toast);

export const toast = {
  error: (...args) => getToast().then((instance) => instance.error(...args)),
  notify: (...args) => getToast().then((instance) => instance(...args)),
};
