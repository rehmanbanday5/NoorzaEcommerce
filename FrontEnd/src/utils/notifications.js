const getToast = () => import("react-toastify").then(({ toast }) => toast);

export const toast = {
  error: (...args) => getToast().then((instance) => instance.error(...args)),

  success: (...args) =>
    getToast().then((instance) => instance.success(...args)),

  notify: (...args) => getToast().then((instance) => instance(...args)),
};
