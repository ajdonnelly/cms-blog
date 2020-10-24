const newFormHandler = async function(event) {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="post-title"]').value;
  const comment_text = document.querySelector('textarea[name="content"]').value;

  const response = localStorage.getItem("response");
  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      postTitle,
      comment_text
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${response}`
    }
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#add-post-form")
  .addEventListener("submit", newFormHandler);
