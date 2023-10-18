const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector("[name=productId]").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;

  const producElement = btn.closes("article");
  fetch("/admin/product" + prodId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((result) => {
      console.log(result);
    })
    .then((data) => {
      console.log(data);
      producElement.parentNode.removeChild(producElement);
    })
    .catch((err) => {
      console.log(err);
    });
};
