document.addEventListener("DOMContentLoaded", (event) => {
  const click = document.querySelector("#click");

  click.addEventListener("click", async (e) => {
    e.preventDefault();
    const input = document.querySelector("#sides").value;
    const data = { value: input };

    //! response - это то, что отправляем на сервер
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      document.querySelector("#sides").value = null;

      //! result - это то, что получили из сервер

      const { die, roll } = await response.json();

      const container = document.querySelector("#die-container");

      container.innerHTML = `
     <div class="die">
                <span id="number" class="roll">
                  ${roll}
                </span>
              </div>
     `;
    } catch (error) {
      console.log("error ", error);
    }
  });
});
